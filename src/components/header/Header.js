import logo from "../../assets/images/logo/LOGO.svg";
import Nav from "../nav/Nav";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <figure className="header__fig">
      <Link to="/" className="logo-link">
          <img className="logo" src={logo} alt="logo de l'agence kasa" />
        </Link>
      </figure>
      <Nav className="nav-header" />
    </header>
  );
}
