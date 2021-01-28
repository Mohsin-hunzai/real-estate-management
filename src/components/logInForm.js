import React, { useState } from "react";
import Aux from "../hoc/auxiliary";
import "./loginform.css"

function LogInForm(props) {
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });
  function handleSubmit() {
    props.checkName(user);
  }
  function handleChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }
  return (
    <Aux>
      <div className="login">
      <p>Enter Your Credential</p>
      <input
        id="email"
        className="logInEmailInput"
        placeholder="Email"
        type="text"
        onChange={handleChange}
      />
      <input
        id="pass"
        className="logInPasswordInput"
        placeholder="Password"
        type="password"
        onChange={handleChange}
      />
      <button onClick={handleSubmit} className="continueButton">
        Continue
      </button>
      </div>
    </Aux>
  );
}

export default LogInForm;
