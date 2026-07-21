// components/blog/BlogForm.jsx
"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Save, X } from "lucide-react";

export default function BlogForm({ blog, onSubmit, onCancel, isLoading }) {
  const [formData, setFormData] = useState({
    title: "",
    bannerUrl: "",
    metaTitle: "",
    metaDescription: "",
    keywords: [],
    content: "",
    content1: [],
    content2: [],
    content3: [],
    author: "",
  });

  const [keywordInput, setKeywordInput] = useState("");

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title || "",
        bannerUrl: blog.bannerUrl || "",
        metaTitle: blog.metaTitle || "",
        metaDescription: blog.metaDescription || "",
        keywords: blog.keywords || [],
        content: blog.content || "",
        content1: blog.content1 || [],
        content2: blog.content2 || [],
        content3: blog.content3 || [],
        author: blog.author || "",
      });
    }
  }, [blog]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addKeyword = () => {
    if (keywordInput.trim() && !formData.keywords.includes(keywordInput.trim())) {
      handleInputChange("keywords", [...formData.keywords, keywordInput.trim()]);
      setKeywordInput("");
    }
  };

  const removeKeyword = (index) => {
    handleInputChange("keywords", formData.keywords.filter((_, i) => i !== index));
  };

  const addContentItem = (contentType) => {
    const newItem = { imageUrl: "", description: "" };
    handleInputChange(contentType, [...formData[contentType], newItem]);
  };

  const updateContentItem = (contentType, index, field, value) => {
    const updatedContent = [...formData[contentType]];
    updatedContent[index] = { ...updatedContent[index], [field]: value };
    handleInputChange(contentType, updatedContent);
  };

  const removeContentItem = (contentType, index) => {
    handleInputChange(contentType, formData[contentType].filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.title ||
      !formData.bannerUrl ||
      !formData.metaTitle ||
      !formData.metaDescription ||
      !formData.content ||
      !formData.author
    ) {
      alert("All required fields must be filled");
      return;
    }

    if (!Array.isArray(formData.keywords) || formData.keywords.length === 0) {
      alert("At least one keyword is required");
      return;
    }

    await onSubmit(formData);
  };

  const renderContentSection = (contentType, title) => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="text-lg font-semibold text-gray-700">{title}</label>
        <button
          type="button"
          onClick={() => addContentItem(contentType)}
          className="flex items-center px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-1" />
          Add Item
        </button>
      </div>
      {formData[contentType].map((item, index) => (
        <div key={index} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Item {index + 1}</span>
              <button
                type="button"
                onClick={() => removeContentItem(contentType, index)}
                className="p-1 text-red-600 hover:text-red-800"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
              <input
                type="url"
                value={item.imageUrl}
                onChange={(e) => updateContentItem(contentType, index, "imageUrl", e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={item.description}
                onChange={(e) => updateContentItem(contentType, index, "description", e.target.value)}
                placeholder="Enter description..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900">
          {blog ? "Update Blog Post" : "Create New Blog Post"}
        </h2>
      </div>
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="Enter blog title"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Author *</label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => handleInputChange("author", e.target.value)}
                placeholder="Enter author name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Banner URL *</label>
            <input
              type="url"
              value={formData.bannerUrl}
              onChange={(e) => handleInputChange("bannerUrl", e.target.value)}
              placeholder="https://example.com/banner.jpg"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* SEO Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">SEO Information</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title *</label>
              <input
                type="text"
                value={formData.metaTitle}
                onChange={(e) => handleInputChange("metaTitle", e.target.value)}
                placeholder="Enter meta title"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description *</label>
              <textarea
                value={formData.metaDescription}
                onChange={(e) => handleInputChange("metaDescription", e.target.value)}
                placeholder="Enter meta description"
                rows={3}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Keywords *</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={keywordInput}
                  onChange={(e) => setKeywordInput(e.target.value)}
                  placeholder="Enter keyword and press Add"
                  onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addKeyword())}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={addKeyword}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center gap-1"
                  >
                    {keyword}
                    <button
                      type="button"
                      onClick={() => removeKeyword(index)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Main Content *</label>
            <textarea
              value={formData.content}
              onChange={(e) => handleInputChange("content", e.target.value)}
              placeholder="Enter main blog content"
              rows={8}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Content Sections */}
          {renderContentSection("content1", "Content Section 1")}
          {renderContentSection("content2", "Content Section 2")}
          {renderContentSection("content3", "Content Section 3")}

          {/* Form Actions */}
          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              <Save className="w-4 h-4 mr-2" />
              {isLoading ? "Saving..." : blog ? "Update Blog" : "Create Blog"}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}