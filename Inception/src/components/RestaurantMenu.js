import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const [showList,setShowList]=useState(0);

    const resInfo = useRestaurantMenu(resId);
    // console.log(resInfo);
    
    if (resInfo === null) 
        return <Shimmer />;
    
    const {name,cuisines,avgRatingString,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    // const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    // console.log(itemCards);
    const data = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // console.log(data);
    const categories = data.filter(c=> c.card?.card?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    // console.log(categories);
    
    return(
            // <RestaurantCategory />
        <div className="text-center">
            <h1  className="my-4 font-bold text-3xl text-gray-800">{resInfo.cards[2].card.card.info.name}</h1>
            <p className= "pt-0 font-bold text-lg text-gray-800">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category,index)=>(<RestaurantCategory 
            data={category?.card?.card}
            key={category?.card?.card?.title}
            showList={index===showList ? true : false} 
            setShowList={()=>{
                setShowList(index)}
            }/>))}
        </div>
    )
}
export default RestaurantMenu;
