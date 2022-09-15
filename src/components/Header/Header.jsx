import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>Finsweet</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/work">What We Do </Link>
          </li>
          <li>
            <Link to="/media">Media</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
        <Button value="Donation" />
      </nav>
    </header>
  );
};

export default Header;
