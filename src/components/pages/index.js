import React from "react";
import "./styles.css";
import Navbar from "../layout/Navbar";

function User(props) {
  console.log(props.loggedinuserdata);
  return (
    <section className="dashboards ">
      <Navbar loggedinuserdata={props.loggedinuserdata} />
      <div className="main-container">
        <div className="index-slider">
          <h1>find your best property</h1>

          <h1>{props.loggedinuserdata.name}</h1>
          <h1>{props.loggedinuserdata.pass}</h1>
          <h1>{props.loggedinuserdata.email}</h1>
          <h1>{props.loggedinuserdata.age}</h1>
          <p>asd</p>
        </div>
      </div>
    </section>
  );
}

export default User;
