import {getAllByRole, getAllByText, render,screen} from '@testing-library/react'
import "@testing-library/jest-dom";
import ContactUs from '../ContactUs';


describe("Contact Us Page Testing",() => {
it("Heading of Contact us component should appear",()=>{
    render(<ContactUs />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
})
test("Button of Contact us component should appear",()=>{
    render(<ContactUs />);
    const button = screen.getByRole("button");
    //Assertion
    expect(button).toBeInTheDocument();
})
test("should load Submit button of Contact us component",()=>{
    render(<ContactUs />);
    const button = screen.getByText("Submit");
    //Assertion
    expect(button).toBeInTheDocument();
})
test("Should load input name inside Contact us component should appear",()=>{
    render(<ContactUs />);
    //Querying
    const name = screen.getByPlaceholderText("@gmail.com");  // returns jsx element (react element, object)
    //Assertion
    expect(name).toBeInTheDocument();
})
test("Should load all the input boxes",()=>{
    render(<ContactUs />);
    const inputBox = screen.getAllByRole("textbox");
    expect(inputBox.length).toBe(3);
    console.log(inputBox.length);
})
})