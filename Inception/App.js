import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://logodix.com/logo/716407.png"></img>
            </div>
            <div className='Nav-items'>
                <ul>
                    <li>Home</li>
                    <li>Offers</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
const styleCard={
    backgroundColor: "blue",
}
const RestaurantCard = (props)=>{
    console.log(props);
    const {resName, cuisine, stars, time}=props
    return (
        <div className="res-card" style={{backgroundColor:"#F0F0F0"}}>  
        {/* another way to write css. */}
        <img className="res-logo" alt="logo" src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/535fc9f9c135f7982317bbb6a64a1ffc'/>
            <h3> {props.resName}</h3>
            <h4> {props.cuisine}</h4>
            <h4> {props.stars} | {props.time}</h4>
        </div>
        // <div className="res-card" style={styleCard}>  
        // {/* Another way to write css. */}
        //     <h3> Pizza Hut</h3>
        // </div>
    )
}
const Body=()=>{
    return (
    <div className="body">
        <div className='search-container'>
            <input type='text' className='search-bar' placeholder='See nearby places'></input>
            <button className='search-button'>Search</button>
        </div>
        <div className='restaurant-container'>
            <RestaurantCard resName="McDonald's" cuisine="American" stars="4.3⭐" time="25-30 mins"/>
            <RestaurantCard resName="KFC" cuisine="Non-Veg" stars="4.1⭐" time="25-30 mins"/>
            {/* <RestaurantCard/>
            <RestaurantCard/>  How to create these dynamically for others? by using props like passing props to a component (which means. passing a prop to a function is like passing an argument to a function)(properties)

            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/> */}
        </div>
    </div>
    )
}
const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    );
};

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);
