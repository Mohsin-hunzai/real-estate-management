import React from "react";
import "./styles.css";

function Cards (props){
  // function pro(){
  
  //   let a = document.querySelector('.show')
  //   if(!a.style.display){
  //     a.style.display = "block"
      
  //   }else{
  //     a.style.display = ""
  //   }
  // }
  // if(props.loggedInUserData.id==""){

  // }

    return(
        <div className="house-details-cards">
        <div class="card"> 
          <img src="" />
          <div class="container"> 
            <img className="cardsImage" src={props.image}></img>
            <h4>
              <b>House Name : {props.house}</b>
            </h4>
            <p>Pulisher Email :{props.email}</p>
            <p >Location : {props.location}</p>
            <p>Price :{props.price}</p>
            <p>current user </p>
            <p>email : {props.id}</p>
            <p className="show"> { props.loggedInUserData.id}</p>
            <button  className="buyBtn">Buy</button>
          </div>
        </div>
      </div>
    )
}

export default Cards;