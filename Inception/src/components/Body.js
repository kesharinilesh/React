import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";

const Body = () => {
    const [listOfRestaurants,setlistOfRestaurants] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                {/* <input          
                    type="text"
                    className="search-bar"
                    placeholder="See nearby places"
                ></input> */}
                <button className="filter-btn" 
                    onClick={()=>{
                        const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4);
                        console.log(filteredList);
                        setlistOfRestaurants(filteredList);
                    }}>
                    Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
                {
                    listOfRestaurants.map(restaurant => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />))
                }
                {/* Use keys => index as key <<< unique id */}
                {/* <RestaurantCard
                    resName="McDonald's"
                    cuisine="American"
                    stars="4.3⭐"
                    time="25-30 mins"
                /> */}
                {/* <RestaurantCard
                    resData={resList[0]}
                    // resName="KFC"
                    // cuisine="Non-Veg"
                    // stars="4.1⭐"
                    // time="25-30 mins"
                />
                <RestaurantCard resData={resList[1]}/>
                <RestaurantCard resData={resList[2]}/>
                <RestaurantCard resData={resList[3]}/>
                <RestaurantCard resData={resList[4]}/>
                <RestaurantCard resData={resList[5]}/>
                <RestaurantCard resData={resList[6]}/>
                <RestaurantCard resData={resList[7]}/>
                <RestaurantCard resData={resList[8]}/>
                <RestaurantCard resData={resList[9]}/> */}
            
            {/* <RestaurantCard/>  How to create these dynamically for others? by using props like passing props to a component (which means. passing a prop to a function is like passing an argument to a function)(properties) */}
            </div>
        </div>
    );
};

export default Body;