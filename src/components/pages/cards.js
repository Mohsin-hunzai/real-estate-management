import React, { useState, useEffect } from "react";
import "./styles.css";
import BuyHouse from "./BuyHouse";
import { Modal, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faGithub}
 from "@fortawesome/free-brands-svg-icons";
 import CardsDetails from "./CardsDetails" 

function Cards(props) {
  const [deleteItem,setData]=useState([])
  const {idCards } = props;
  // CONDITIONAL RENDERING ----------------------------------------------------------------
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCardsDetailsVisible, setIsCardsDetailsVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const showCardsModal = () => {
    setIsCardsDetailsVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCardsOk = () => {
    setIsCardsDetailsVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleCardsCancel = () => {
    setIsCardsDetailsVisible(false);
  };
 
  function handleDeleteData() {
    const homes = JSON.parse(localStorage.houseData);
    const index = homes.findIndex((c) => c.idCards === idCards);
    if (index > -1) {
      console.log(index)
      console.log(idCards )

      homes.splice(index, 1);
      localStorage.setItem("houseData", JSON.stringify(homes));
    }

    // localStorage.houseData.splice(()=>{})
  }

  useEffect(() => {
    if (props.loggedInUserData.id == props.id) {
      setNaveed(true);
    }
  }, []);
  const [hideBuyButton, setNaveed] = useState(false);

  const isUser = (
    <div className="house-details-cards" onClick={showCardsModal}>
      <div class="card">
        <img src="" />
        <div class="container">
        <Modal
            title="More Details About House"
            visible={isCardsDetailsVisible}
            onOk={handleCardsOk}
            onCancel={handleCardsCancel}
            
          >
            <CardsDetails/>
          </Modal>
          {/* <button className="views-details" onClick={ContactUs}>
            View
          </button> */}
          <img className="cardsImage" src={props.image}></img>
          <h4>
            <b>House Name : {props.house}</b>
          </h4>
          <p>Pulisher Email :{props.email}</p>
          <p>Location : {props.location}</p>
          <p>price :{props.price}</p>
          {/* <p>id :{props.idCards}</p> */}
          {/* <p>lgo :{props.loggedInUserData}</p> */}
          <button className="buyBtn" onClick={showModal}>
            Buy
          </button>
          <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <BuyHouse />
          </Modal>
        </div>
      </div>
    </div>
  );
  const noUser = (
    <div className="house-details-cards">
      <div class="card ">
        <img src="" />
        <div class="container no-btn">
          <button className="views-details">View</button>
          <button
            className="card-delete"
            onClick={handleDeleteData}
            placeholder="Delete"
          >
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </button>
          <img className="cardsImage check" src={props.image}></img>
          <h4>
            <b>House Name : {props.house}</b>
          </h4>
          <p>Pulisher Email :{props.email}</p>
          <p>Location : {props.location}</p>
          <p>Price :{props.price}</p>
        </div>
      </div>
    </div>
  );

  return <div>{hideBuyButton ? noUser : isUser}</div>;
}

export default Cards;
