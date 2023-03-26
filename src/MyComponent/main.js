// import logo from "./logo.svg";
// import "./App.css";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Dragdrop from "./component/dragdrop";

import { useState } from "react";
// import Slidry from "./slidery";
// import Slidrx from "./sliderx";

function Main(props) {
  const navProps = [{}];
  // const [marginsx, setmarginsx] = useState(0);
  // const [marginsy, setmarginsy] = useState(0);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='App'>
        <Dragdrop
          marginsR={props.marginsR}
          marginsL={props.marginsL}
          marginsU={props.marginsU}
          marginsD={props.marginsD}
          pivtreList={props.pivtreList}
        />
        {/* <Slidrx handleSliderX={handleSliderX} />
        <Slidry handleSliderY={handleSliderY} /> */}
      </div>
    </DndProvider>
  );
}

export default Main;
