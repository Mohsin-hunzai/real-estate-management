import React from "react";
import Logo from "./logo";
import ContactUs from "../pages/ContactUs";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <section className="dashboard">
      <nav className="navbar">
        <div className="Title">
          <Logo />
        </div>

        <div className="nav">
          {/* <a href="/index">Home</a> */}
          <Link to="./index">Home</Link>

          <Link to="./AboutUs">About Us</Link>
          <Link to="./ContactUs">Contact Us</Link>
        </div>
        <div className="profile">
          {/* <h1>{props.loggedinuserdata.name}</h1> */}
          <h1>naveed@gmai.com</h1>
        </div>
      </nav>
    </section>
  );
};
export default Navbar;
