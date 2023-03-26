import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from "react";
import { useState } from "react";
import "./App.css";
import NavBar from "./MyComponent/navBar";
import Left, { name } from "./MyComponent/left";
import Right from "./MyComponent/right";
import Main from "./MyComponent/main";

function App() {
  console.log(name);
  const [temp2, setTemp] = useState("hii");
  function click(l) {
    setTemp(l.title);
  }
  const [marginsR, setmarginsR] = useState(0);
  const [marginsL, setmarginsL] = useState(0);
  const [marginsU, setmarginsU] = useState(0);
  const [marginsD, setmarginsD] = useState(0);

  const handleSliderL = (value) => {
    console.log(value.clientX);
    setmarginsL(value.clientX);
  };
  const handleSliderR = (value) => {
    console.log(value.clientX);
    setmarginsR(value.clientX);
  };
  const handleSliderU = (value) => {
    console.log(value.clientX);
    setmarginsU(value.clientX);
  };
  const handleSliderD = (value) => {
    console.log(value.clientX);
    setmarginsD(value.clientX);
  };

  const [msg,setMsg]=useState("Hello");
  const pivtreList = [
    {
      // id:1,
      // url:"./art_of_color.png",
      // position:"30px 30px",
      // color:'black',

      color: "red",
      txt:msg,

      margin: "0px 0px",
      eleName: "alert",
      margin: `0px 0px`,
      id: 1,
      isSelected:false,
    },
    {
      color: "red",
      txt:"hello",

      margin: "0px 0px",
      eleName: "btn",
      margin: "0px 0px",
      id: 2,
      isSelected:false,
    },
    {
        color:'black',
        txt:"hello",
        display:'none'
    }
  ];

  const HandleInput=(e)=>{
     
     
    //  pivtreList[0].txt=e.target.value;
    //  console.log(pivtreList[0].txt);
    //  console.log(e.target.value);
    setMsg(e.target.value);
  }
  return (
    <div>
      <NavBar class='sticky' />

      {/* <div class='container'> */}
      <div class='row'>
        <div class='col-lg-2'>
          <Left handleClick={click} k />
        </div>
        <div class='col-lg-8'>
          <Main
            marginsR={marginsR}
            marginsL={marginsL}
            marginsU={marginsU}
            marginsD={marginsD}
            pivtreList={pivtreList}
          />
        </div>
        <div class='col-lg-2'>
          <Right
           HandleInput={HandleInput}
            k={temp2}
            handleSliderR={handleSliderR}
            handleSliderL={handleSliderL}
            handleSliderD={handleSliderD}
            handleSliderU={handleSliderU}
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
