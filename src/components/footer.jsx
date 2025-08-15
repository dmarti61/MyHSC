// src/components/footer.jsx
import React from 'react';
import Link from 'next/link'; // Import the Link component
import '@/styles/footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content-wrapper">
        <p className="disclaimer">
          This website is for entertainment purposes only and is meant to serve as a general guide. It is not legal, financial, or academic advising.
        </p>
        <div className="legal-links">
          <Link href="/privacy" passHref legacyBehavior>
            <a className="privacy-policy-link">Privacy Policy</a>
          </Link>
          {/* You can add more links here in the future, like Terms of Use */}
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} MyHSCounselor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
