import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img className="car-image" src={props.image} />
      <div className="stats">
        <span>
          {props.product}
        </span>

        <span>{props.price}</span>
      </div>

      
    </div>
  );
}
