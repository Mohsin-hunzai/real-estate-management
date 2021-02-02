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

  console.log(data)
  console.log(props.loggedinuserdata);
  let showItem = null;
  if (show === true) {
    showItem = <AddHouse userCreatedData={userCreatedData}/>;
  }

  const handleShowItem = (e) => {
    e.preventDefault();
    let items = show;
    setshow(true);
  };

  const cardsList= data.map((element)=>{
    return(<Cards house={element.house} location={element.location} price={element.price} image={element.image} ></Cards>)
  })

  return (
    <section className="dashboards ">
      <Navbar loggedinuserdata={props.loggedinuserdata} />
      <div className="main-container">
        <div className="index-slider">
          {/* <h1>find your best property</h1> */}

          <div className="content">
            <Popup/>
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
          <h1>{props.loggedinuserdata.name}</h1>
          <h1>{props.loggedinuserdata.pass}</h1>
          <h1>{props.loggedinuserdata.email}</h1>
          <h1>{props.loggedinuserdata.email}</h1>
        </div>
      </div>
    </section>
  );
}

export default User;
