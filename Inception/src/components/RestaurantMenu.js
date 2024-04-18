import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo,setResInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId);

    useEffect (()=>{ 
            fetchMenu();
        },[]);
    const fetchMenu = async () => {
        const data = await fetch('https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4969&lng=80.3246&restaurantId='+resId+'&isMenuUx4=true&submitAction=ENTER')
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    
    if (resInfo === null) 
        return <Shimmer />;
    
    const {name,cuisines,avgRatingString,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    return(
        <div className="Menu">
            <h1>{resInfo.cards[2].card.card.info.name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h3>Menu</h3>
            <ul>
                {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.defaultPrice/100 ||item.card.info.price/100}</li>)}
            </ul>
        </div>
    )
}
export default RestaurantMenu;
