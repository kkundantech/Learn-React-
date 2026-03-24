import React from "react";
import ReactDom from "react-dom/client";

// React element 
 const heading  = React.createElement(
    "h1",
    {id:"heading"},
    "Jai Shree Ram from React App"
 )

//  now we will use JSX to create the same element
// const jsxheading = <h1 id="heading">Jai Shree Ram from JSX</h1>;


//  now we are going to read about react component 
// there are two type of Component
// Class Based Component
// Functional Component


// functional 
const HeadingComponent  = () =>{
   return <h1>Hii I am from the HeadingComponent</h1>
} 
// use for single line 
const HeadingComponent3  = () =>  <h1 className="heading3"> Hii I am from the HeadingComponent</h1>

// use for multiple line 
const TitleComponent = () =>(
   <h1>Hii I am From the TitleComponent</h1>
)

//  it can be like this also  and it will also work but lots of dev use aero function that's why we cant use it

// const TitleComponent = function(){
//    return <h1>Hii I am From the TitleComponent</h1>
// }


const HeadingComponent2  = () =>(
    <h1 className="heading1">Hii I am from the HeadingComponent2</h1>
)

//  it can be nested 
// component composition
const HeadingComponent4  = () =>{
   return <div id="div">
      
   <TitleComponent/>
   <TitleComponent></TitleComponent>
   {TitleComponent()}

   <h1 className="heading1">Hii I am from the HeadingComponent2</h1>
   <h1>Hii I am from the HeadingComponent4</h1>
   </div>
} 


// any JS code or  react elemtent  can run  inside the functional comonent  by using {} brackets

const n = "Jai Shree Ram";

const Head = React.createElement(
   "h1",
   {id:"h1"},
   "hello world form react element"
)

const FunComponent = () =>{
   return <div>    
      {n}
      {console.log("Jai Ho")}  
      {Head}  
      <h1>Hii I am from the FunComponent </h1>
   </div>
}


const root  = ReactDom.createRoot(document.getElementById("root"));

//  root.render(heading); 
// root.render(jsxheading);

//  render functional component like this
// root.render(<HeadingComponent4/>)
// root.render(<HeadingComponent/>)
root.render(<FunComponent/>)