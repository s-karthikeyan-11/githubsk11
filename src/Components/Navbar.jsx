import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="Navbar">
      <div className="logo">SRK TECH's</div>
      <ul className="nav-links">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/product">
          <li>Product</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
        <NavLink to="/chrome">
          <li>Chrome</li>
        </NavLink>
        <NavLink to="/users">
          <li>Users</li>
        </NavLink>
      </ul>
      <button onClick={() => navigate("/login", { replace: true })}>Login</button>
    </div>
  );
};

export default Navbar;
