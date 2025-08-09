import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

const navItems = [
  { label: 'My Results', path: '/results', id: 'my-results' },
  {
    label: 'Explore My Path',
    id: 'explore-my-path',
    children: [
      { label: 'Not Sure Where to Start?', path: '/not-sure' },
      { label: 'College Guide', path: '/college-guide' },
      { label: 'Two-Year College Guide', path: '/two-year' },
      { label: 'Trade School Guide', path: '/trade' },
      { label: 'Military Service', path: '/military' },
      { label: 'Work After High School', path: '/direct-entry-careers' },
      { label: 'Gap Year & Alternative Paths', path: '/gap-year' },
    ],
  },
  {
    label: 'Resources',
    id: 'resources',
    children: [
      { label: 'Find Careers', path: '/explore-careers' },
      { label: 'Asking For Recommendations', path: '/talk-templates' },
      { label: 'Funding Your Future', path: '/financial-aid' },
      { label: 'Making It Official', path: '/decision-official' },
      { label: 'Job Search Essentials', path: '/job-search' },
      { label: 'Navigating Your First Months', path: '/first-months' },
    ],
  },
  {
    label: 'About Us',
    id: 'about-us',
    children: [
      { label: 'About My HS Counselor', path: '/about' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const hamburgerRef = useRef(null);
  const closeBtnRef = useRef(null);
  const navbarRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenuAndDropdowns = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
      document.documentElement.classList.add('menu-open');
      closeBtnRef.current?.focus();
    } else {
      document.body.classList.remove('menu-open');
      document.documentElement.classList.remove('menu-open');
      hamburgerRef.current?.focus();
    }

    return () => {
      document.body.classList.remove('menu-open');
      document.documentElement.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  useEffect(() => {
    closeMenuAndDropdowns();
  }, [location.pathname]);

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        closeMenuAndDropdowns();
      }
    };
    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, []);

  const hasActiveChild = (item) =>
    item.children?.some((child) => location.pathname === child.path);

  const toggleDropdown = (id) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <nav className="navbar" aria-label="Main navigation" ref={navbarRef}>
      <div
        className={`nav-overlay ${isMenuOpen ? 'show' : ''}`}
        onClick={closeMenuAndDropdowns}
        aria-hidden="true"
      />
      <div className="navbar-header">
        <NavLink to="/" className="navbar-logo-link" aria-label="Home">
          <img 
            src="/logo.png" 
            alt="My HS Counselor Logo" 
            className="navbar-logo"
            width="120"
            height="40"
            loading="eager"
          />
        </NavLink>

        <button
          ref={hamburgerRef}
          className="hamburger"
          onClick={handleMenuToggle}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`bar ${isMenuOpen ? 'open' : ''}`} />
          <span className={`bar ${isMenuOpen ? 'open' : ''}`} />
          <span className={`bar ${isMenuOpen ? 'open' : ''}`} />
        </button>
      </div>

      <div
        id="primary-navigation"
        className={`nav-links ${isMenuOpen ? 'show' : ''}`}
      >
        {isMenuOpen && (
          <div className="nav-close-container">
            <button
              ref={closeBtnRef}
              className="nav-close-btn"
              onClick={closeMenuAndDropdowns}
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
        )}

        {isMenuOpen ? (
          <div className="nav-links-scroll-wrapper">
            <ul role="menubar">
              {renderNavItems()}
            </ul>
          </div>
        ) : (
          <ul role="menubar">
            {renderNavItems()}
          </ul>
        )}
      </div>
    </nav>
  );

  function renderNavItems() {
    return navItems.map((item) => {
      const isDropdownOpen = activeDropdown === item.id;
      const isParentActive = hasActiveChild(item);

      return (
        <li
          key={item.id}
          role="none"
          className={isParentActive ? 'active-parent' : ''}
        >
          {item.children ? (
            <>
              <button
                className={`nav-top-level-item nav-dropdown-btn`}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                aria-controls={`${item.id}-submenu`}
                onClick={() => toggleDropdown(item.id)}
              >
                {item.label}
                <span className="dropdown-icon" aria-hidden="true">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor">
                    <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
              </button>
              <ul
                id={`${item.id}-submenu`}
                className={`nav-submenu ${isDropdownOpen ? 'show' : ''}`}
                role="menu"
                aria-label={item.label}
              >
                {item.children.map((child) => (
                  <li key={child.path} role="none">
                    <NavLink
                      to={child.path}
                      role="menuitem"
                      tabIndex={isMenuOpen ? 0 : -1}
                      className={({ isActive }) => isActive ? 'active' : ''}
                      onClick={closeMenuAndDropdowns}
                    >
                      {child.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <NavLink
              to={item.path}
              role="menuitem"
              className={({ isActive }) =>
                `nav-top-level-item ${isActive ? 'active-item' : ''}`
              }
              onClick={closeMenuAndDropdowns}
            >
              {item.label}
            </NavLink>
          )}
        </li>
      );
    });
  }
};

export default Navbar;