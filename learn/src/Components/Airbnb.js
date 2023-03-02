import react, { useState } from "react";

export default function Airbnb(props) {
  let image =
    "https://th.bing.com/th/id/OIP.EDZP4xonulNnZh9oZ2gNOwHaHa?pid=ImgDet&rs=1";

  return (
    <div className="card">
      <img src={image} alt="manutd-kit" className="jersey" />

      <div className="jersey-stats">
        <button className="btn"></button>
        <span className="rating">----{props.rating}</span>
        <span className="reviewCount">----{props.reviewCount}----</span>
        <span>{props.country}</span>
        <p>{props.name}</p>
        <p>Price: From ${props.price}</p>
      </div>
      <button>Change your background</button>
    </div>
  );
}
