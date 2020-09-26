import React from "react";
import ReactDOM from "react-dom";

const currdate = new Date(). toLocaleDateString();
const currtime = new Date(). toLocaleTimeString();

ReactDOM.render(
  <>
<h3>
{`Current Date Is ${currdate}

Current Time Is ${currtime}`}



</h3>
</>,
document.getElementById("root")


);