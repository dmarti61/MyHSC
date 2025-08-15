// src/app/layout.jsx
'use client'; // This is required for using useState and useEffect

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import Cookies from 'js-cookie'; // Import the Cookies library
import '@/styles/global.css';
import Footer from '@/components/footer';
import CookieConsentBanner from '@/components/CookieConsentBanner'; // Import the new banner component

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

export default function RootLayout({ children }) {
  const [isConsentAccepted, setIsConsentAccepted] = useState(false);

  // Check for the consent cookie on page load
  useEffect(() => {
    if (Cookies.get('myWebsiteCookieConsent')) {
      setIsConsentAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    setIsConsentAccepted(true);
  };

  return (
    <html lang="en">
      <body>
        <main className="main-content">
          {children}
        </main>
        <Footer />
        
        {/* The cookie consent banner that is always visible */}
        <CookieConsentBanner onAccept={handleAccept} />

        {/* Conditionally load Google scripts only if consent is given */}
        {isConsentAccepted && (
          <>
            {/* Google Analytics */}
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-VGT7LNXWNG');
              `}
            </Script>
    
            {/* AdSense */}
            <Script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3588367397920518"
              crossOrigin="anonymous"
            />
    
            {/* Google Funding Choices */}
            <Script async src="https://fundingchoicesmessages.google.com/i/pub-3588367397920518?ers=1" />
            <Script id="google-funding-choices" strategy="afterInteractive">
              {`
                (function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
