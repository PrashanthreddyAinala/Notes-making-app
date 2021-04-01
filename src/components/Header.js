import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Link to="/">
        <nav className="navbar justify-content-center bg-primary text-white font-weight-bold p-3">
          <h3>Note Making App</h3>
        </nav>
      </Link>
    );
  }
}
export default Header;
