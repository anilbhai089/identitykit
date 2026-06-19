import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://identitykit.in'
  const today = new Date()

  return [
    // Core pages
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/auth`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.3,
    },

    // Blog index
    {
      url: `${baseUrl}/blog`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Blog posts
    {
      url: `${baseUrl}/blog/how-to-become-influencer-india`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/how-to-make-media-kit-india`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/how-to-pitch-brands-indian-influencer`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/influencer-rate-card-india`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/what-is-creator-cv-india`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/what-is-ugc-creator-india`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/influencer-brand-deal-contract-india`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/instagram-engagement-rate-india/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Web Stories
    {
      url: `${baseUrl}/web-stories/media-kit-guide.html`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/web-stories/media-kit-checklist.html`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

     {
      url: `${baseUrl}/web-stories/engagement-rate-formula.html`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

     {
      url: `${baseUrl}/web-stories/brand-collab-scam-red-flags.html`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/web-stories/asci-disclosure-rules.html`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
