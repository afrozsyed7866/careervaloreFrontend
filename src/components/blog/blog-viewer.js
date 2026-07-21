"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Edit, Calendar, User } from "lucide-react"
import Image from "next/image"

// Fallback image
const fallbackImage = "/errImg.webp"; // Ensure this exists in /public

export default function BlogViewer({ blog, onBack, onEdit }) {
  const [mounted, setMounted] = useState(false)
  const [bannerSrc, setBannerSrc] = useState(fallbackImage)
  const [contentImages, setContentImages] = useState({})

  useEffect(() => {
    setMounted(true)
    
    // Check banner image
    if (blog.bannerUrl) {
      const img = new window.Image()
      img.src = blog.bannerUrl
      img.onload = () => setBannerSrc(blog.bannerUrl)
      img.onerror = () => setBannerSrc(fallbackImage)
    }

    // Check content images
    const checkImage = (url, index, section) => {
      const img = new window.Image()
      img.src = url
      img.onload = () => {
        setContentImages(prev => ({
          ...prev,
          [`${section}-${index}`]: url
        }))
      }
      img.onerror = () => {
        setContentImages(prev => ({
          ...prev,
          [`${section}-${index}`]: fallbackImage
        }))
      }
    }

    // Check images in content sections
    blog.content1?.forEach((item, index) => {
      if (item.imageUrl) checkImage(item.imageUrl, index, 'content1')
    })
    blog.content2?.forEach((item, index) => {
      if (item.imageUrl) checkImage(item.imageUrl, index, 'content2')
    })
    blog.content3?.forEach((item, index) => {
      if (item.imageUrl) checkImage(item.imageUrl, index, 'content3')
    })
  }, [blog])

  const formatDate = (dateString) => {
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(dateString))
  }

  const renderContentSection = (content, title, sectionKey) => {
    if (!content?.length) return null
    return (
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="grid gap-6">
          {content.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="md:flex gap-6">
                  <div className="md:w-1/3 mb-4 md:mb-0">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={contentImages[`${sectionKey}-${index}`] || fallbackImage}
                        alt={`Content ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (!mounted) return null

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          className="flex items-center gap-2 px-4 py-2 text-sm border rounded hover:bg-gray-100"
          onClick={onBack}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to List
        </button>
        <button
          className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onEdit}
        >
          <Edit className="w-4 h-4" />
          Edit Blog
        </button>
      </div>

      {/* Blog Content */}
      <article className="space-y-8">
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
          <Image
            src={bannerSrc}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">{blog.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(blog.createdAt)}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {blog.keywords.map((keyword, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
            {blog.content}
          </div>
        </div>

        {renderContentSection(blog.content1, "Additional Content Section 1", "content1")}
        {renderContentSection(blog.content2, "Additional Content Section 2", "content2")}
        {renderContentSection(blog.content3, "Additional Content Section 3", "content3")}

        <div className="border border-gray-200 rounded-lg bg-white mt-8">
          <div className="px-6 py-4 border-b">
            <h2 className="text-xl font-semibold">SEO Information</h2>
          </div>
          <div className="px-6 py-4 space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700">Meta Title</h4>
              <p className="text-gray-600">{blog.metaTitle}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Meta Description</h4>
              <p className="text-gray-600">{blog.metaDescription}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}