import { useEffect, useState } from "react";
import { Menu_API_url } from "../utils/constants";


const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    
    useEffect(() =>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(Menu_API_url+resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    } 
    return resInfo;
}

export default useRestaurantMenu;