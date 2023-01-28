import {useState} from "react";
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import logo from '../../assets/logo.svg'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <nav>
            <img src={logo} alt="logo" className="logo"/>
            <ul className={showMobileMenu ? "show-mobile scale-up-center" : ""}>
                <li><a href="#home">Home</a></li>
                <li><a href="#wgpt3">What is GPT3?</a></li>
                <li><a href="#features">Case Studies</a></li>
                <li><a href="#possibility">Open AI</a></li>
                <li><a href="#blog">Library</a></li>
                <li><a href="#home">Sign in</a></li>
                <li><button type="button" className="btn">Sign up</button></li>
            </ul>
            {showMobileMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setShowMobileMenu(false)} />
                : <RiMenu3Line color="#fff" size={27} onClick={() => setShowMobileMenu(true)} />
            }
        </nav>
    );
};

export default Navbar;
