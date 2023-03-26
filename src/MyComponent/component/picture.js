import { useDrag } from "react-dnd";
import React from "react";
import Alrt from "./alert/alert";

const Picture = (props) => {
  const [{ isDraging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: props.id },
    collect: (monitor) => ({
      isDraging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      style={{
        margin: `${props.margin}`,
        width: "70px",
        height: "40px",
        border: "2px solid red",
      }}>
      {/* <img ref={drag} style={{margin:`${props.margin}`, width:'100px',height:'100px', border: isDraging ? '2px solid red': null }} src={props.img}></img> */}
      {/* <Alrt txt={props.txt} color={props.color}/> */}
      {props.eleName}
    </div>
  );
};

export default Picture;
