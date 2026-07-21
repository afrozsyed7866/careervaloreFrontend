import { notFound } from 'next/navigation';
import Image from 'next/image';
import Head from 'next/head';
import { fetchCardDetails } from '@/utils/apicall';
import { Clock, User, Calendar } from 'lucide-react';

// Fetch blog post by ID
const getBlogPost = async (id) => {
  try {
    const response = await fetchCardDetails(
      `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${id}`,
      'GET'
    );
    if (!response || response.error) {
      throw new Error(response?.error || 'Failed to fetch blog post');
    }
    return response;
  } catch (error) {
    console.error('Error fetching blog post:', error.message);
    return null; // Return null to trigger notFound()
  }
};

export default async function BlogPostPage({ params }) {
  const post = await getBlogPost(params.id);

  if (!post || post.status === 'deleted') {
    notFound();
  }

  return (
    <>
      <Head>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords.join(', ')} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <article className="container mx-auto px-4 py-8 max-w-5xl">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* Banner Image */}
            {post.bannerUrl && (
              <div className="mb-6">
                <Image
                  src={post.bannerUrl}
                  alt={`${post.title} banner`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full rounded-lg object-contain"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            )}

            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime || 5} min read</span>
                </div>
              </div>
            </div>

            <div className="prose max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">{post.content}</p>
            </div>

            {post.content1?.length > 0 && (
              <section className="mb-8">
                {post.content1.map((item) => (
                  <div key={item._id} className="mb-6">
                    <Image
                      src={item.imageUrl}
                      alt="Content 1 image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full rounded-lg object-contain"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </section>
            )}

            {post.content2?.length > 0 && (
              <section className="mb-8">
                {post.content2.map((item) => (
                  <div key={item._id} className="mb-6">
                    <Image
                      src={item.imageUrl}
                      alt="Content 2 image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full rounded-lg object-contain"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </section>
            )}

            {post.content3?.length > 0 && (
              <section className="mb-8">
                {post.content3.map((item) => (
                  <div key={item._id} className="mb-6">
                    <Image
                      src={item.imageUrl}
                      alt="Content 3 image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full rounded-lg object-contain"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </section>
            )}
          </div>
        </article>
      </div>
    </>
  );
}