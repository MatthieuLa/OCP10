import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header-container">
        <img
          src="argentBankLogo.png"
          alt="logo de la plateforme Argent Bank"
          className="header-logo"
        />
        <nav className="header-navbar">
          <ul>
            <li>
              <NavLink to="/about">Sign In</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
