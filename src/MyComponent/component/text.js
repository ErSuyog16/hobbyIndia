import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component, useState } from "react";
import "./image.css";


// const Image = () => {};

const Text = () => {
  return (
    <>
      <form className="text">
        <div class='form-group'>
          <label for='exampleFormControlTextarea1'>Example textarea</label>
          <textarea
            class='form-control'
            id='exampleFormControlTextarea1'
            rows='3'></textarea>
        </div>
      </form>
    </>
  );
};

export default Text;
