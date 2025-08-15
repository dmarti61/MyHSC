// src/app/metadata.js

export const metadata = {
  // Primary SEO tags
  title: 'My HS Counselor: Your Post-High School Guidance & Career Toolkit',
  description: 'My HS Counselor provides students with a complete guide to post-high school life. Explore career paths, college applications, trade schools, gap years, and financial aid resources to build your future with confidence.',
  
  // Open Graph tags for social media sharing
  openGraph: {
    title: 'My HS Counselor: Your Post-High School Guidance & Career Toolkit',
    description: 'A comprehensive resource for high school students exploring college, trades, careers, and personal growth. Get the tools you need to build a confident future.',
    url: 'https://myhscounselor.com',
    siteName: 'My HS Counselor',
    images: [
      {
        url: 'https://myhscounselor.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'My HS Counselor logo and tagline, "Your Post-High School Guidance & Career Toolkit"',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter Card tags for Twitter previews
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
    creator: '@yourtwitterhandle',
    title: 'My HS Counselor: Your Post-High School Guidance & Career Toolkit',
    description: 'A comprehensive resource for high school students exploring college, trades, careers, and personal growth. Get the tools you need to build a confident future.',
    images: ['https://myhscounselor.com/og-image.jpg'],
  },

  // Canonical URL
  alternates: {
    canonical: 'https://myhscounselor.com',
  },

  // Robots meta tag for crawler instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  
  // Favicon and icons
  icons: {
    icon: '/favicon.png',
  },
};
