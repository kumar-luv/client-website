import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
    return (
        <>
            <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/">
                Home
            </Link>
            <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/about">
                About Us
            </Link>
            <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/join-us">
                Join Us
            </Link>
            <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/services">
                Services
            </Link>
            <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact">
                Contact Us
            </Link>
        </>
    )
}

export default NavLinks;
