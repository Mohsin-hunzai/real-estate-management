import React from 'react'
import  "./ProfileCard.css";

function ProfileCard(props) {
    // console.log(props.image , "image")
    return (
        <div className="profileCardContainer">
             
            <div className="profileCard">
            <img src={props.data} className="userImg"/>
              <div className="text">
              
                <h2 className="userHeading">Name: {props.name}</h2>
                <p className="userPara"> Age: {props.age} </p>
                <p className="userPara">Email: {props.email}</p>
              </div>
            </div>
        </div>
      
    )
}

export default ProfileCard 


