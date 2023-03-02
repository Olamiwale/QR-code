import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "yellow" : "red",
  };

  return (
    <div style={styles} className="bx" onClick={props.toggel}>
      <div></div>
    </div>
  );
}

/*
from source of truth App
const [box, setBox] = useState(PaulBoxes);
  const toggel = () => {};
  const element = box.map((boxes) => (
    <Box key={boxes.id} on={boxes.on} toggel={toggel} />
  ));

  return (
    <div>
      {element}
    </div> */