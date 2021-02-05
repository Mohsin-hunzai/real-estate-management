import React, { useState, useEffect } from "react";
import "./styles.css";
import BuyHouse from "./BuyHouse";
import ContactUs from "./ContactUs"
import { Modal, Button } from 'antd';


function Cards(props) {
  // CONDITIONAL RENDERING ----------------------------------------------------------------
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (props.loggedInUserData.id == props.id) {
      setNaveed(true);
    }
  }, []);
  const [naveed, setNaveed] = useState(false);

  const isUser = (
    <div className="house-details-cards">
      <div class="card">
        <img src="" />
        <div class="container">
          <button className="views-details" onClick={ContactUs}>View</button>
          <img className="cardsImage" src={props.image}></img>
          <h4>
            <b>House Name : {props.house}</b>
          </h4>
          <p>Pulisher Email :{props.email}</p>
          <p>Location : {props.location}</p>
          <p>Price :{props.price}</p>
          <button className="buyBtn" onClick={showModal} >
            Buy
          </button>
          <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <BuyHouse/>
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

  return <div>{naveed ? noUser : isUser}</div>;
}

export default Cards;
