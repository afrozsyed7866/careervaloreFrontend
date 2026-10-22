// src/utils/bulkParser.js
// Turns ONE big pasted text (or JSON) into the fields used by the Add Job form and the Blog form.

/* ----------------------------- Templates ----------------------------- */

export const JOB_TEMPLATE = `Title:
Company:
Logo:
Location:
Salary:
Type: fulltime
Sector:
Deadline:
Apply Link:

About Company:

Description:
-

Requirements:
-

Roles and Responsibilities:
-

Selection Process:
-
`;

export const BLOG_TEMPLATE = `Title:
Author:
Banner:
Meta Title:
Meta Description:
Keywords:

Content:


Content 1:
Image:
Description:
---
Image:
Description:

Content 2:
Image:
Description:

Content 3:
Image:
Description:
`;

/* ------------------------- Label (alias) maps ------------------------- */

const buildAliasMap = (fields) => {
  const map = {};
  Object.entries(fields).forEach(([key, aliases]) => {
    aliases.forEach((alias) => {
      map[alias] = key;
    });
  });
  return map;
};

const JOB_ALIASES = buildAliasMap({
  title: ["title", "job title", "position", "designation", "post name", "job role"],
  company: ["company", "company name", "organization", "organisation", "employer"],
  image: ["logo", "company logo", "logo url", "company logo url", "image", "image url"],
  location: ["location", "job location", "work location", "place", "city"],
  salary: ["salary", "package", "pay", "ctc", "stipend", "salary range", "compensation"],
  type: ["type", "job type", "employment type", "work type"],
  sector: ["sector", "industry", "category", "domain", "field"],
  deadline: ["deadline", "application deadline", "last date", "last date to apply", "apply before", "closing date"],
  jobLink: ["apply link", "job link", "application link", "job application link", "apply url", "apply here", "link", "url"],
  aboutCompany: ["about company", "about the company", "company overview", "about us", "company description"],
  description: ["description", "job description", "about the job", "about the role", "job summary", "overview", "summary"],
  requirements: ["requirements", "requirement", "qualifications", "qualification", "eligibility", "skills", "skills required", "required skills"],
  rolesAndResponsibilities: ["roles and responsibilities", "responsibilities", "key responsibilities", "roles", "duties"],
  selectionProcess: ["selection process", "hiring process", "recruitment process", "interview process", "selection procedure"],
});

const BLOG_ALIASES = buildAliasMap({
  title: ["title", "blog title", "post title", "heading"],
  author: ["author", "author name", "written by", "by"],
  bannerUrl: ["banner", "banner url", "banner image", "cover", "cover image", "featured image", "thumbnail"],
  metaTitle: ["meta title", "seo title", "metatitle"],
  metaDescription: ["meta description", "seo description", "metadescription"],
  keywords: ["keywords", "keyword", "tags", "meta keywords", "seo keywords"],
  content: ["content", "main content", "body", "article", "blog content", "post content"],
  content1: ["content 1", "content1", "content section 1", "section 1"],
  content2: ["content 2", "content2", "content section 2", "section 2"],
  content3: ["content 3", "content3", "content section 3", "section 3"],
});

/* ----------------------------- Basic helpers ----------------------------- */

const BULLET_REGEX = /^\s*(?:[-*•●▪◦‣–—]|\d+[.)])(?:\s+|$)/;
const URL_REGEX = /https?:\/\/[^\s<>"')\]]+/i;

const normalizeLabel = (label) =>
  label
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const camelToWords = (key) => key.replace(/([a-z0-9])([A-Z])/g, "$1 $2");

const stripBullet = (line) => line.replace(BULLET_REGEX, "").trim();

const truncate = (text, max) => {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).trim();
};

/* ----------------------------- Section splitting ----------------------------- */

// Checks if a line looks like "Label: value" (or just "Label") for a known label
const matchHeader = (rawLine, aliasMap) => {
  const cleaned = rawLine
    .trim()
    .replace(/^#{1,6}\s*/, "") // markdown headings
    .replace(/\*\*|__/g, "") // bold markers
    .trim();
  if (!cleaned) return null;

  const withValue = cleaned.match(/^([A-Za-z][A-Za-z0-9 &/_-]{0,40}?)\s*[:：]\s*(.*)$/);
  if (withValue) {
    const key = aliasMap[normalizeLabel(withValue[1])];
    if (key) return { key, rest: withValue[2].trim() };
  }

  const labelOnly = cleaned.match(/^([A-Za-z][A-Za-z0-9 &/_-]{0,40})$/);
  if (labelOnly) {
    const key = aliasMap[normalizeLabel(labelOnly[1])];
    if (key) return { key, rest: "" };
  }

  return null;
};

const tryParseJson = (text) => {
  const stripped = text
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/, "")
    .trim();
  if (!stripped.startsWith("{")) return null;
  try {
    const parsed = JSON.parse(stripped);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : null;
  } catch (error) {
    return null;
  }
};

// Converts a JSON value into the same "lines" shape the text parser produces
const jsonValueToLines = (value) => {
  let lines;
  if (Array.isArray(value)) {
    lines = value.flatMap((item) => {
      if (item && typeof item === "object") {
        return [`Image: ${item.imageUrl || item.image || ""}`, `Description: ${item.description || ""}`, "---"];
      }
      return [`- ${String(item)}`];
    });
  } else {
    lines = [String(value)];
  }
  return lines.flatMap((line) => line.split("\n"));
};

const parseSections = (text, aliasMap) => {
  const sections = {};
  const preamble = [];

  const json = tryParseJson(text.trim());
  if (json) {
    Object.entries(json).forEach(([jsonKey, value]) => {
      const key = aliasMap[normalizeLabel(camelToWords(jsonKey))];
      if (!key || value === null || value === undefined) return;
      sections[key] = [...(sections[key] || []), ...jsonValueToLines(value)];
    });
    return { sections, preamble };
  }

  let currentKey = null;
  text
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .forEach((line) => {
      const header = matchHeader(line, aliasMap);
      if (header) {
        currentKey = header.key;
        if (!sections[currentKey]) sections[currentKey] = [];
        if (header.rest) sections[currentKey].push(header.rest);
      } else if (currentKey) {
        sections[currentKey].push(line);
      } else {
        preamble.push(line);
      }
    });

  return { sections, preamble };
};

/* ----------------------------- Value readers ----------------------------- */

const getText = (lines = []) => lines.join("\n").trim();

const getLine = (lines = []) =>
  lines
    .map((line) => line.trim())
    .filter(Boolean)
    .join(" ");

const getUrl = (lines = []) => {
  const match = getText(lines).match(URL_REGEX);
  return match ? match[0].replace(/[.,;]+$/, "") : getLine(lines);
};

// One item per bullet (or per line when there are no bullets)
const getList = (lines = []) => {
  const hasBullets = lines.some((line) => BULLET_REGEX.test(line));
  const items = [];
  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) return;
    if (BULLET_REGEX.test(line)) {
      items.push(stripBullet(line));
    } else if (hasBullets && items.length > 0) {
      items[items.length - 1] = `${items[items.length - 1]} ${trimmed}`.trim(); // wrapped bullet line
    } else {
      items.push(trimmed);
    }
  });
  return items.filter(Boolean);
};

// Paragraphs separated by a blank line (or bullets, or one per line)
const getParagraphs = (lines = []) => {
  if (lines.some((line) => BULLET_REGEX.test(line))) return getList(lines);
  const text = getText(lines);
  if (!text) return [];
  const blocks = text
    .split(/\n\s*\n/)
    .map((block) =>
      block
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .join(" ")
    )
    .filter(Boolean);
  if (blocks.length === 1 && text.includes("\n")) {
    return text
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  }
  return blocks;
};

const getKeywords = (lines = []) => {
  const seen = new Set();
  const keywords = [];
  getText(lines)
    .split(/[,;\n]/)
    .forEach((piece) => {
      const keyword = stripBullet(piece).replace(/^#/, "").trim();
      if (keyword && !seen.has(keyword.toLowerCase())) {
        seen.add(keyword.toLowerCase());
        keywords.push(keyword);
      }
    });
  return keywords;
};

/* ----------------------------- Job helpers ----------------------------- */

const normalizeJobType = (value) => {
  const v = value.toLowerCase().replace(/[^a-z]/g, "");
  if (v.includes("intern")) return "internship";
  if (v.includes("part")) return "parttime";
  if (v.includes("contract") || v.includes("freelance") || v.includes("temporary")) return "contract";
  if (v.includes("full") || v.includes("permanent")) return "fulltime";
  if (v.includes("remote") || v.includes("workfromhome") || v.includes("wfh")) return "remote";
  return "";
};

const buildDate = (year, month, day) => {
  const y = Number(year);
  const m = Number(month);
  const d = Number(day);
  const check = new Date(y, m - 1, d);
  if (check.getFullYear() !== y || check.getMonth() !== m - 1 || check.getDate() !== d) return "";
  return `${String(y).padStart(4, "0")}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
};

// Returns YYYY-MM-DD (what <input type="date"> needs) or "" if unreadable
const toDateInputValue = (value) => {
  const text = value.trim();
  if (!text) return "";

  let match = text.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/); // 2026-12-31
  if (match) return buildDate(match[1], match[2], match[3]);

  match = text.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/); // 31/12/2026 (day first)
  if (match) return buildDate(match[3], match[2], match[1]);

  const parsed = new Date(text.replace(/(\d+)(st|nd|rd|th)/gi, "$1")); // 31 December 2026
  if (!Number.isNaN(parsed.getTime())) {
    return buildDate(parsed.getFullYear(), parsed.getMonth() + 1, parsed.getDate());
  }
  return "";
};

/* ----------------------------- Job parser ----------------------------- */

export const parseJobText = (text) => {
  const { sections, preamble } = parseSections(text, JOB_ALIASES);
  const data = {};
  const filled = [];
  const warnings = [];

  const setField = (field, label, value) => {
    const isEmpty = Array.isArray(value) ? value.length === 0 : !value;
    if (isEmpty) return;
    data[field] = value;
    filled.push(label);
  };

  // Title (fall back to the first line of the pasted text)
  let title = getLine(sections.title);
  if (!title) {
    const firstLine = preamble.map((line) => line.trim()).find(Boolean);
    if (firstLine) {
      title = firstLine;
      warnings.push("No \"Title:\" found, so the first line was used as the job title");
    }
  }
  setField("title", "Job Title", title);

  setField("company", "Company", getLine(sections.company));
  setField("image", "Company Logo URL", getUrl(sections.image));
  setField("location", "Location", getLine(sections.location));
  setField("salary", "Salary", getLine(sections.salary));
  setField("sector", "Sector", getLine(sections.sector));
  setField("jobLink", "Job Application Link", getUrl(sections.jobLink));
  setField("aboutCompany", "About Company", getText(sections.aboutCompany));

  const typeText = getLine(sections.type);
  if (typeText) {
    const type = normalizeJobType(typeText);
    if (type) {
      setField("type", "Job Type", type);
    } else {
      warnings.push(`Job type "${typeText}" was not recognised, please choose it manually`);
    }
  }

  const deadlineText = getLine(sections.deadline);
  if (deadlineText) {
    const deadline = toDateInputValue(deadlineText);
    if (deadline) {
      setField("applicationDeadline", "Application Deadline", deadline);
    } else {
      warnings.push(`Could not read the deadline "${deadlineText}", please pick the date manually`);
    }
  }

  setField("description", "Job Description", getParagraphs(sections.description));
  setField("requirements", "Requirements", getList(sections.requirements));
  setField("rolesAndResponsibilities", "Roles and Responsibilities", getList(sections.rolesAndResponsibilities));
  setField("selectionProcess", "Selection Process", getList(sections.selectionProcess));

  const required = [
    ["title", "Job Title"],
    ["company", "Company"],
    ["location", "Location"],
    ["description", "Job Description"],
    ["type", "Job Type"],
    ["sector", "Sector"],
    ["jobLink", "Job Application Link (required by the server)"],
  ];
  const missing = required.filter(([field]) => !data[field]).map(([, label]) => label);

  return { data, filled, missing, warnings };
};

/* ----------------------------- Blog helpers ----------------------------- */

// Splits a content section into [{ imageUrl, description }] using "---" between items
const parseContentItems = (lines = []) => {
  const blocks = getText(lines)
    .split(/^[ \t]*(?:-{3,}|={3,}|\*{3,})[ \t]*$/m)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks
    .map((block) => {
      let imageUrl = "";
      const descriptionLines = [];

      block.split("\n").forEach((line) => {
        const trimmed = line.trim();
        const imageMatch = trimmed.match(/^(?:image(?:\s*url)?|img|photo)\s*[:：]\s*(.*)$/i);
        const descriptionMatch = trimmed.match(/^(?:description|desc|text|caption)\s*[:：]\s*(.*)$/i);

        if (imageMatch && !imageUrl) {
          imageUrl = imageMatch[1] ? getUrl([imageMatch[1]]) : "";
        } else if (imageMatch) {
          // second "Image:" line in the same item is ignored
        } else if (descriptionMatch) {
          if (descriptionMatch[1]) descriptionLines.push(descriptionMatch[1]);
        } else if (!imageUrl && /^https?:\/\/\S+$/i.test(trimmed)) {
          imageUrl = trimmed; // a bare URL line is treated as the image
        } else {
          descriptionLines.push(line);
        }
      });

      return { imageUrl, description: descriptionLines.join("\n").trim() };
    })
    .filter((item) => item.imageUrl || item.description);
};

/* ----------------------------- Blog parser ----------------------------- */

export const parseBlogText = (text) => {
  const { sections, preamble } = parseSections(text, BLOG_ALIASES);
  const data = {};
  const filled = [];
  const warnings = [];

  const setField = (field, label, value) => {
    const isEmpty = Array.isArray(value) ? value.length === 0 : !value;
    if (isEmpty) return;
    data[field] = value;
    filled.push(label);
  };

  let title = getLine(sections.title);
  if (!title) {
    const firstLine = preamble.map((line) => line.trim()).find(Boolean);
    if (firstLine) {
      title = firstLine;
      warnings.push("No \"Title:\" found, so the first line was used as the blog title");
    }
  }
  setField("title", "Title", title);

  setField("author", "Author", getLine(sections.author));
  setField("bannerUrl", "Banner URL", getUrl(sections.bannerUrl));
  setField("metaTitle", "Meta Title", getLine(sections.metaTitle));
  setField("metaDescription", "Meta Description", getLine(sections.metaDescription));
  setField("keywords", "Keywords", getKeywords(sections.keywords));
  setField("content", "Main Content", getText(sections.content));

  ["content1", "content2", "content3"].forEach((key, index) => {
    const items = parseContentItems(sections[key]);
    if (items.length === 0) return;
    data[key] = items;
    filled.push(`Content Section ${index + 1} (${items.length} item${items.length > 1 ? "s" : ""})`);
    items.forEach((item, itemIndex) => {
      if (!item.imageUrl || !item.description) {
        warnings.push(`Content Section ${index + 1}, item ${itemIndex + 1} needs both an image URL and a description`);
      }
    });
  });

  // Generate SEO fields when they were not pasted
  if (!data.metaTitle && data.title) {
    data.metaTitle = truncate(data.title, 60);
    filled.push("Meta Title (generated from Title)");
  }
  if (!data.metaDescription && data.content) {
    data.metaDescription = truncate(data.content, 160);
    filled.push("Meta Description (generated from Content)");
  }

  // Length limits from the blog model
  if (data.title && data.title.length > 100) warnings.push("Title is longer than 100 characters");
  if (data.metaTitle && data.metaTitle.length > 60) warnings.push("Meta Title is longer than 60 characters");
  if (data.metaDescription && data.metaDescription.length > 160) warnings.push("Meta Description is longer than 160 characters");

  const required = [
    ["title", "Title"],
    ["author", "Author"],
    ["bannerUrl", "Banner URL"],
    ["keywords", "Keywords"],
    ["content", "Main Content"],
  ];
  const missing = required
    .filter(([field]) => !data[field] || (Array.isArray(data[field]) && data[field].length === 0))
    .map(([, label]) => label);

  return { data, filled, missing, warnings };
};