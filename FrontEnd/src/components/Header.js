import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav class="main-nav">
          <NavLink to="/">
            <img
              class="main-nav-logo-image"
              src="argentBankLogo.png"
              alt="Argent Bank Logo"
            />
          </NavLink>
          <div>
            <NavLink to="/signIn">Sign In</NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
