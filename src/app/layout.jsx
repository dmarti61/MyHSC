// src/app/layout.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import Cookies from 'js-cookie';
import '@/styles/global.css';
import Footer from '@/components/footer';
import CookieConsentBanner from '@/components/cookieconsentbanner';
import { metadata as seoMetadata } from './metadata';

export default function RootLayout({ children }) {
  const [isConsentAccepted, setIsConsentAccepted] = useState(false);

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
        {/*
          This script is strictly necessary as it loads the consent banner.
          It must be loaded unconditionally to collect user consent.
        */}
        <Script async src="https://fundingchoicesmessages.google.com/i/pub-3588367397920518?ers=1" />
        <Script id="google-funding-choices" strategy="afterInteractive">
          {`
            (function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();
          `}
        </Script>

        <main className="main-content">
          {children}
        </main>
        <Footer />
        
        <CookieConsentBanner onAccept={handleAccept} />

        {/*
          THESE SCRIPTS ARE NON-ESSENTIAL AND ARE BLOCKED UNTIL CONSENT IS GIVEN.
        */}
        {isConsentAccepted && (
          <>
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-VGT7LNXWNG');
              `}
            </Script>
    
            <Script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3588367397920518"
              crossOrigin="anonymous"
            />
          </>
        )}
      </body>
    </html>
  );
}
