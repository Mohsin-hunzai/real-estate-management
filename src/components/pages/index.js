import React, { useState,useEffect } from "react";
import "./styles.css";
import Navbar from "../layout/Navbar";
import AddHouse from "./Details/AddNewHouse";
import Cards from './cards.js';
import Popup from "../layout/popup"

function User(props) {
  const [show, setshow] = useState(false);
  const [data,setData]=useState([])
  function userCreatedData(inputData){
    setData([...data,inputData])
  } 
  useEffect(()=>{
    setData(
      JSON.parse(localStorage.houseData || "[]")
    )
  },[])
  useEffect(()=>{
    localStorage.setItem("houseData",JSON.stringify(data))
  },[data])

  let showItem = null;
  if (show === true) {
    showItem = <AddHouse  loggedInUserData={props.loggedInUserData}userCreatedData={userCreatedData}/>;
  }

  const handleShowItem = (e) => {
    e.preventDefault();
    let items = show;
    setshow(true);
  };

  const cardsList= data.map((element)=>{
    return(<Cards house={element.house } email={element.email} id={element.id} loggedInUserData={props.loggedInUserData} list={element.list} location={element.location} price={element.price} image={element.data} ></Cards>)
  })
  return (
    <section className="dashboards ">
      <Navbar loggedInUserData={props.loggedInUserData} />
      <div className="main-container">
        <div className="index-slider">

          <div className="content">
            <div className="property-area">
              <form action="">
                <p>Add house details</p>
                <div className="taskButtons">
                  <button
                    className="add-house details"
                    onClick={handleShowItem}
                  >
                    Add House
                  </button>
                  <button className="buy-house details">Buy house</button>
                  <button className="rent-house details">Rent a house</button>
                </div>
              </form>
              {showItem}
            </div>
          </div>
              <div className="cardsContainer">
              {cardsList}
              </div>
          <h1>{props.loggedInUserData.name}</h1>
          <h1>{props.loggedInUserData.pass}</h1>
          <h1>{props.loggedInUserData.email}</h1>
          <h1>{props.loggedInUserData.id}</h1>
        </div>
      </div>
    </section>
  );
}

export default User;
