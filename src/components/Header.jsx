import "../css/header.css"
import logo from "../assets/logo.svg"
import cart from "../assets/icon-cart.svg"
import avatar from "../assets/image-avatar.png"

function Header(){
    return (
        <header>
            
            <div className="logo-image">
                <img src={logo} alt="Logo"/>
            </div>
            <div className="links">
                <ul>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="right-links">
                <div className="cart"> 
                <img src={cart} alt="Cart"/>
                </div>
                <div className="avatar"> 
                <img src={avatar} alt="Avatar"/>
                </div>
            </div>
            
        </header>
    );
}

export default Header;