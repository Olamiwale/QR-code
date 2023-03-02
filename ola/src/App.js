import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";
import "./App.css";
import data from "./components/data";
import Footer from "./components/Footer";

export default function App() {
 

  let cars = data.map((car) => {
    return <Card key={car.id} {...car} />;
  });

  return (
    <div>
      <Navbar />
      <Main />

     <div className="car-list">{cars}</div>  
      
      <Footer />
    </div>
  );
}
