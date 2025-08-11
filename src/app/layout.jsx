import React from 'react';
import Script from 'next/script';
import '@/styles/global.css';
import Footer from '@/components/footer';

export const metadata = {
  title: 'My HS Counselor',
  description: 'My HS Counselor offers personalized career guidance, life skills, and confidence-building for high school students exploring life after high school.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}, {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="main-content">
          {children}
        </main>
        <Footer />
        
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
      </body>
    </html>
  );
}
