import React from "react";
import "./style.css";

export default function App(props){
  return (
    <div>
      <h1>안녕하세요</h1>
      <p><a href="/" onClick={function(event){event.preventDefault();
      props.onChangeMode();
      }}>Start with your trip :)</a></p>
    </div>
  );
}
