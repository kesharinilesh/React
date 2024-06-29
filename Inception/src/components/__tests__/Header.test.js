import {fireEvent, render,screen} from '@testing-library/react'
import "@testing-library/jest-dom";
import { Provider } from 'react-redux';
import Header from '../Header';
import appStore from "../../utils/appStore";
import { BrowserRouter } from 'react-router-dom';

it("should render header with a login button",()=>{
    
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
        );
        // const loginButton = screen.getByText("Login"); // not a good way tho try with role first
        // const loginButton = screen.getByRole("button");
        const loginButton = screen.getByRole("button",{name: "Login"}); // if multiple buttons are present 
        expect(loginButton).toBeInTheDocument();
})
it("should render header with a Cart Items 0",()=>{
    
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
        );
        // const cartCounter = screen.getByText("Cart (0 Items)"); 
        const cartCounter = screen.getByText(/Cart/); //If we just want to check presence of Cart, use regex
        expect(cartCounter).toBeInTheDocument();
})
it("should change Login to Logout on click",()=>{
    
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
        );
        const loginButton = screen.getByRole("button",{name: "Login"});
        fireEvent.click(loginButton);
        const logoutButton = screen.getByRole("button",{name: "Logout"});
        expect(logoutButton).toBeInTheDocument();
})