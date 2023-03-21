import { HiOutlineShoppingBag } from "react-icons/hi";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="nav-ul">
          <li className="nav-li">
            <a href="#">Componentes</a>
          </li>
          <li className="nav-li">
            <a href="#">Pre Builds</a>
          </li>
          <li className="nav-li">
            <a href="#">Consolas</a>
          </li>
          <li className="nav-li">
            <a href="#">Perifericos</a>
          </li>
          <li className="cart">
            <a href="#"><HiOutlineShoppingBag /></a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
