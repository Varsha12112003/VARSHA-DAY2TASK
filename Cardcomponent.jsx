import React from "react";

import "./CardComponent.css";

const CardComponent = () => {
  return (
    <div className="card">
      <img
        src="C:\Users\ELCOT\Desktop\TASK2\task2\src\assets\2"
        alt="W3School"
        
      />
      <div className="card-content">
     <h2 className="card-title">CARD COMPONENT</h2>
     <h3 className="card-title">Welcome to the W3School</h3>
        <p className="card-description">
            <h4>
         W3School website contains a lots of lesson to learn free easy to understand 
         </h4>
          </p>
        <button className="card-button">SUBMIT</button>
      </div>
    </div>
  );
};

export default CardComponent;
