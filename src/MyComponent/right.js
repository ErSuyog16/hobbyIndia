import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from "react";
import Image from "./component/image";
import Alert from "./component/alert";
import Text from "./component/text";
import { Slider } from "@mui/material";
import Slidrr from "./component/slider_r";
import Slidrl from "./component/slider_l";
import Slidrd from "./component/slider_d";
import Slidru from "./component/slider_u";
import { useLocation } from "react-router-dom";

const Right = (props) => {
  const temp = props.k;

  // const change = () => {
  //   location(
  //     "https://stackoverflow.com/questions/52229901/navigate-to-route-on-button-click/"
  //   );
  // };
  if (temp === "Image") {
    return (
      <>
        <Image />
        <br />
        <button type='button' class='btn btn-primary'>
          Primary
        </button>{" "}
        <Slidrr handleSliderR={props.handleSliderR} />
        <Slidrl handleSliderL={props.handleSliderL} />
        <Slidrd handleSliderD={props.handleSliderD} />
        <Slidru handleSliderU={props.handleSliderU} />
      </>
    );
  } else if (temp === "Alert") {
    return (
      <>
        <Alert HandleInput={props.HandleInput} />
        <button type='button' class='btn btn-primary'>
          Primary
        </button>
        <Slidrr handleSliderR={props.handleSliderR} />
        <Slidrl handleSliderL={props.handleSliderL} />
        <Slidrd handleSliderD={props.handleSliderD} />
        <Slidru handleSliderU={props.handleSliderU} />
      </>
    );
  } else {
    return (
      <>
        <Text />
        <button type='button' class='btn btn-primary'>
          Primary
        </button>
        <Slidrr handleSliderR={props.handleSliderR} />
        <Slidrl handleSliderL={props.handleSliderL} />
        <Slidrd handleSliderD={props.handleSliderD} />
        <Slidru handleSliderU={props.handleSliderU} />
      </>
    );
  }
};
export default Right;
