import User from './User';
import UserClass from './UserClass';
import {Component} from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor")
    }
    componentDidMount(){
        console.log("Parent mounted")
    }
    render() {
        console.log("Parent rendered")
        return (
            <div className="container">
            <h1>About</h1>
            <h2>Our Talented Team</h2>
            {/* <User name={"Nilesh Keshari (functional)"}/> */}
            <UserClass name={"Nilesh Keshari (Class)"} email={"iamnilkesh13@gmail.com"}/>
            <UserClass name={"Nilesh Keshari (Class2)"} email={"iamnilkesh13@gmail.com"}/>
            </div>
        )
    }
}
// const About=()=>{
    // return (
    //     <div className="container">
    //     <h1>About</h1>
    //     <h2>Our Talented Team</h2>
    //     {/* <User name={"Nilesh Keshari (functional)"}/> */}
    //     <UserClass name={"Nilesh Keshari (Class)"} email={"iamnilkesh13@gmail.com"}/>
    //     <UserClass name={"Nilesh Keshari (Class2)"} email={"iamnilkesh13@gmail.com"}/>
    //     </div>
//     )
// }
export default About;