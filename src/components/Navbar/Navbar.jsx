import React, { memo, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FaTwitter, FaSkype, FaVimeoV } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";

export const Navbar = memo(() => {

  const [navToggle, setNavToggle] = useState(false);

  const navHandler = useCallback(() => {
    setNavToggle(prevData => !prevData);
  }, []);

  const navbarCollapseClasses = useMemo(() => {
    return `navbar-collapse ${navToggle ? 'show-navbar-collapse' : ""}`;
  }, [navToggle]);

  const hamburgerMenuClasses = useMemo(() => {
    return `hamburger-menu ${navToggle ? 'hamburger-menu-change' : ""}`;
  }, [navToggle]);

  return (
    <nav className='navbar w-100 flex'>
      <div className='container w-100'>
        <div className='navbar-content flex fw-7'>
          <div className='brand-and-toggler flex flex-between w-100'>
            <Link to="/" className='navbar-brand fs-26'>SolnHub</Link>
            <div type="button" className={hamburgerMenuClasses} onClick={navHandler}>
              <div className='bar-top'></div>
              <div className='bar-middle'></div>
              <div className='bar-bottom'></div>
            </div>
          </div>

          <div className={navbarCollapseClasses}>
            <div className='navbar-collapse-content'>
              <ul className='navbar-nav'>
                <li className='text-white'>
                  <Link to="/">About</Link>
                </li>
                <li className='text-white'>
                  <Link to="/">Features</Link>
                </li>
                <li className='text-white'>
                  <Link to="/">Pricing</Link>
                </li>
                <li className='text-white'>
                  <Link to="/">Contacts</Link>
                </li>
              </ul>
              <ul className='navbar-social flex'>
                <li className='text-white'>
                  <Link to="" className='flex flex-center'><FaTwitter/></Link>
                </li>
                <li className='text-white'>
                  <Link to="" className='flex flex-center'><FaSkype/></Link>
                </li>
                <li className='text-white'>
                  <Link to="" className='flex flex-center'><FaVimeoV/></Link>
                </li>
              </ul>
              <div className='navbar-btns'>
                <button type="button" className='btn'><IoMdRocket/> <span>get started</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
});
