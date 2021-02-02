import React,{useState} from "react";
import {useDispatch} from 'react-redux';
import "../styles.css";
import PhotoUploader from "./PhotoUploader"
import Popup from "../../layout/popup"

    function AddHouse(props){
      
      const [inputData , setInputData]=useState({
        house : "",
        price : "",
        location : "",
        list:"",
      })
      const dispatch = useDispatch()
      const handleSubmit = (e)=>{
        e.preventDefault()
      props.userCreatedData(inputData)
      console.log(inputData)
      }

      const handleChange=(e)=>{
        setInputData({...inputData , [e.target.id]:e.target.value,email:props.loggedInUserData.email,id:props.loggedInUserData.id})
      }
      const handleData=(data)=>{
        setInputData({...inputData , data: data })
      }
        return(
          <form onSubmit={handleSubmit}>
            <div className="house-data">
                <input type="text" className="name"  placeholder="Add house to sell" onChange={handleChange} id="house" />
                <input type="Number" className="price" placeholder="Price" onChange={handleChange} id="price" />
                <input type="text" className="location" placeholder="Location" onChange={handleChange} id="location" />
                <select id="lists" className="dropdown" onChange={handleChange} >
                  <option value="" >House</option>
                  <option selected value="">Appartment</option>
                  <option value="">Town House</option>
                  <option value="">villa</option>
                </select>
                <PhotoUploader handleData={handleData}/>
                <button className="AddHome" onSubmit={handleSubmit}>Add House</button>
              </div>
          </form>
        );
    }
    export default AddHouse;