import {render,screen} from '@testing-library/react'
import ContactUs from '../ContactUs';

test("Contact us component should appear",()=>{
    render(<ContactUs />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})