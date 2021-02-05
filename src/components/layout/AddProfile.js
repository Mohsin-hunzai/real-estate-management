import React,{useState} from 'react';
import ProfileCard from './ProfileCard';
import Navbar from "../layout/Navbar";


const array = JSON.parse(localStorage.userData);

console.log(array)

const addCard = array.map((element)=>{
    return <ProfileCard name={element.name} age={element.age} email={element.email} data={element.data} ></ProfileCard>
})
const crad={
    width:"80%",
    margin:"auto",
    display:"flex",
    justifyContent:"aroundSpace",
    flexWrap:"wrap"
}
function AddProfile(props) {
    return (
        <>
            <Navbar loggedInUserData={props.loggedInUserData} />
            <div style={crad} className="addProfile">
           
            {addCard}
            </div>
        </>

    )
}

export default AddProfile;
