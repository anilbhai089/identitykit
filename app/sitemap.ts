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

    {
      url: `${baseUrl}/blog/how-to-grow-instagram-followers-india/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

     {
      url: `${baseUrl}/blog/creator-economy-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/youtube-monetization-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/instagram-vs-youtube-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/how-to-become-finfluencer-india/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/how-to-build-personal-brand-india/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/side-hustles-for-students-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

     {
      url: `${baseUrl}/blog/how-to-get-brand-deals-india/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

     {
      url: `${baseUrl}/blog/best-niche-for-content-creators-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

     {
      url: `${baseUrl}/blog/how-to-make-money-on-instagram-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

      {
      url: `${baseUrl}/blog/freelance-contract-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

      {
      url: `${baseUrl}/blog/ugc-creator-salary-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/youtube-rpm-india-niche-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/influencer-marketing-cost-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

      {
      url: `${baseUrl}/blog/social-media-calendar-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/how-to-become-micro-influencer-india/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/affiliate-marketing-india-creators-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/instagram-engagement-rate-calculator-india/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/influencer-rate-calculator-india/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/youtube-money-calculator-india/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/gst-invoice-generator-free-india/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/instagram-bio-ideas-creators-india/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/brand-deal-contract-template-india/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

     {
      url: `${baseUrl}/blog/how-to-grow-on-linkedin-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

     {
      url: `${baseUrl}/blog/youtube-shorts-monetization-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

      {
      url: `${baseUrl}/blog/how-to-become-content-creator-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

      {
      url: `${baseUrl}/blog/instagram-reels-vs-youtube-shorts-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

     {
      url: `${baseUrl}/blog/influencer-media-kit-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

     {
      url: `${baseUrl}/blog/how-to-pitch-brands-india-influencer-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/how-to-grow-instagram-followers-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/influencer-rate-card-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/how-to-become-ugc-creator-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/influencer-marketing-roi-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

       {
      url: `${baseUrl}/blog/how-to-make-money-content-creator-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

       {
      url: `${baseUrl}/blog/influencer-tax-gst-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

     {
      url: `${baseUrl}/blog/vernacular-content-creator-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },


     {
      url: `${baseUrl}/blog/creator-cv-resume-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },


           {
      url: `${baseUrl}/blog/instagram-verification-blue-tick-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

           {
      url: `${baseUrl}/blog/brand-collaboration-email-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

         {
      url: `${baseUrl}/blog/instagram-reels-ideas-india-2026`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

         {
      url: `${baseUrl}/blog/asci-guidelines-influencer-disclosure-india-2026`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

         {
      url: `${baseUrl}/blog/how-to-negotiate-brand-deal-rates-india-2026`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/how-to-find-brand-contacts-emails-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/barter-collaboration-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/how-to-become-brand-ambassador-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/link-in-bio-vs-media-kit-vs-portfolio-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/ugc-pricing-india-2026/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    

       
      


    // Tools
    {
      url: `${baseUrl}/tools`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/instagram-engagement-calculator`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    {
      url: `${baseUrl}/tools/influencer-rate-calculator`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

     {
      url: `${baseUrl}/tools/youtube-money-calculator/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

     {
      url: `${baseUrl}/tools/gst-invoice-generator/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    {
      url: `${baseUrl}/tools/instagram-bio-generator`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

      {
      url: `${baseUrl}/tools/brand-deal-contract-template`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    
      {
      url: `${baseUrl}/tools/brand-pitch-email-generator`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

      {
      url: `${baseUrl}/tools/influencer-roi-calculator`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    {
      url: `${baseUrl}/tools/campaign-brief-generator`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

     {
      url: `${baseUrl}/tools/campaign-report-generator`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

     {
      url: `${baseUrl}/tools/rate-card-generator`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

     {
      url: `${baseUrl}/tools/cv-generator`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

     {
      url: `${baseUrl}/tools/media-kit-generator`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
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

     {
      url: `${baseUrl}/web-stories/influencer-payment-terms.html`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/web-stories/best-creator-niches-2026.html`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/web-stories/how-much-influencers-earn-india.html`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/web-stories/free-ai-tools-indian-creators.html`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    
  ]
}
