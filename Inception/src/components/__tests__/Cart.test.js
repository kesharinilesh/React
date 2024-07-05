import {fireEvent,render,screen} from "@testing-library/react";
import { act } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import MOCK_RESDATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import {appStore} from "../../utils/appStore";


global.fetch = jest.fn(()=>
    Promise.resolve({
        json: ()=> Promise.resolve(MOCK_RESDATA),
        })
);

it("should render Restarurant Menu component", async ()=>{
    await act(async ()=> 
        render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
    </Provider>
    </BrowserRouter>)
    )

    const accordionHeader = screen.getByText("Pot Rice (3)");
    fireEvent.click(accordionHeader);
})