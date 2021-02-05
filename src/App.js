import React,{useState,useEffect} from 'react';
import Home from './components/home'
import Index from './components/pages/index'
import Aboutus from './components/pages/aboutUs'
import ContactUs from './components/pages/ContactUs'
import AddProfile from './components/layout/AddProfile'
import { BrowserRouter as Router, Route } from "react-router-dom";


function App(props) {
  const [loggedInUserData,setLoggedInUserData]=useState("");
  function loggedInUser(result){
    console.log(result)
    setLoggedInUserData(result)
  }
  useEffect(()=>{
    const userId = localStorage.loggedInUserId;
    if(userId){
      const user = JSON.parse(localStorage.userData).find((element)=>{
        return element.id==userId
      })
      if(user){
        setLoggedInUserData(user)
      }
    }

  },[])
  return (
    <Router>
      <Route path="/" exact component={Home} ><Home loggedInUser={loggedInUser}></Home></Route>
      <Route path="/Homes" exact component={Index}><Index loggedInUserData={loggedInUserData}></Index></Route>
      <Route exact path="/Aboutus" component={Aboutus} ><Aboutus loggedInUserData={loggedInUserData}></Aboutus></Route>
        <Route path="/Contactus" component={ContactUs} ><ContactUs  loggedInUserData={loggedInUserData}></ContactUs></Route>
    </Router>
  ); 
}

export default App;