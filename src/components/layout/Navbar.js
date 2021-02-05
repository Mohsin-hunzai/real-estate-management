import React from "react";
import Logo from "./logo";
import ContactUs from "../pages/ContactUs";
import "./style.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Popup from "./popup"

const Navbar = (props) => {
  const history = useHistory();
  function LogOut(){
    localStorage.setItem("loggedInUserId","");
    history.push('/');
  }
  function pro(){
  
    let a = document.querySelector('.show')
    if(!a.style.display){
      a.style.display = "block"
    }else{
      a.style.display = ""
    }
  }
  return (
    <section className="dashboard">
      <nav className="navbar">
        <div className="Title">
          <Logo />
        </div>

        <div className="nav">
          {/* <a href="/index">Home</a> */}
          <Link to="./homes?id=2sd4zs">Home</Link>

          <Link to="./AboutUs?id:4r89hsd">About Us</Link>
          <Link to="./ContactUs?id:34rdgru">Contact Us</Link>
        </div>
        <div className="profile">
        {/* <h1 className="profiledetails" onClick={pro}>{props.loggedInUserData.name}</h1> */}
          {/* <h1>{loggedInUserData.name}</h1> */}
          <img className="profilePhoto"  onClick={pro} src={props.loggedInUserData.data}/>
          {/* <h1 >user Name</h1> */}
          <h1 ></h1>
          {/* <button onClick={pro}>check</button> */}
          <button  onClick={LogOut} className="logoutBtn"  >
            Log Out
          </button>
        </div>
      </nav>
    <Popup loggedInUserData={props.loggedInUserData}/>
    </section>
  );
};
export default Navbar;
