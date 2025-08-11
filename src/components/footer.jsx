// src/components/footer.jsx
import React from 'react';
import '@/styles/footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content-wrapper"> {/* Add this wrapper div */}
        <p className="disclaimer">
          This website is for entertainment purposes only and is meant to serve as a general guide. It is not legal, financial, or academic advising.
        </p>
        <p className="copyright">
          &copy; {new Date().getFullYear()} MyHSCounselor. All rights reserved.
        </p>
      </div> {/* Close the wrapper div */}
    </footer>
  );
};

export default Footer;
