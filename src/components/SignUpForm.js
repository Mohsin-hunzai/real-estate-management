import React, { useState } from "react";
import "./signupform.css"
import Aux from "../hoc/auxiliary";
import PhotoUploader from "../components/pages/Details/PhotoUploader"

function SignUpForm(props) {
  const [user, setUser] = useState({
    name: "",
    age: null,
    email: "",
    pass: "",
  });
  function HandleSubmit() {
    if (user.name && user.email && user.age && user.pass) {
      const a = props.addName(user);
      if (a) {
        alert("Signup done");
      } else {
        alert("signup something failed.");
      }
    } else {
      alert("All fields are required to be filled out");
    }
  }
  
  function handleChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value, id:Math.random().toString(36).substring(7) });
  }
  const handleData=(data)=>{
    setUser({...user   , data})
  }
  return (
    <Aux>
      <div className="signin">
      <div className="social">
        <p>Use Your Email For Registration</p>
      </div>
        <input
          id="name"
          className="signUpName"
          placeholder="Name"
          type="text"
          onChange={handleChange}
        />
        <input
          id="age"
          className="signUpAge"
          placeholder="Age"
          type="number"
          onChange={handleChange}
        />
        <input
          id="email"
          className="signUpEmailInput"
          placeholder="Email"
          type="text"
          onChange={handleChange}
        />
        <input
          id="pass"
          className="signUpPasswordInput"
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />
          <PhotoUploader  handleData={handleData}/>
        <button onClick={HandleSubmit} className="continueButton">
          Continue
        </button>
      </div>
    </Aux>
  );
}

export default SignUpForm;
