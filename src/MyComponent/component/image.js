import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component, useState } from "react";
import "./image.css";

// const Image = () => {};

const Image = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className='img'>
      <h3>Uplaod an image</h3>

      {selectedImage && (
        <div>
          <img
            alt='not found'
            width={"200px"}
            height={"200px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button
            type='button'
            class='btn btn-primary'
            onClick={() => setSelectedImage(null)}>
            Remove
          </button>
        </div>
      )}

      <br />
      <br />

      <input
        type='file'
        name='myImage'
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default Image;
