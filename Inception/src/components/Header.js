import {Logo_url} from '../utils/constants';
import {useState} from 'react';

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
                    <li>Home</li>
                    <li>Offers</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        loginbtn==="Logout"?loginbtn="Login":loginbtn="Logout";
                        setbtn(loginbtn);
                        console.log(loginbtn);
                    }}>{loginbtn}</button>

                </ul>
            </div>
        </div>
    );
};

export default Header;