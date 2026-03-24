 import React from "react";
import ReactDOM from "react-dom/client";

// createElement --> it is a method which is use to create the react element
// it take 3 argument(tag, attribute, content/children)
// here heading is object which contain all the things which h1 tag contain


const heading = React.createElement(
    "h1" , 
    {id:"id1"} ,
    "Hello World from");
//  {} --> it is object which help to provide attribute to ur tag
// if we will print the heading then it will reaturn the object which include all the things which headin contain
console.log(heading);
// Object$$typeof: Symbol(react.element)key: nullprops: {id: 'id1', children: 'Hello World from'}ref: nulltype: "h1"_owner: null_store: {validated: false}_self: null_source: null[[Prototype]]: Object



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // it take the heading as a object and create tag and whatever u want and it will send to the root(DOM) and will
// this render mathod convert the heading (object) into h1 tag(element) and put it into root(DOM) 




/*
<div id="parent">
    <div id="child">
        <h1> Jai Shree Ram </h1>
    </div>
</div>
*/

/*
const heading1 = React.createElement("div" ,{id:"parent"},
    React.createElement("div" , {id:"child"},
        React.createElement("h1" , {} , "Jai Shree Ram")
    )
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading1); */





/*
<div id="parent">
    <div id="child">
        <h1> Jai Shree Ram </h1>
        <h1> Jai Shree Ram </h1>
    </div>
</div>
*/


/*
const heading1 = React.createElement("div" ,{id:"parent"},
    React.createElement("div" , {id:"child"},
        [React.createElement("h1" , {} , "Jai Shree Ram"), React.createElement("h2" , {} , "Jai Shree Ram")] //  we have to pass it  into the array 

    )
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading1);*/




/*
<div id="parent">
    <div id="child">
        <h1> Jai Shree Ram </h1>
        <h1> Jai Shree Ram </h1>
    </div>
    <div id="child2">
        <h1> Jai Shree Ram </h1>
        <h1> Jai Shree Ram </h1>
    </div>
</div>
*/


const heading1 = React.createElement("div" ,{id:"parent"},
    [
        React.createElement("div" , {id:"child"},
        [React.createElement("h1" , {} , "Jai Shree Ram"), React.createElement("h2" , {} , "Jai Shree Ram")]
    ),
        React.createElement("div" , {id:"child2"},
        [React.createElement("h1" , {} , "Jai Shree Ram"), React.createElement("h2" , {} , "Jai Shree Ram")]
    )
    ]
)

const rot = ReactDOM.createRoot(document.getElementById("root"));

rot.render(heading1);


