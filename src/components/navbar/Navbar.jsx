import {useState} from "react";
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import logo from '../../assets/logo.svg'

const Menu = (props) => (<>
    <ul className={props.isMobile ? "gpt3__navbar__mobile-links scale-up-center" : "gpt3__navbar-links"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#wgpt3">What is GPT3?</a></li>
        <li><a href="#possibility">Open AI</a></li>
        <li><a href="#features">Case Studies</a></li>
        <li><a href="#blog">Library</a></li>
    </ul>
    <ul className={props.isMobile ? "gpt3__navbar__mobile-sign scale-up-center" : "gpt3__navbar-sign"}>
        <li><a href="#">Sign in</a></li>
        <li><button type="button">Sign up</button></li>
    </ul>
</>)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <>
        <nav className="gpt3__navbar">
            <img className="gpt3__navbar-logo" src={logo} alt="logo"/>
            <Menu isMobile={false}/>
            {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu && (
                <Menu isMobile={true} />
            )}
        </nav>
        </>
    );
};

export default Navbar;
