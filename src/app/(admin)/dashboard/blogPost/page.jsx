"use client"

import { useState } from "react"
import BlogList from "@/components/blog/blog-list"
import BlogForm from "@/components/blog/blog-form"
import BlogViewer from "@/components/blog/blog-viewer"

export default function BlogManagement() {
  const [currentView, setCurrentView] = useState("list")
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleCreateNew = () => {
    setSelectedBlog(null)
    setCurrentView("form")
  }

  const handleEdit = (blog) => {
    setSelectedBlog(blog)
    setCurrentView("form")
  }

  const handleView = (blog) => {
    setSelectedBlog(blog)
    setCurrentView("view")
  }
 const token = typeof window !== "undefined" ? localStorage.getItem("token") : null; // Safely access localStorage

const handleFormSubmit = async (formData) => {
  setIsLoading(true)
  try {
    const url = selectedBlog 
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${selectedBlog._id}` 
      : `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`
    const method = selectedBlog ? "PUT" : "POST"

    const headers = {
      "Content-Type": "application/json",
    }

    // Add Authorization header if token exists
    if (token) {
      headers["Authorization"] = `Bearer ${token}`
    }

    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || "Failed to save blog")
    }

    const result = await response.json()
    alert(result.message)
    setCurrentView("list")
  } catch (error) {
    alert(error.message)
  } finally {
    setIsLoading(false)
  }
}
  const handleCancel = () => {
    setCurrentView("list")
    setSelectedBlog(null)
  }

  const handleBack = () => {
    setCurrentView("list")
    setSelectedBlog(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {currentView === "list" && <BlogList onEdit={handleEdit} onView={handleView} onCreateNew={handleCreateNew} />}

        {currentView === "form" && (
          <BlogForm blog={selectedBlog} onSubmit={handleFormSubmit} onCancel={handleCancel} isLoading={isLoading} />
        )}

        {currentView === "view" && selectedBlog && (
          <BlogViewer blog={selectedBlog} onBack={handleBack} onEdit={() => handleEdit(selectedBlog)} />
        )}
      </div>
    </div>
  )
}


