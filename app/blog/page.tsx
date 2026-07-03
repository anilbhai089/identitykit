import type { Metadata } from 'next'
import { getPostsForPage, getTotalPages } from '@/lib/blog-posts'
import BlogIndexShell from '@/components/blog/BlogIndexShell'

export const metadata: Metadata = {
  title: 'Blog | Identity Kit — Tips for Indian Creators',
  description: 'Media kit tips, rate card guides, and creator tools for Indian influencers. Learn how to land more brand deals with Identity Kit.',
  openGraph: {
    title: 'Blog | Identity Kit — Tips for Indian Creators',
    description: 'Media kit tips, rate card guides, and creator tools for Indian influencers.',
    url: 'https://identitykit.in/blog',
    siteName: 'Identity Kit',
    type: 'website',
  },
  alternates: {
    canonical: 'https://identitykit.in/blog',
  },
}

export default function BlogPage() {
  const totalPages = getTotalPages()
  const posts = getPostsForPage(1)

  return <BlogIndexShell posts={posts} currentPage={1} totalPages={totalPages} />
}
