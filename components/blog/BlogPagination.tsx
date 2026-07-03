import Link from 'next/link'

// Page 1 always lives at /blog. Page 2+ lives at /blog/page/2, /blog/page/3, etc.
export function pageHref(page: number): string {
  return page <= 1 ? '/blog' : `/blog/page/${page}`
}

export default function BlogPagination({
  currentPage,
  totalPages,
}: {
  currentPage: number
  totalPages: number
}) {
  if (totalPages <= 1) return null

  const pages: number[] = []
  for (let p = 1; p <= totalPages; p++) pages.push(p)

  return (
    <nav
      aria-label="Blog pagination"
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 56, flexWrap: 'wrap' }}
    >
      {currentPage > 1 && (
        <Link
          href={pageHref(currentPage - 1)}
          style={{
            padding: '10px 18px',
            borderRadius: 10,
            border: '1px solid rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.7)',
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          ← Previous
        </Link>
      )}

      <div style={{ display: 'flex', gap: 6 }}>
        {pages.map((p) => (
          <Link
            key={p}
            href={pageHref(p)}
            aria-current={p === currentPage ? 'page' : undefined}
            style={{
              width: 38,
              height: 38,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 700,
              background: p === currentPage ? '#FF6B2B' : 'rgba(255,255,255,0.04)',
              color: p === currentPage ? '#fff' : 'rgba(255,255,255,0.6)',
              border: p === currentPage ? 'none' : '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {p}
          </Link>
        ))}
      </div>

      {currentPage < totalPages && (
        <Link
          href={pageHref(currentPage + 1)}
          style={{
            padding: '10px 18px',
            borderRadius: 10,
            border: '1px solid rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.7)',
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Next →
        </Link>
      )}
    </nav>
  )
}
