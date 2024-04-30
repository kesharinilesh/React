import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
    //local state variable- Super powerful variable
    const [listOfRestaurants,setlistOfRestaurants] = useState([]);

    useEffect(()=>{fetchData();
    },[]);  //after body //normal function with a specific usecase. syntax -> useffect(callback func,dependency)
    // console.log("Body Rendered")  //get printed first
    const [searchText,setsearchText] = useState("");
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    console.log("Body Rendered")
//whenever state variable changes react triggers a reconcilation cycle(rerenders the component)

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.49690&lng=80.32460&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // console.log(json);   
        //Optional Chaining
        setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
        setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //Conditional rendering
    // if (listOfRestaurants.length === 0){
    //     return <h1>Loading....</h1>
    // }
    return listOfRestaurants.length===0 ? (
        <Shimmer/>) : (
        <div className="bg-blue-200">
            <div className="">
                {/* <input          
                    type="text"
                    className="search-bar"
                    placeholder="See nearby places"
                ></input> */}
                <input className="ml-24 pl-30 mt-4 mr-2 border border-gray-200 rounded" value={searchText} 
                onChange={(e)=>{
                    setsearchText(e.target.value);
                    // console.log(e.target.value);
                    }}
                >
                </input>
                <button className="mr-12 px-2 border rounded hover:bg-blue-500 bg-blue-700 text-white" 
                onClick={()=>{
                    const searchedRestaurants = listOfRestaurants.filter(
                        (res)=>res.info.name?.toLowerCase().includes(searchText.toLowerCase()))
                        setfilteredRestaurants(searchedRestaurants); //
                }}>Search</button>
                <button className="px-2 bg-red-800 text-white rounded border hover:bg-red-600 border-gray-200" 
                    onClick={()=>{
                        const filteredList=filteredRestaurants.filter((res)=>res.info.avgRating>4.3);
                        // console.log(filteredList);
                        setfilteredRestaurants(filteredList);
                    }}>
                    Top Rated Restaurants</button>
                
            </div>
            <div className="ml-14 p-4 flex flex-wrap">
                {
                    filteredRestaurants.map(restaurant => (
                        <Link key={restaurant.info.id} to={"restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>))
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