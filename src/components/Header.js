import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="navbar">
      <NavLink to="/">
        <div className="logo">
          <img src="/images/Logo.svg" alt="Little Lemon" />
        </div>
      </NavLink>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <img className="toggler" src="/images/hamburger menu.svg" alt="|||" />
      </label>
      <nav className="nav-link-container">
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="table-reserve">
          Reserve
        </NavLink>
        <NavLink className="navlink" to="menu">
          Menu
        </NavLink>
        <NavLink className="navlink" to="about">
          About
        </NavLink>
      </nav>
    </header>
  );
}
