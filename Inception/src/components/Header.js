import {Logo_url} from '../utils/constants';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    let [loginbtn,setbtn] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <header className="flex place-content-between items-center bg-pink-200 pl-10 shadow-black">
            <div>
                <img
                    className="w-28"
                    src={Logo_url}
                ></img>
            </div>
            <div >
                <ul className='flex content-between space-x-12 pr-12'>
                    <li className='text-lg'><Link to="/">Home</Link></li>
                    <li className='text-lg'><Link to="/Instamart">Instamart</Link></li>
                    <li className='text-lg'><Link to="/About">About Us</Link></li>
                    <li className='text-lg'><Link to="/Contact">Contact</Link></li>
                    <li className='text-lg'>Online Status : {onlineStatus ? '🟢' : '🔴'}</li>
                    <button className='text-lg border w-20 bg-pink-600 hover:bg-pink-400 px-3 text-white rounded' onClick={()=>{
                        loginbtn==="Logout"?loginbtn="Login":loginbtn="Logout";  //ternary operators
                        setbtn(loginbtn);
                        console.log(loginbtn);
                    }}>{loginbtn}</button>

                </ul>
            </div>
        </header>
    );
};

export default Header;