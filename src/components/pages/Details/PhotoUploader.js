import React, { useState } from "react";
import "../styles.css";

function PhotoUploader(props) {
  const [BaseImage, setBaseImage] = useState("");
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };
  const convertBase64 = (file) => {   
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(BaseImage)
    // props.handleData(BaseImage)
  }
  return (
    <div className="photoupload">
      <input 
      width="113px"
        type="file"
        clasName="choseimage"
        onChange={(e) => {
           (e);
        }}
      />
      <img src={BaseImage} width="110px;" border-radius="60px" margin="auto" />
     
    </div>
  );
}
export default PhotoUploader;