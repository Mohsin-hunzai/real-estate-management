import React,{useState,useEffect} from 'react';
import Home from './components/home'
import Index from './components/pages/index'
import Aboutus from './components/pages/aboutUs'
import ContactUs from './components/pages/ContactUs'
import { BrowserRouter as Router, Route } from "react-router-dom";


function App(props) {
  const [loggedInUserData,setLoggedInUserData]=useState("");
  function loggedInUser(result){
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
      <Route path="/Homes" exact component={Index}><Index loggedinuserdata={loggedInUserData}></Index></Route>
      <Route exact path="/Aboutus" component={Aboutus} />
        <Route path="/Contactus" component={ContactUs} />
    </Router>
  ); 
}

export default App;