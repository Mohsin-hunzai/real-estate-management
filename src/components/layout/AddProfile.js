import React,{useState} from 'react';
import ProfileCard from './ProfileCard';

// const [data,setData]=useState('')
const array = JSON.parse(localStorage.userData);

console.log(array)

const addCard = array.map((element)=>{
    return <ProfileCard name={element.name} age={element.age} email={element.email}></ProfileCard>
})
function AddProfile(props) {
    return (
        <div className="addProfile">
            {addCard}
        </div>
    )
}

export default AddProfile;
