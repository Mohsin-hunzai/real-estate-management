import React, { useState } from "react";
import { Button } from "antd";
function PhotoUploader(props) {
  const [BaseImage, setBaseImage] = useState("");
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      props.handleData(fileReader.result);
      setBaseImage(fileReader.result);
    };
  };
  return (
    <div id="App">
      <input
        type="file"
        id="image"
        onChange={(e) => {
          uploadImage(e);
        }}
      />
      <img src={BaseImage} width="40px;"  border-radius="40px"  />
    </div>
  );
}
export default PhotoUploader;