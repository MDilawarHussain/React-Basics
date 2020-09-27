import React from "react";
import ReactDOM from 'react-dom';
const Name= "Dilawar Hussain";
const img1="https://picsum.photos/seed/picsum/200/300"

ReactDOM.render(
<>
<h3 contentEditable = "true">My Name Is {Name}</h3>
<img src= {img1} alt="Random Image1"></img>
<a href="https://www.facebook.com/groups/210840376796291/" target="-dhS">
<img src="https://picsum.photos/seed/picsum/250/300" alt="Random Image2"></img>
</a>
 




</>,

document.getElementById("root")


);