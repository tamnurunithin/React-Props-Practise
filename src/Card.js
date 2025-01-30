import React from "react";

function Card(props) {
  return (
    <div id="card">
      <div id="top">
        <h3>{props.name}</h3>
        <img src={props.img} alt={props.name} />
      </div>
      <div id="down">
        <p>{props.phn}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
