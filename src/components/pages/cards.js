import React from "react";
import "./styles.css";
import Popup from "../layout/popup"

function Cards (props){
    return(
        <div className="house-details-cards">
        <div class="card"> 
          <img src="" />
          <div class="container"> <Popup/>
            <img className="cardsImage" src={props.image}></img>
            {/* <h1>Image :{props.image}</h1> */}
            <h4>
              <b>House Name : {props.house}</b>
            </h4>
            <p>Pulisher Name :{props.name}</p>
            <p >Location : {props.location}</p>
            <p>Price :{props.price}</p>
            <button >Buy</button>
          </div>
        </div>
      </div>
    )
}

export default Cards;