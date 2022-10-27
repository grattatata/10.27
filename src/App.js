import React from "react";

function Child(props) {
  return <div> {props.grandfatherName} </div>;
}

function Mother(props) {
  return <Child grandfatherName={props.grandfatherName} />;
}

function Grandfather() {
  const name = "할부지";
  return <Mother grandfatherName={name} />;
}

function App() {
  return <Grandfather />;
}

export default App;
