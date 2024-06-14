import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import Instamart from "./components/Instamart";
import {createRoot} from "react-dom/client";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import About from "./components/About";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {Provider} from 'react-redux'; 
import appStore from './utils/appStore';

//Chunking
//LazyLoading
//Dynaminc Loading
//Code Splitting
//ondemandloading

const Instamart = lazy(()=>import ("./components/Instamart"));

const AppLayout = () => {
    return (
        <Provider store={appStore}>
        <div className="app">
            <Header />
            {/* if path="/"
            <Body />
            {/* if path="/about" */}
            {/* <About />  */}
            <Outlet />
        </div>
        </Provider>
    );
};

const appRouter=createBrowserRouter([
    {
        path: "/",
        element:<AppLayout />,
        children:[
            {path: "/",
            element:<Body />
            },
            {path: "/about",
            element:<About />
            },
            {path: "/instamart",
            element:<Suspense fallback={<h2>Loading...</h2>}><Instamart /></Suspense>
            },
            {path: "/cart",
            element:<Cart />
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />
            }

        ],
        errorElement:<Error />,
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
