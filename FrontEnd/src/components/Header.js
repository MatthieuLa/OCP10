// src/components/Header.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../features/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
      <nav className="main-nav">
        <Link to="/">
          {" "}
          <img
            src="argentBankLogo.webp"
            alt="logo argentbank"
            className="main-nav-logo-image"
          />
        </Link>
        {isAuthenticated ? (
          <>
            <Link to="/user">Profile</Link>
            <div onClick={handleLogout} className="main-nav-link">
              Sign Out
            </div>
          </>
        ) : (
          <Link to="/signin" className="main-nav-link">
            Sign In
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
