import React from 'react';



export default function popup(props) {
    return (
        <div className="show">
            <h1>User Name : {props && props.loggedInUserData && props.loggedInUserData.name}</h1>
            <h1>Email :  {props && props.loggedInUserData &&  props.loggedInUserData.email}</h1>
            <h1>Age:  {props && props.loggedInUserData && props.loggedInUserData.age}</h1>
            {/* <h1>{props.loggedInUserData.name}</h1> */}
        </div>
    )
}
