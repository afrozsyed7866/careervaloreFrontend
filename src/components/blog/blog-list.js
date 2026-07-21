"use client"
import { useState, useEffect } from "react"
import { Edit, Trash2, Eye, Plus } from "lucide-react"
import Image from "next/image"

const fallbackImage = "/errImg.webp"; // Ensure this exists in /public

export default function BlogList({ onEdit, onView, onCreateNew }) {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [bannerImages, setBannerImages] = useState({}) // Track banner image sources

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`)
      if (!response.ok) throw new Error("Failed to fetch blogs")
      const data = await response.json()
      setBlogs(data)

      // Check banner images for each blog
      data.forEach((blog) => {
        if (blog.bannerUrl) {
          const img = new window.Image()
          img.src = blog.bannerUrl
          img.onload = () => {
            setBannerImages((prev) => ({
              ...prev,
              [blog._id]: blog.bannerUrl,
            }))
          }
          img.onerror = () => {
            setBannerImages((prev) => ({
              ...prev,
              [blog._id]: fallbackImage,
            }))
          }
        } else {
          setBannerImages((prev) => ({
            ...prev,
            [blog._id]: fallbackImage,
          }))
        }
      })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

const handleDelete = async (id) => {
  if (window.confirm("Are you sure you want to delete this blog post?")) {
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
      const headers = {
        "Content-Type": "application/json",
      };

      // Add Authorization header if token exists
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${id}`, {
        method: "DELETE",
        headers,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete blog");
      }

      setBlogs(blogs.filter((blog) => blog._id !== id));
      alert("Blog post deleted successfully");
    } catch (err) {
      alert("Failed to delete blog post: " + err.message);
    }
  }
};

  const formatDate = (dateString) => {
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(dateString))
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="text-lg text-gray-600">Loading blogs...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="text-red-600">Error: {error}</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
        <button
          onClick={onCreateNew}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create New Blog
        </button>
      </div>

      {blogs.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <div className="text-gray-500 text-lg mb-4">No blog posts found</div>
          <button
            onClick={onCreateNew}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mx-auto"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Your First Blog Post
          </button>
        </div>
      ) : (
        <div className="grid gap-6">
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="relative h-48 md:h-full">
                    <Image
                      src={bannerImages[blog._id] || fallbackImage}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold text-gray-900 line-clamp-2">{blog.title}</h2>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => onView(blog)}
                        className="p-2 text-gray-600 hover:text-blue-600 border border-gray-300 rounded"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onEdit(blog)}
                        className="p-2 text-gray-600 hover:text-blue-600 border border-gray-300 rounded"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="p-2 text-red-600 hover:text-red-800 border border-red-300 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    By {blog.author} • {formatDate(blog.createdAt)}
                  </div>
                  <p className="text-gray-700 mb-4 line-clamp-3">{blog.metaDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.keywords.slice(0, 5).map((keyword, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                        {keyword}
                      </span>
                    ))}
                    {blog.keywords.length > 5 && (
                      <span className="border border-gray-300 text-gray-600 px-2 py-1 rounded-full text-xs">
                        +{blog.keywords.length - 5} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>
                      Content Sections:{" "}
                      {[blog.content1, blog.content2, blog.content3].filter((c) => c?.length).length}
                    </span>
                    <span>Last updated: {formatDate(blog.updatedAt)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}