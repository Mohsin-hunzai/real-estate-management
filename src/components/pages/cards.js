import React from "react";
import images from "./slider-image.jpg";

function Cards (props){
    return(
        <div className="house-details-cards">
        <div class="card">
          <img src="" />
          <div class="container">
            <h4>
              <b>Houe Name : {props.house}</b>
            </h4>
            <p>Location : {props.location}</p>
          </div>
        </div>
      </div>
    )
}

export default Cards;