import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://logodix.com/logo/716407.png"
                ></img>
            </div>
            <div className="Nav-items">
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
const styleCard = {
    backgroundColor: "blue",
};
const RestaurantCard = (props) => {
    console.log(props);
    const { resData } = props;
    return (
        <div className="res-card" style={{ backgroundColor: "#F0F0F0" }}>
            {/* another way to write css. */}
            <img
                className="res-logo"
                alt="logo"
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    resData.info.cloudinaryImageId
                }
            />
            <h3> {resData.info.name}</h3>
            <h4> {resData.info.cuisines.join(", ")}</h4>
            <h4>
                {resData.info.avgRatingString}⭐ | {resData.info.sla.slaString}{" "}
                minutes
            </h4>
            <h4>{resData.info.costForTwo}</h4>
        </div>
        // <div className="res-card" style={styleCard}>
        // {/* Another way to write css. */}
        //     <h3> Pizza Hut</h3>
        // </div>
    );
};
const resList = [
    {
        info: {
            id: "340465",
            name: "La Pino'z Pizza",
            cloudinaryImageId: "m1y45zbvi4uk1bz4cymd",
            locality: "Kamal Chauraha",
            areaName: "Swaroop Nagar",
            costForTwo: "₹200 for two",
            cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
            avgRating: 4.1,
            parentId: "4961",
            avgRatingString: "4.1",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 23,
                lastMileTravel: 1.5,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "1.5 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-03-12 02:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "50% OFF",
                subHeader: "UPTO ₹100",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-kamal-chauraha-swaroop-nagar-kanpur-340465",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "240108",
            name: "Burger King",
            cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            locality: "Rave Moti",
            areaName: "Rawat Pur",
            costForTwo: "₹350 for two",
            cuisines: ["Burgers", "American"],
            avgRating: 4.3,
            parentId: "166",
            avgRatingString: "4.3",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 42,
                lastMileTravel: 3.8,
                serviceability: "SERVICEABLE",
                slaString: "40-45 mins",
                lastMileTravelString: "3.8 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-03-12 05:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹129",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/burger-king-rave-moti-rawat-pur-kanpur-240108",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "257141",
            name: "Baskin Robbins - Ice Cream Desserts",
            cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
            locality: "Arya Nagar",
            areaName: "Swaroop Nagar",
            costForTwo: "₹250 for two",
            cuisines: ["Desserts", "Ice Cream"],
            avgRating: 4.3,
            veg: true,
            parentId: "5588",
            avgRatingString: "4.3",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 21,
                lastMileTravel: 1.8,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "1.8 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-03-12 03:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "30% OFF",
                subHeader: "UPTO ₹75",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-arya-nagar-swaroop-nagar-kanpur-257141",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "99787",
            name: "New Pizza of Kings",
            cloudinaryImageId: "cgymeujmwe7y0nflf9vh",
            locality: "Vikas Nagar",
            areaName: "Nawab Ganj",
            costForTwo: "₹200 for two",
            cuisines: ["Pizzas", "Beverages", "Continental", "Italian"],
            avgRating: 4.3,
            veg: true,
            parentId: "13567",
            avgRatingString: "4.3",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 35,
                lastMileTravel: 4.8,
                serviceability: "SERVICEABLE",
                slaString: "30-35 mins",
                lastMileTravelString: "4.8 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-03-12 02:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "₹150 OFF",
                subHeader: "ABOVE ₹249",
                discountTag: "FLAT DEAL",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/new-pizza-of-kings-vikas-nagar-nawab-ganj-kanpur-99787",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "168087",
            name: "KFC",
            cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
            locality: "Parwati Bagla Road",
            areaName: "Tilak Nagar",
            costForTwo: "₹400 for two",
            cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
            avgRating: 4.3,
            parentId: "547",
            avgRatingString: "4.3",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 21,
                lastMileTravel: 0.7,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "0.7 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-03-12 02:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "30% OFF",
                subHeader: "UPTO ₹75",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/kfc-parwati-bagla-road-tilak-nagar-kanpur-168087",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "85785",
            name: "Havmor Havfunn Ice Cream",
            cloudinaryImageId: "49845b494b1e637209b7bd1c7ca184ad",
            locality: "Arya Nagar",
            areaName: "Swaroop Nagar",
            costForTwo: "₹400 for two",
            cuisines: ["Ice Cream", "Ice Cream Cakes", "Desserts", "Beverages"],
            avgRating: 4.4,
            veg: true,
            parentId: "94570",
            avgRatingString: "4.4",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 20,
                lastMileTravel: 1.5,
                serviceability: "SERVICEABLE",
                slaString: "15-20 mins",
                lastMileTravelString: "1.5 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-03-12 02:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/havmor-havfunn-ice-cream-arya-nagar-swaroop-nagar-kanpur-85785",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "427714",
            name: "The Belgian Waffle Co.",
            cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
            locality: "Kamal Chauraha",
            areaName: "Arya Nagar",
            costForTwo: "₹200 for two",
            cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
            avgRating: 4.6,
            veg: true,
            parentId: "2233",
            avgRatingString: "4.6",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 29,
                lastMileTravel: 1.5,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "1.5 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-03-12 02:00:00",
                opened: true,
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg",
                    },
                ],
            },
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "pureveg",
                                    imageId:
                                        "v1695133679/badges/Pure_Veg111.png",
                                },
                            },
                        ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-kamal-chauraha-arya-nagar-kanpur-427714",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "93895",
            name: "Keventers - Milkshakes & Desserts",
            cloudinaryImageId: "1c8517dc925655dfff4d3617bd2191a5",
            locality: "Arya Nagar",
            areaName: "Swaroop Nagar",
            costForTwo: "₹200 for two",
            cuisines: ["Beverages", "Ice Cream", "Desserts", "Healthy Food"],
            avgRating: 4.4,
            veg: true,
            parentId: "268997",
            avgRatingString: "4.4",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 19,
                lastMileTravel: 1.8,
                serviceability: "SERVICEABLE",
                slaString: "15-20 mins",
                lastMileTravelString: "1.8 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-03-12 04:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "50% OFF",
                subHeader: "UPTO ₹100",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/keventers-milkshakes-and-desserts-arya-nagar-swaroop-nagar-kanpur-93895",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "435684",
            name: "Pizza Hut",
            cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
            locality: "W1 Block",
            areaName: "Saket Nagar",
            costForTwo: "₹350 for two",
            cuisines: ["Pizzas"],
            avgRating: 4,
            parentId: "721",
            avgRatingString: "4.0",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 40,
                lastMileTravel: 7.9,
                serviceability: "SERVICEABLE",
                slaString: "40-45 mins",
                lastMileTravelString: "7.9 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-03-12 04:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "50% OFF",
                subHeader: "UPTO ₹100",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/pizza-hut-w1-block-saket-nagar-kanpur-435684",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "69359",
            name: "The Chocolate Room(Swaroop Nagar)",
            cloudinaryImageId: "137f62334f69775a8df552d9896cec7c",
            locality: "Harikishan Srivastava Marg",
            areaName: "Swaroop Nagar",
            costForTwo: "₹300 for two",
            cuisines: [
                "Bakery",
                "Beverages",
                "Snacks",
                "Pizzas",
                "Ice Cream",
                "Desserts",
                "Cafe",
                "Italian",
                "Burgers",
                "Waffle",
                "Pastas",
            ],
            avgRating: 4.1,
            parentId: "206945",
            avgRatingString: "4.1",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 26,
                lastMileTravel: 1.5,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "1.5 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-03-12 03:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "40% OFF",
                subHeader: "UPTO ₹80",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/the-chocolate-room-swaroop-nagar-harikishan-srivastava-marg-swaroop-nagar-kanpur-69359",
            type: "WEBLINK",
        },
    },
];
const Body = () => {
    return (
        <div className="body">
            <div className="search-container">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="See nearby places"
                ></input>
                <button className="search-button">Search</button>
            </div>
            <div className="restaurant-container">
                {/* <RestaurantCard
                    resName="McDonald's"
                    cuisine="American"
                    stars="4.3⭐"
                    time="25-30 mins"
                /> */}
                <RestaurantCard
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
                <RestaurantCard resData={resList[9]}/>
            {/* <RestaurantCard/>  How to create these dynamically for others? by using props like passing props to a component (which means. passing a prop to a function is like passing an argument to a function)(properties) */}
            </div>
        </div>
    );
};
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
