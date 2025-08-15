// src/app/layout.jsx
'use client'; // This is required for using useState and useEffect

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import Cookies from 'js-cookie';
import '@/styles/global.css';
import Footer from '@/components/footer';
import CookieConsentBanner from '@/components/cookieconsentbanner';
import { metadata as seoMetadata } from './metadata'; // Import the metadata

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
        <main className="main-content">
          {children}
        </main>
        <Footer />
        
        <CookieConsentBanner onAccept={handleAccept} />

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
