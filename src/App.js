import React,{useState} from 'react';
import Home from './components/home'
import User from './components/pages/index'

import Aboutus from './components/pages/aboutUs'
import ContactUs from './components/pages/ContactUs'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App(props) {
  const [loggedinuserdata,setloggedinuserdata]=useState("")
  function loggedinuser(result){
    setloggedinuserdata(result)
  }
  return (
    <Router>
      <Route path="/" exact component={Home} ><Home loggedinuser={loggedinuser}></Home></Route>
      <Route path="/index" exact component={User}><User loggedinuserdata={loggedinuserdata}></User></Route>
      <Route exact path="/Aboutus" component={Aboutus} />
        <Route path="/Contactus" component={ContactUs} />
    </Router>
  );
}

export default App;