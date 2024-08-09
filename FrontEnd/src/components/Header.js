// src/components/Header.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../features/user/userSlice";
import { fetchUserProfile } from "../features/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.user);
  console.log("User in Header:", user);

  useEffect(() => {
    if (isAuthenticated && !user) {
      dispatch(fetchUserProfile());
    }
  }, [isAuthenticated, user, dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };

  const iconProfile = (iconName) => `fa fa-${iconName}`;

  return (
    <header>
      <nav className="main-nav">
        <Link to="/">
          <img
            src="argentBankLogo.webp"
            alt="logo argentbank"
            className="main-nav-logo-image"
          />
        </Link>
        {isAuthenticated ? (
          <div className="main-nav-user">
            <i className={iconProfile("user-circle auth")}></i>
            <Link to="/user" className="main-nav-link">
              {user?.firstName || "User"}
            </Link>
            <div onClick={handleLogout} className="main-nav-link">
              Sign Out
            </div>
          </div>
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
