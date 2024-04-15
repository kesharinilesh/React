import User from './User';
import UserClass from './UserClass';

const About=()=>{
    return (
        <div className="container">
        <h1>About</h1>
        <h2>Our Talented Team</h2>
        {/* <User name={"Nilesh Keshari (functional)"}/> */}
        <UserClass name={"Nilesh Keshari (Class)"} email={"iamnilkesh13@gmail.com"}/>
        </div>
    )
}
export default About;