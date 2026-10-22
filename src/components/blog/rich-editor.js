"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  List,
  ListOrdered,
  Quote,
  Heading1,
  Heading2,
  Heading3,
  Link as LinkIcon,
  Image as ImageIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Undo,
  Redo,
  Table as TableIcon,
  Minus,
  Trash2,
} from "lucide-react";

const MAX_IMAGE_BYTES = 2 * 1024 * 1024; // 2MB per pasted/dropped image

// NOTE: styles.css has a global `button { all: unset }`, so every class we need is set explicitly.
const Btn = ({ onClick, active, disabled, title, children }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    title={title}
    className={`inline-flex items-center justify-center p-2 rounded cursor-pointer hover:bg-gray-200 ${
      disabled ? "opacity-40 cursor-not-allowed" : ""
    } ${active ? "bg-gray-200 text-blue-600" : "text-gray-700"}`}
  >
    {children}
  </button>
);

const Divider = () => <span className="w-px h-5 bg-gray-300 mx-1" />;

function Toolbar({ editor }) {
  if (!editor) return null;

  const setLink = () => {
    const prev = editor.getAttributes("link").href;
    const url = window.prompt("Link URL", prev || "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const addImage = () => {
    const url = window.prompt("Image URL (https://...)");
    if (url) editor.chain().focus().setImage({ src: url }).run();
  };

  return (
    <div className="flex flex-wrap items-center gap-1 p-2 border-b border-gray-300 bg-gray-50 rounded-t-md">
      <Btn title="Undo" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
        <Undo className="w-4 h-4" />
      </Btn>
      <Btn title="Redo" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
        <Redo className="w-4 h-4" />
      </Btn>
      <Divider />

      <Btn title="Heading 1" active={editor.isActive("heading", { level: 1 })} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
        <Heading1 className="w-4 h-4" />
      </Btn>
      <Btn title="Heading 2" active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
        <Heading2 className="w-4 h-4" />
      </Btn>
      <Btn title="Heading 3" active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
        <Heading3 className="w-4 h-4" />
      </Btn>
      <Divider />

      <Btn title="Bold" active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}>
        <Bold className="w-4 h-4" />
      </Btn>
      <Btn title="Italic" active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}>
        <Italic className="w-4 h-4" />
      </Btn>
      <Btn title="Underline" active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()}>
        <UnderlineIcon className="w-4 h-4" />
      </Btn>
      <Btn title="Strikethrough" active={editor.isActive("strike")} onClick={() => editor.chain().focus().toggleStrike().run()}>
        <Strikethrough className="w-4 h-4" />
      </Btn>
      <Divider />

      <Btn title="Bullet list" active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}>
        <List className="w-4 h-4" />
      </Btn>
      <Btn title="Numbered list" active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        <ListOrdered className="w-4 h-4" />
      </Btn>
      <Btn title="Quote" active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
        <Quote className="w-4 h-4" />
      </Btn>
      <Btn title="Divider line" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <Minus className="w-4 h-4" />
      </Btn>
      <Divider />

      <Btn title="Align left" active={editor.isActive({ textAlign: "left" })} onClick={() => editor.chain().focus().setTextAlign("left").run()}>
        <AlignLeft className="w-4 h-4" />
      </Btn>
      <Btn title="Align center" active={editor.isActive({ textAlign: "center" })} onClick={() => editor.chain().focus().setTextAlign("center").run()}>
        <AlignCenter className="w-4 h-4" />
      </Btn>
      <Btn title="Align right" active={editor.isActive({ textAlign: "right" })} onClick={() => editor.chain().focus().setTextAlign("right").run()}>
        <AlignRight className="w-4 h-4" />
      </Btn>
      <Divider />

      <Btn title="Link" active={editor.isActive("link")} onClick={setLink}>
        <LinkIcon className="w-4 h-4" />
      </Btn>
      <Btn title="Image from URL" onClick={addImage}>
        <ImageIcon className="w-4 h-4" />
      </Btn>
      <Btn title="Insert table" onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}>
        <TableIcon className="w-4 h-4" />
      </Btn>

      {editor.isActive("table") && (
        <>
          <Divider />
          <Btn title="Add row below" onClick={() => editor.chain().focus().addRowAfter().run()}>
            <span className="text-xs px-1">+Row</span>
          </Btn>
          <Btn title="Add column after" onClick={() => editor.chain().focus().addColumnAfter().run()}>
            <span className="text-xs px-1">+Col</span>
          </Btn>
          <Btn title="Delete row" onClick={() => editor.chain().focus().deleteRow().run()}>
            <span className="text-xs px-1">-Row</span>
          </Btn>
          <Btn title="Delete column" onClick={() => editor.chain().focus().deleteColumn().run()}>
            <span className="text-xs px-1">-Col</span>
          </Btn>
          <Btn title="Delete table" onClick={() => editor.chain().focus().deleteTable().run()}>
            <Trash2 className="w-4 h-4 text-red-600" />
          </Btn>
        </>
      )}
    </div>
  );
}

// Turns pasted / dropped image FILES (e.g. a screenshot) into inline base64 images.
function insertImageFiles(view, files, pos) {
  files.forEach((file) => {
    if (file.size > MAX_IMAGE_BYTES) {
      alert(`"${file.name || "Image"}" is larger than 2MB. Please compress it or paste an image URL instead.`);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const node = view.state.schema.nodes.image.create({ src: reader.result });
      const tr =
        typeof pos === "number"
          ? view.state.tr.insert(pos, node)
          : view.state.tr.replaceSelectionWith(node);
      view.dispatch(tr);
    };
    reader.readAsDataURL(file);
  });
}

/**
 * Props:
 *  - initialContent: HTML string loaded once when the editor mounts
 *  - onChange(html): called on every edit ("" when the editor is empty)
 */
export default function RichEditor({ initialContent = "", onChange }) {
  const editor = useEditor({
    immediatelyRender: false, // required in Next.js to avoid SSR hydration errors
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false, autolink: true }),
      Image.configure({ allowBase64: true }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({ placeholder: "Write or paste your blog content here..." }),
      Table,
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "blog-content min-h-[350px] p-4 focus:outline-none",
      },
      handlePaste(view, event) {
        const files = Array.from(event.clipboardData?.files || []).filter((f) => f.type.startsWith("image/"));
        if (!files.length) return false; // normal text/HTML paste -> TipTap handles it
        event.preventDefault();
        insertImageFiles(view, files);
        return true;
      },
      handleDrop(view, event) {
        const files = Array.from(event.dataTransfer?.files || []).filter((f) => f.type.startsWith("image/"));
        if (!files.length) return false;
        event.preventDefault();
        const coords = view.posAtCoords({ left: event.clientX, top: event.clientY });
        insertImageFiles(view, files, coords?.pos);
        return true;
      },
    },
    onUpdate: ({ editor }) => {
      onChange?.(editor.isEmpty ? "" : editor.getHTML());
    },
  });

  return (
    <div className="border border-gray-300 rounded-md bg-white">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}