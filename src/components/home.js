import React, { useState, useEffect } from "react";
import "./home.css";
import Loginform from "./logInForm";
import Signupform from "./SignUpForm";
import { useHistory } from "react-router-dom";

function Home(props) {
  //filtering and pushing data in array
  const [userData, setUserData] = useState([]);
  const history = useHistory();

  const addName = (data) => {
    const filter = userData.filter((element) => element.email == data.email);
    if (filter.length > 0) {
      alert("Name already exists");
      return false;
    } else {
      setUserData([...userData, data]);
    }
    return true;
  };
  //local storage data
  useEffect(() => {
    setUserData(
      JSON.parse(localStorage.userData ? localStorage.userData : `[]`)
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  //  checking login data from local storage 
  function checkName(data) {
    console.log(userData)
    console.log(data)
    let result = userData.find((element) => {
      return (element.email === data.email && element.pass === data.pass)
    });
    console.log(result)
    if(result){
      alert("loggedin")
      props.loggedinuser(result)
      history.push('/index');
    }else{
      alert("Incorrect Email or Password")
    }
  }

  //RETURN------------------------------------------------------------------------------------------------------
  return (
    <section className="home">
      <Signupform addName={addName}></Signupform>
      <Loginform checkName={checkName}></Loginform>
    </section>
  );
}

export default Home;
