import RestaurantCard from "../RestaurantCard";
import mockResData from "../mocks/mockResData.json";
import '@testing-library/jest-dom';
import {render,screen} from "@testing-library/react";



it("should load the name of the restaunt",()=>{
    render(
        <RestaurantCard resData={mockResData}/>
    )
    const name=screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument("Pizza Hut")
})