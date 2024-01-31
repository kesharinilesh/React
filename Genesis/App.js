import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1",{id:"heading"},"Hello World from React!");
console.log(heading); // React elements are just objects

// React Element(Object)==> HTML(Browser Understands)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);   // While rendering the objects are converted into html elements and puts up into the DOM


{/* 
<div id="parent">
    <div id="child1">
        <h1>I'm a h1 tag</h1>
        <h2>I'm a h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm a h1 tag</h1>
        <h2>I'm a h2 tag</h2>
    </div>
</div>  
*/}  

// How to create this type of structure using react?

const parent=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am a h1 tag"),
React.createElement("h1",{},"I am a h2 tag")]),
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am a h1 tag"),
React.createElement("h1",{},"I am a h2 tag")])]);

const root2=ReactDOM.createRoot(document.getElementById("root2"));

// this code looks a bit tidy that's why we use jsx to write react.
root2.render(parent);
