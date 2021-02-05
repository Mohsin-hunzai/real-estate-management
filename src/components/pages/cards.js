import React,{useState,useEffect} from "react";
import "./styles.css";

function Cards (props){
  // CONDITIONAL RENDERING ----------------------------------------------------------------
  useEffect(()=>{
    if(props.loggedInUserData.id==props.id){
        setNaveed(true)
    }
  },[])
  const [naveed,setNaveed]=useState(false)

  const isUser = (
    <div className="house-details-cards">
        <div class="card" > 
        
          <img src="" />
          <div class="container"> 
            <img className="cardsImage" src={props.image}></img>
            <h4>
              <b>House Name : {props.house}</b>
            </h4>
            <p>Pulisher Email :{props.email}</p>
            <p >Location : {props.location}</p>
            <p>Price :{props.price}</p>
            <button  className="buyBtn">Buy</button>
          </div>
        </div>
      </div>
  )
  const noUser = (
    <div className="house-details-cards">
        <div class="card " > 
        
          <img src="" />
          <div class="container no-btn"> 
            <img className="cardsImage" src={props.image}></img>
            <h4>
              <b>House Name : {props.house}</b>
            </h4>
            <p>Pulisher Email :{props.email}</p>
            <p >Location : {props.location}</p>
            <p>Price :{props.price}</p>
          </div>
        </div>
      </div>
  )


    return(
        <div>{naveed?noUser:isUser}</div>
    )
}

export default Cards;