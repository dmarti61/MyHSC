// src/app/metadata.js

export const metadata = {
  // Primary SEO tags
  title: 'My HS Counselor: Career Quiz & Guidance for High School Students',
  description: 'Confused about your future? Take our free career quiz to discover your path. Explore guides on college, trade school, military, and financial aid. Get personalized advice to confidently plan your future.',
  
  // Open Graph tags for social media sharing
  openGraph: {
    title: 'Discover Your Path: Free Career Quiz for High School Students | My HS Counselor',
    description: 'Get matched with your ideal career path based on your unique personality and interests. Our guides cover college, trade schools, and the military. Start your future today.',
    url: 'https://myhscounselor.com',
    siteName: 'My HS Counselor',
    images: [
      {
        url: 'https://myhscounselor.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'High school student confidently planning their future with My HS Counselor.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter Card tags for Twitter previews
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle', // Make sure to update this!
    creator: '@yourtwitterhandle', // Make sure to update this!
    title: 'Free Career Quiz & Guides for High Schoolers | My HS Counselor',
    description: 'Find your future faster. Take our quiz to get a personalized roadmap for college, trade school, or the military.',
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
