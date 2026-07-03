import Link from 'next/link'
import { getTagIcon } from '@/lib/blog-tag-icons'
import type { BlogPost } from '@/lib/blog-posts'

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="post-card">
        <div
          style={{
            height: 180,
            background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 30% 50%, rgba(255,107,43,0.15), transparent 60%)',
            }}
          />
          <div style={{ fontSize: 56 }}>{getTagIcon(post.tag)}</div>
        </div>
        <div style={{ padding: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14, flexWrap: 'wrap' }}>
            <span
              style={{
                background: 'rgba(255,107,43,0.1)',
                color: '#FF6B2B',
                fontSize: 12,
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: 100,
              }}
            >
              {post.tag}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>{post.readTime}</span>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>{post.date}</span>
          </div>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 18,
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: 12,
              letterSpacing: '-0.3px',
            }}
          >
            {post.title}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
            {post.excerpt}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#FF6B2B', fontSize: 14, fontWeight: 600 }}>
            Read article <i className="ti ti-arrow-right" style={{ fontSize: 16 }}></i>
          </div>
        </div>
      </div>
    </Link>
  )
}
