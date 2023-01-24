import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <header className="section__padding">
            <h2 className="gradient__text">Let's build something amazing with GPT-3 OpenAI</h2>
            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <form>
                <input placeholder="Your Email Address" className="test"/>
                <input type="button" value="Get Started" className="btn btn-form"/>
            </form>
            <img src={people} alt="wait list avatars" className="wait-avatars"/>
            <span>1,600 people requested access in the last 24 hours</span>
            <img src={ai} alt="ai face" className="face"/>
        </header>
    );
};

export default Header;
