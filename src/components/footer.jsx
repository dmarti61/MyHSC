// src/components/footer.jsx
import React from 'react';
import Link from 'next/link';
import '@/styles/footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content-wrapper">
        <p className="disclaimer">
          This website is for entertainment purposes only and is meant to serve as a general guide. It is not legal, financial, or academic advising.
        </p>
        <div className="legal-links">
          {/* Corrected Link component structure */}
          <Link href="/privacy" passHref legacyBehavior>
            <a className="privacy-policy-link">Privacy Policy</a>
          </Link>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} MyHSCounselor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
