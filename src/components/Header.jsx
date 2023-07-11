import React from "react";
import logo from "../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import burgerMenu from "../images/burger-menu.svg";
import closeMenu from "../images/close-menu.svg";

function Header({ isLoggedIn, email, onSignOut, isMobileMenuOpen, handleClickOpenMobileMenu }) {
  const location = useLocation();
  return (
    <>
      <div className={`mobile-menu ${isMobileMenuOpen && "mobile-menu_type_opened"}`} email={email} >
        <h2 className="mobile-menu__email">{email}</h2>
        <Link className="mobile-menu__exit" to={'/sign-in'}onClick={onSignOut}>Выйти</Link>
      </div>
      <div className="header">
        <img src={logo} alt="Место" className="header__logo" />
        {location.pathname === '/sign-in' && (
          <Link className='header__link' to={'/sign-up'}>Регистрация</Link>
        )}
        {location.pathname === '/sign-up' && (
          <Link className='header__link' to={'/sign-in'}>Вход</Link>
        )}
        {isLoggedIn && (
          <div className='header__text'>
            <div className='header__mail'>{email}</div>
            <Link className='header__link' to={'/sign-in'} onClick={onSignOut}>Выйти</Link>
          </div>
        )}
        <button className="header__menu-btn"
          type="button" 
          onClick={handleClickOpenMobileMenu}
          style={{ backgroundImage: `url(${isMobileMenuOpen ? closeMenu : burgerMenu})`
         }}
        />
      </div>
    </>
  );
}

export default Header;
