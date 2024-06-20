import Cdn_url from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
 
const ItemList = ({items}) => {
    // console.log(items);


    const dispatch=useDispatch();
    const handleAddItem = (item) => {
        //Dispatch an item
        dispatch(addItem(item));  // this will go inside payload
    }
    return <div className="text-left font-semibold">
            {items.map((item)=>(
            <div className="py-2 border-b-2 text-m flex" key={item.card.info.id}>
                <div className="m-2 w-4/5">
                    <span>{item.card.info.name}</span><br/>
                    <span>Rs. {item.card.info.price ? item.card.info.price / 100 : 349}</span>
                <p className="text-sm pt-2 ">{item.card.info.description}</p>
                {/* {console.log(item.card.info)} */}
                </div>
                <div className="w-1/5 relative">
                <div className="absolute bottom-0 mb-2 left-1/3">
                <button className="rounded-sm px-1 font-mono border bg-white" onClick={()=>handleAddItem(item)}>Add +</button>
                </div>
                <img className="rounded-md" alt="Not available" src={Cdn_url+item.card.info.imageId}/>
                {/* ? item.card.info.imageId : resData.info.cloudinaryImageId */}
                </div>
            </div>))}
    </div>
}

export default ItemList;