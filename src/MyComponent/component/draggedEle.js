import React from "react";
import Alrt from "./alert/alert";
import Btn from "./button/button";

const DraggedEle = (props) => {
  //   console.log(props.eleName);
  // console.log(props.eleName);
  console.log(props.marginsU);
  console.log(props.marginsR);
  console.log(props.marginsL);
  console.log(props.marginsD);

  let x = props.marginsL - 1000;
  let y = props.marginsR - 900;
console.log(x,y);
  console.log(x);
  console.log(props.isSelected);
  return (
    <div
    //   onClick={props.select(props.id)}
      style={{
        margin:props.isSelected ? ` ${3*x}px ${3*y}px` :null ,

        width: "100px",
        height: "100px",
      }}>
      {/* <img ref={drag} style={{margin:`${props.margin}`, width:'100px',height:'100px', border: isDraging ? '2px solid red': null }} src={props.img}></img> */}
      {props.eleName === "alert" ? (
        <Alrt txt={props.txt} color={props.color} />
      ) : null}
      {props.eleName === "btn" ? (
        <Btn txt={props.txt} color={props.color} />
      ) : null}
    </div>
  );
};

export default DraggedEle;
