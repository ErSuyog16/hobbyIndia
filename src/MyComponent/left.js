import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from "react";
import { useDrop } from "react-dnd";
import { useState } from "react";
import Slidrr from "./component/slider_r";
import "./left.css";
import "./right";
// import Slidrr from "./component/slider_r";
import Right from "./right";
import Slidrl from "./component/slider_l";
import Slidrd from "./component/slider_d";
import Slidru from "./component/slider_u";
import Picture from "./component/picture";
const divStyle = {
  marginTop: "20px",
};

const LayOut = [
  { title: "Container", id: 1 },
  { title: "Grid", id: 2 },
  { title: "Column", id: 3 },
];
const component = [
  { title: "Image", id: 1 },
  { title: "Text", id: 2 },
  { title: "Alert", id: 3 },
];
var name;
const Left = (props) => {
  // const list = LayOut.map((l) => (
  //   <button className='btn hi' key={l.id} onClick={() => props.handleClick(l)}>
  //     <li class='list-group-item' key={l.id}>
  //       {l.title}
  //     </li>
  //   </button>
  // ));
  const pivtreList = [
    {
      // id:1,
      // url:"./art_of_color.png",
      // position:"30px 30px",
      // color:'black',

      color: "black",
      txt: "hello",

      margin: "0px 0px",
      eleName: "alert",
      margin: `0px 0px`,
      id: 1,
    },
    {
      color: "red",
      txt: "hello",

      margin: "0px 0px",
      eleName: "btn",
      margin: "0px 0px",
      id: 2,
    },
    // {
    //     color:'black',
    //     txt:"hello",
    //     display:'none'
    // }
  ];

  const comp = component.map((temp) => (
    <button
      className='btn hi'
      key={temp.id}
      onClick={() => props.handleClick(temp)}>
      <li class='list-group-item' key={temp.id}>
        {temp.title}
      </li>
    </button>
  ));
  return (
    <div>
      <div class='accordion' style={divStyle} id='accordionExample'>
        <div class='accordion-item'>
          <h2 class='accordion-header'>
            <button
              class='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'>
              Components
            </button>
          </h2>
          <div
            id='collapseThree'
            class='accordion-collapse collapse'
            data-bs-parent='#accordionExample'>
            <div class='accordion-body'>
              <ul class='list-group'>
                {/* {pivtreList.map((ele) => {
                  return (
                    <Picture
                      id={ele.id}
                      eleName={ele.eleName}
                      txt={ele.txt}
                      color={ele.color}
                      margin={ele.margin}
                    />
                  );
                })} */}
                {comp}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Left;
export { name };
