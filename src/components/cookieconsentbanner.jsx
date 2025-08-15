'use client';

import React from 'react';
import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';

const CookieConsentBanner = ({ onAccept }) => {
  const handleAccept = () => {
    // This function will call the onAccept prop passed from the layout.
    onAccept();
  };

  const handleDecline = () => {
    // Logic to run if the user declines cookies.
    console.log("User has declined cookies.");
    // This is where you would ensure no non-essential cookies are set.
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      onAccept={handleAccept}
      onDecline={handleDecline}
      cookieName="myWebsiteCookieConsent"
      style={{ background: '#2B373B', padding: '15px' }}
      buttonStyle={{ color: '#4e503b', fontSize: '14px', borderRadius: '5px' }}
      declineButtonStyle={{ fontSize: '14px', borderRadius: '5px' }}
      contentStyle={{ margin: '0 15px' }}
    >
      This website uses cookies to ensure you get the best experience. By using our site, you agree to our{' '}
      <Link href="/privacy" passHref legacyBehavior>
        <a style={{ color: '#FFF', textDecoration: 'underline' }}>Privacy Policy</a>
      </Link>
      .
    </CookieConsent>
  );
};

export default CookieConsentBanner;
