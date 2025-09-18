import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLinks = () => {
    const location = useLocation();
    
    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    const getLinkClasses = (path) => {
        const baseClasses = "px-4 font-extrabold transition-colors duration-200";
        if (isActive(path)) {
            return `${baseClasses} text-blue-600 border-b-2 border-blue-600`;
        }
        return `${baseClasses} text-gray-500 hover:text-blue-900`;
    };

    return (
        <>
            <Link className={getLinkClasses('/')} to="/">
                Home
            </Link>
            <Link className={getLinkClasses('/about')} to="/about">
                About Us
            </Link>
            <Link className={getLinkClasses('/join-us')} to="/join-us">
                Join Us
            </Link>
            <Link className={getLinkClasses('/services')} to="/services">
                Services
            </Link>
            <Link className={getLinkClasses('/contact')} to="/contact">
                Contact Us
            </Link>
        </>
    )
}

export default NavLinks;
