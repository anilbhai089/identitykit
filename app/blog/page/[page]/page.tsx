import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { getPostsForPage, getTotalPages } from '@/lib/blog-posts'
import BlogIndexShell from '@/components/blog/BlogIndexShell'

export function generateStaticParams() {
  const totalPages = getTotalPages()
  const params: { page: string }[] = []
  // Page 1 lives at /blog, so static params start at 2.
  for (let p = 2; p <= totalPages; p++) {
    params.push({ page: String(p) })
  }
  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>
}): Promise<Metadata> {
  const { page } = await params
  const pageNum = Number(page)
  return {
    title: `Blog Page ${pageNum} | Identity Kit — Tips for Indian Creators`,
    description: 'Media kit tips, rate card guides, and creator tools for Indian influencers. Learn how to land more brand deals with Identity Kit.',
    alternates: {
      canonical: `https://identitykit.in/blog/page/${pageNum}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function BlogPaginatedPage({
  params,
}: {
  params: Promise<{ page: string }>
}) {
  const { page } = await params
  const pageNum = Number(page)
  const totalPages = getTotalPages()

  // Invalid page number (not a positive integer) -> 404
  if (!Number.isInteger(pageNum) || pageNum < 1) {
    notFound()
  }

  // /blog/page/1 should just be /blog — keep one canonical URL for page 1
  if (pageNum === 1) {
    redirect('/blog')
  }

  // Page number beyond the last real page -> 404
  if (pageNum > totalPages) {
    notFound()
  }

  const posts = getPostsForPage(pageNum)

  return <BlogIndexShell posts={posts} currentPage={pageNum} totalPages={totalPages} />
}
