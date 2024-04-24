import Cdn_url from "../utils/constants";
const RestaurantCard = (props) => {
    // console.log(props);
    const { resData } = props; // destructuring
    const {cloudinaryImageId,name,cuisines,avgRatingString,slaString,costForTwo}=resData?.info  
    //optional chaining
    return (
        <div className="">
        <div className="m-4 p-4 w-60 h-[455] bg-gray-200 rounded-lg" >
        {/* style={{ backgroundColor: "#F0F0F0" }} another way to write css. */}
            <img
                className="w-30 h-[245] rounded-md"
                alt="logo"
                src={
                    Cdn_url +
                    resData.info.cloudinaryImageId
                }
            />
            <h3 className='py-2 text-xl font-semibold'> {name}</h3>
            <h4> {cuisines.join(", ")}</h4>
            <h4>
                {avgRatingString}⭐ | {slaString}{" "}
                minutes
            </h4>
            <h4>{costForTwo}</h4>
        </div>
        </div>
        // <div className="res-card" style={styleCard}>
        // {/* Another way to write css. */}
        //     <h3> Pizza Hut</h3>
        // </div>
    );
};

export default RestaurantCard;