import './navbar.css';
// TODO import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <nav className="gpt3__navbar">
            <img className="gpt3__navbar-logo" src={logo} alt="logo"/>
            <ul className="gpt3__navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#wgpt3">What is GPT3?</a></li>
                <li><a href="#possibility">Open AI</a></li>
                <li><a href="#features">Case Studies</a></li>
                <li><a href="#blog">Library</a></li>
            </ul>
            <ul className="gpt3__navbar-sign">
                <li><a href="#">Sign in</a></li>
                <li><button type="button">Sign up</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
