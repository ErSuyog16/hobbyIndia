import React, { Component } from "react";

import { Slider } from "@mui/material";

const Slidru= (props) => {
  return (
    <Slider
      size='small'
      defaultValue={70}
      aria-label='Small'
      valueLabelDisplay='auto'
      onChange={props.handleSliderU}
    />
  );
};

export default Slidru;
