import {Logo_url} from '../utils/constants';

const Header = () => {
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
                </ul>
            </div>
        </div>
    );
};

export default Header;