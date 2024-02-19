import React, { Component } from "react";
import ReactDOM from "react-dom/client";

//React.createELement => Object

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "I'm learning react by myself🚀"
);

// when we render this element onto the DOM, then it becomes an HTML.

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render pushes everything to the browser which means it will replace everything
// root.render(heading);

// (Javascript XML)JSX is different from React, we use it to minimise the code because it is developer friendly

// JSX is not HMTL (it is html or xml in terms of syntax)

const JsxHeading =() => (
    <h1 id="heading">I'm learning react by myself🚀 using JSX</h1>
);
// JSZ is a mix of HTML and JS.
//if you want to give class to the above JSX syntax, you use className="head" but in HTML we simply write class='head'.
// React element using jsx example
//Attributes must be in camelCase.
// for writing in multiple lines we enclose the code in round brackets"()" so that babel could understand.

console.log(heading);
// console.log(jsxHeading);

// root.render(jsxHeading);
// JS do not comes with JSX JS engine only understands ECMA scripts.
// JSX  is (converted)transpiled(Parcel-Babel (package))i.e, converts JSX into a react code before it reaches the JS engine or browsers so that they could understand)

//Babel is a Javascript compiler that does a lot of transpilation of Javascript code so that older versions could be able to understand.
//Parcel is the manager of babel

// React Component - Everything in React is a component(2 types: class based(old way of writing) and functional component(modern way))

//Functional component example:(starts with capital letter) returns some jsx code or react element both are same.
// const HeadingComponent = () =>{
//     return <h1> This is a react component</h1>
// }
const number=10000;
const HeadingComponent = () =>(
    <div id="Container">
    <h2>{number}</h2> // inside curly braces you can write any javascript code even react elements.
    {JsxHeading()}
    <JsxHeading/>
    <JsxHeading></JsxHeading>
    //all are same
    <h1> This is a react component</h1>
    </div>
) //-- valid for multiline element
// const Hc=()=><h1> This is a react component</h1>  -valid for single line code
// #above is the example of react component composition: combination of two components

// how to render react Component?
root.render(<HeadingComponent />);

//cross-site scripting: injection attacks from any malicious api with the intention to steal data from local storage or run anything in your browser but jsx takes care of all this. It sanitizes everything