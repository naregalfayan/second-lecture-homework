import { NavLink } from "./navlink";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <NavLink className="navbar-item" href="/">
          Home
        </NavLink>
        <NavLink className="navbar-item" href="/add">
          Add
        </NavLink>
        <NavLink className="navbar-item" href="/signup">
          Sign Up
        </NavLink>
        <NavLink className="navbar-item" href="/login">
          Log in
        </NavLink>
      </nav>
    </>
  );
};
