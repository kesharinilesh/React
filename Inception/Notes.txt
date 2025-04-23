# How do you start thinking if you are asked to build something?
- Prepare your plan as detailed as possible
/**
*Header
- Logo
- Nav Items
*Body
- Search
- Restaurant Container
- Restaurant Card
*Footer
- Copyright
- Links
- Address
- Contact
**/

// whenever you need an component that can be reused then always create a new component

//props

// config driven UI - A website which is driven by data (config) which comes from backend like in Kolkata things will be different as compare to things shown for a person in Delhi on the website. how do we use them, we define those criterias.

//  Two types of exports and imports :
- Default Export/imports
export default component;
import Component from 'path';

-Named export/imports
export const "component_name";
import {Component} from 'path';


- React Hooks : Normal javascript utility functions
Two imp hooks: 
1) useState()
2) useEffect()
useState are used to create superpowerful(why superpowerful, because react continuosly watches these variables) react variables which helps UI, insync with the data layer.

Whenever a state variables update, react rerenders the component.

//HOW REACT WORKS BEHIND THE SCENES?
React uses reconciliation(whenever somthing changes on the UI) algorithm(which is also known as React fiber, came up in 2016 to calculate the diff and then update the DOM)

Virtual DOM:- it is an object representation of the whole dom

Diff algorithm: (like git diff) difference between two objecs.
Difference between actual and virtual DOM
React identifies the differences between the two doms and only updates the parts of the actual DOM that have changed. This process helps to minimize the number of DOM manipulations, leading to better performance and a smoother user experience.
example: Like in the website initially there were 10 cards, and after applying the filter 5 cards left so the doms for both of them would be different, that is calculated by diff algorithm and when it find outs the difference then it updates the DOM.(rerender the necessary updates in UI in the old dom, it doesn't rerender the UI from the scratch) it does not touch the HTML, that is why react is fast. 

Because it is doing efficient DOM manipulation,how? because it has a virtual DOM and uses diff algorithm.

 
 
    //whenever state variable changes react triggers a reconcilation cycle(rerenders the component)

UseEffect: It is called after every render
// Purpose: The useEffect hook allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.
// basically to manage asynchronous nature of state updates.
// Syntax: You provide a function as the first argument to useEffect, which will be executed after the component has rendered. Optionally, you can provide a second argument, an array of dependencies, to control when the effect runs.
// Usage: useEffect is used when you need to perform actions in response to component lifecycle events (component mount, update, unmount) or when certain values change.

Syntax: useEffect(()=>{console.log("useEffect called")},[btnReact]);

-- if no dependecy array is present (default nature) ==>it will be called after every time component is rendered but its dependecy array changes the behaviour of the 
-- if dependecy array is empty ==> useEffect is called on only initial render and just once.
-- if dependecy array is [btnReact] them useEffect is called when btnReact is updated.
UseState: 
    const [a,seta] = useState([]);

 // Purpose: The useState hook allows functional components to manage state within the component.

//UseRouteError hook given by react-router-dom

//Never use anchor tag while using react as it refreshes the whole page, we will only use Link which is given by react. it can be used same as anchor tag

//2 types of routing in web apps
-Client Side routing
-Server Side routing - SIngle page application(only components are getting replace via client side routing) what we creat in react


//ComponentDidMount is used for API calls 

// Reacts mounting done in two phases 1)render(constructor and render is called) and 2) commit that's why it is fast. after rendering dom updation takes place and it is the most expensive task that's why react batches the updation tasks at once.
 

// Mount Update unmount
After first render ComponentDidMount is called then it is updated

//Higher order components - which takes a component as an input(to do some modifications) and returns a component

//Redux toolkit
-Install @reduxjs/toolkit and react-redux
-Build our store
-Connect our store to our app
-Slice(Cartslice)
-Dispatch(Action)
-selector

//Types of testing(developer)
- Unit testing (isolation testing of a unit component)(nav bar)
- Integration testing (testing the Integration of the component)(search bar)
- End to End testing (e2e testing)(user landing to logging out of the application(journey map of user))

// setting up testing in our app
- we need react testing library as well as jest for testing

- install react-testing library
- install jest
- installed babel dependencies
- configure babel
- configure parcel config file to disable default babel transpilation
- jest - npx jest --init
- Install jsdom library (npm install --save-dev jest-environment-jsdom)
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react in babel config
- Install @testing-library/jest-dom