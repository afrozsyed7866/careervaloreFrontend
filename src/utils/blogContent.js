// Helpers shared by the admin viewer and the public blog pages.

const escapeHtml = (str = "") =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const looksLikeHtml = (str = "") =>
  /<\/?(p|h[1-6]|ul|ol|li|div|br|img|table|blockquote|strong|em|a)\b/i.test(str);

// New posts are HTML. Old posts were plain text typed in a <textarea>,
// so turn those into safe paragraphs instead of one long line.
export const toDisplayHtml = (content = "") => {
  if (!content) return "";
  if (looksLikeHtml(content)) return content; // already sanitized by the backend
  return content
    .split(/\n{2,}/)
    .map((para) => `<p>${escapeHtml(para).replace(/\n/g, "<br/>")}</p>`)
    .join("");
};

export const stripHtml = (html = "") =>
  html.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();

export const isContentEmpty = (html = "") => {
  if (/<img\b/i.test(html)) return false;
  return stripHtml(html) === "";
};

export const readTimeFromContent = (html = "") => {
  const words = stripHtml(html).split(" ").filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
};