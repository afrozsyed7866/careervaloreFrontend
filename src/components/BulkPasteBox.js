// src/components/BulkPasteBox.js
"use client";

import { useState, useEffect } from "react";
import { ClipboardPaste, Copy, Check, Sparkles, Trash2 } from "lucide-react";

// Reusable "paste everything in one place" box.
// onFill(text) must fill the parent form and return { filled, missing, warnings }.
export default function BulkPasteBox({ title, hint, placeholder, template, onFill, resetKey }) {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  // Clear the box when the parent changes resetKey (e.g. after a successful submit)
  useEffect(() => {
    setText("");
    setResult(null);
  }, [resetKey]);

  const handleFill = () => {
    if (!text.trim()) {
      setResult({ error: "Paste the full text in the box first." });
      return;
    }
    setResult(onFill(text));
  };

  // One click: read the clipboard, put it in the box and fill the form
  const handlePasteAndFill = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      if (!clipboardText.trim()) {
        setResult({ error: "Your clipboard is empty. Copy the text first." });
        return;
      }
      setText(clipboardText);
      setResult(onFill(clipboardText));
    } catch (err) {
      setResult({ error: "Could not read the clipboard. Click inside the box and press Ctrl+V instead." });
    }
  };

  const handleCopyTemplate = async () => {
    try {
      await navigator.clipboard.writeText(template);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setText(template); // Fallback: put the template in the box so it can be copied manually
    }
  };

  const handleClear = () => {
    setText("");
    setResult(null);
  };

  const hasIssues = result && ((result.missing && result.missing.length > 0) || (result.warnings && result.warnings.length > 0));

  return (
    <div className="mb-6 p-4 rounded-lg bg-blue-50" style={{ border: "1px solid #bfdbfe" }}>
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <div>
          <h3 className="text-lg font-semibold text-blue-700">{title}</h3>
          <p className="text-sm text-gray-600">{hint}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handlePasteAndFill}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm text-white bg-green-600 rounded-md hover:bg-green-700"
          >
            <ClipboardPaste className="w-4 h-4" />
            Paste &amp; Fill
          </button>
          <button
            type="button"
            onClick={handleCopyTemplate}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm text-blue-700 bg-white rounded-md hover:bg-blue-100"
            style={{ border: "1px solid #93c5fd" }}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied!" : "Copy Template"}
          </button>
        </div>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        rows={10}
        className="w-full p-3 text-sm font-mono bg-white rounded-md focus:ring-2 focus:ring-blue-500"
        style={{ border: "1px solid #9ca3af" }}
      />

      <div className="flex flex-wrap gap-2 mt-3">
        <button
          type="button"
          onClick={handleFill}
          className="inline-flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          <Sparkles className="w-4 h-4" />
          Fill Form
        </button>
        <button
          type="button"
          onClick={handleClear}
          disabled={!text && !result}
          className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 bg-white rounded-md hover:bg-gray-100 disabled:opacity-50"
          style={{ border: "1px solid #d1d5db" }}
        >
          <Trash2 className="w-4 h-4" />
          Clear
        </button>
      </div>

      {/* Result summary */}
      {result && (
        <div className="mt-3 space-y-2 text-sm">
          {result.error && <p className="p-2 text-red-700 bg-red-100 rounded-md">{result.error}</p>}

          {result.filled && result.filled.length > 0 && (
            <p className="p-2 text-green-800 bg-green-100 rounded-md">
              <strong>Filled:</strong> {result.filled.join(", ")}
            </p>
          )}

          {result.warnings && result.warnings.length > 0 && (
            <div className="p-2 text-yellow-800 bg-yellow-100 rounded-md">
              <strong>Please check:</strong>
              <ul className="ml-5 list-disc">
                {result.warnings.map((warning, index) => (
                  <li key={index}>{warning}</li>
                ))}
              </ul>
            </div>
          )}

          {result.missing && result.missing.length > 0 && (
            <p className="p-2 text-red-700 bg-red-100 rounded-md">
              <strong>Still missing (fill these in the form below):</strong> {result.missing.join(", ")}
            </p>
          )}

          {!result.error && result.filled && result.filled.length > 0 && !hasIssues && (
            <p className="text-gray-600">Everything was found. Review the form below and submit.</p>
          )}

          {!result.error && result.filled && result.filled.length === 0 && (
            <p className="p-2 text-red-700 bg-red-100 rounded-md">
              Nothing could be read from this text. Use the labels from the template (for example &quot;Title:&quot;).
            </p>
          )}
        </div>
      )}

      {/* Format help */}
      <details className="mt-3 text-sm text-gray-700">
        <summary className="cursor-pointer text-blue-700">See the format</summary>
        <pre className="p-3 mt-2 overflow-x-auto text-xs bg-white rounded-md" style={{ border: "1px solid #e5e7eb" }}>
          {template}
        </pre>
        <p className="mt-2 text-xs text-gray-500">
          Put a label at the start of a line (like &quot;Title:&quot;). Bullets (- or 1.) become separate list items. You can also paste JSON.
        </p>
      </details>
    </div>
  );
}