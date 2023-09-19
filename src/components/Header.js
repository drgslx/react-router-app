import { Link, NavLink } from "react-router-dom";
import logo from "../assets/red30-tech-logo.png";

export default function Header() {
    const getCLass =({isActive}) => (isActive ? "nav-active": null)
  return ( 
    <header className="container">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="Red30 Tech logo"
          title="Red30 Tech | Home"
        />
      </Link>

      <nav>
        <NavLink to="/" className={getCLass}>Home</NavLink>
        <NavLink to="/about" className={getCLass}>About</NavLink>
        <NavLink to="/categories" className={getCLass}>Categories</NavLink>
        <NavLink to="/register" className={getCLass}>Register</NavLink>
      </nav>
    </header>
  );
}
