import {Logo_url} from '../utils/constants';
import {useState} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    let [loginbtn,setbtn] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={Logo_url}
                ></img>
            </div>
            <div className="Nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Instamart">Instamart</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <button className="login" onClick={()=>{
                        loginbtn==="Logout"?loginbtn="Login":loginbtn="Logout";  //ternary operators
                        setbtn(loginbtn);
                        console.log(loginbtn);
                    }}>{loginbtn}</button>

                </ul>
            </div>
        </div>
    );
};

export default Header;