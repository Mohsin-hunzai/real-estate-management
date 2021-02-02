import React from 'react'
import  "./ProfileCard.css";

function ProfileCard(props) {
    return (
        <div className="profileCardContainer">
            <div className="profileCard">
                <h2 className="userHeanding">Name: {props.name}</h2>
                <p className="userPara"> Age: {props.age} </p>
                <p className="userPara">Email: {props.email}</p>
            </div>
        </div>
      
    )
}

export default ProfileCard

