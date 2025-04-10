import React from "react";
import ReactDOM from "react-dom/client";


const elem = <span>React Element</span>




//JSX -- is not html in Javascript,  it is a syntax extension to JavaScript
const Title = () => (
  <h1 className="head" tabIndex="5">
    {elem}
    Namaste React using JSX
  </h1>
);

//React Component
//Class Based Component -- Old
//Functional Component -- New


//component composition
const HeadingComponent = () => (
    <div id="Container">
    {Title()}
    
   <h1 className="Heading">Namaste React Functional Component</h1>
   </div>
)
 


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
