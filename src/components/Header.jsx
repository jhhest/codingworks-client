import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header>
        <h1>CodingsWorks</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/signup">signup</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
