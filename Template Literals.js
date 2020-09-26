import React from "react";
import ReactDOM from 'react-dom';

const Fname="Dilawar";
const Lname= "Hussain";

ReactDOM.render(
  <>
  <h1>
   {`My Name is ${Fname} ${Lname}` }
  </h1>
  </>,

  document.getElementById("root")
  );