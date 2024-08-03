import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav class="main-nav">
          <NavLink to="/">
            <img
              class="main-nav-logo-image"
              src="argentBankLogo.webp"
              alt="Argent Bank Logo"
            />
          </NavLink>
          <div>
            <NavLink to="/signIn" className={"main-nav-link"}>
              Sign In
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
