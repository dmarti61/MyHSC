import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import '../styles/global.css'; // Adjust the path if your styles folder is elsewhere


const Layout = () => {
  const { pathname } = useLocation();
  const hideNavbar = pathname === '/' || pathname.startsWith('/quiz');

  return (
    <>
      {!hideNavbar && <Navbar />}
      {!hideNavbar && <div className="nav-padding" />}
      <div className="main-content">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
