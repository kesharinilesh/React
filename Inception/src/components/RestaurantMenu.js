import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo,setResInfo] = useState(null);

    useEffect (()=>{ 
            fetchMenu();
        },[]);
    const fetchMenu = async () => {
        const data = await fetch('https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4969&lng=80.3246&restaurantId=340465&isMenuUx4=true&submitAction=ENTER')
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    
    if (resInfo === null) 
        return <Shimmer />;
    
    // const {name,cuisines,avgRatingString,costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;
    // const {itemCards} = resInfo?.cards[2]?.card?.card?.info;
    return(
        <div className="Menu">
            <h1>{resInfo.data.cards[2].card.card.info.name}</h1>
            {/* <h3>{cuisines.join(", ")}</h3> */}
            <h2>Menu</h2>
            <ul>
                <li><h3>Dosa</h3></li>
                <li><h3>Idli</h3></li>
                <li><h3>Utpam</h3></li>
            </ul>
        </div>
    )
}
export default RestaurantMenu;
