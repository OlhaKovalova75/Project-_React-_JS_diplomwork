import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Preview">Preview</Link>
        </li>
        <li>
          <Link to="/Products">Products</Link>
        </li>{" "}
        <li>
          <Link to="/PreviewOne">PreviewOne</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
