// app/blogs/page.jsx
'use client'

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Clock, User } from "lucide-react"

const fallbackImage = "/errImg.webp"

async function getBlogPosts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`, { cache: "no-store" })
    if (!res.ok) throw new Error("Failed to fetch blogs")
    const data = await res.json()
    return data.map((blog) => ({
      id: blog._id,
      title: blog.title,
      image: blog.bannerUrl,
      excerpt: blog.metaDescription,
      author: blog.author,
      readTime: Math.max(1, Math.floor(blog.content.length / 600)),
      category: blog.keywords?.[0] || "General",
    }))
  } catch (err) {
    console.error("Error fetching blog posts:", err)
    return []
  }
}

export default function BlogsPage() {
  const [posts, setPosts] = useState([])
  const [bannerImages, setBannerImages] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const blogs = await getBlogPosts()
      setPosts(blogs)

      blogs.forEach((blog) => {
        if (blog.image) {
          const img = new window.Image()
          img.src = blog.image
          img.onload = () => {
            setBannerImages((prev) => ({
              ...prev,
              [blog.id]: blog.image,
            }))
          }
          img.onerror = () => {
            setBannerImages((prev) => ({
              ...prev,
              [blog.id]: fallbackImage,
            }))
          }
        } else {
          setBannerImages((prev) => ({
            ...prev,
            [blog.id]: fallbackImage,
          }))
        }
      })
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="p-0">
                <Image
                  src={bannerImages[post.id] || fallbackImage}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
                <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold mb-3 line-clamp-2">
                  <Link href={`/blogs1/${post.id}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
