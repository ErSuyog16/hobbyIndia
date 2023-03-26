import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from "react";
import "./image.css";

const Alert = (props) => {
  return (
    <div className='alert'>
      <div class='mb-3'>
        <label class='form-label'>color</label>
        <input
          type='email'
          class='form-control'
          id='exampleFormControlInput1'
          
        />
      </div>
      <div class='mb-3'>
        <label for='exampleFormControlTextarea1' class='form-label'>
          text
        </label>
        <textarea
        
          class='form-control'
          id='exampleFormControlTextarea1'
          onChange={e=>props.HandleInput(e)}
          rows='3'></textarea>
      </div>
    </div>
  );
};

export default Alert;
