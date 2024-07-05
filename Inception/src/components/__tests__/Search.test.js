// import {render,screen,fireEvent} from "@testing-library/react"
// import { act } from "@testing-library/react";
// import Body from "../Body";
// import MOCK_DATA from "../mocks/mockResListData.json";
// import { BrowserRouter } from "react-router-dom";


// global.fetch = jest.fn(()=>{
//     return Promise.resolve({
//         json: ()=>{
//             return Promise.resolve(MOCK_DATA);
//         },
//     });
// });

// it("should render the Body component with search",async()=>{
//     await act (async ()=> render(
//     <BrowserRouter>
//         <Body />
//     </BrowserRouter>
//     )
//     );
//     const searchBtn = screen.getByRole("button",{name:"search"});
//     const searchInput = screen.findByTestId('searchInput');
//     fireEvent.change(searchInput,{target:{value:"pizza"}});
//     fireEvent.click(searchBtn);
//     const cards = screen.getAllByTestId("rescard");
//     expect(cards.length).toBe(4);
// });