import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <header className="section__padding">
            <div className="hero">
                <h2 className="gradient__text">Let's build something amazing with GPT-3 OpenAI</h2>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <form>
                    <input placeholder="Your Email Address" className="email"/>
                    <input type="button" value="Get Started" className="btn"/>
                </form>
                <div className="joined">
                    <img src={people} alt="joined avatars" className="joined-avatars"/>
                    <span>1,600 people requested access in the last 24 hours</span>
                </div>
            </div>
            <img src={ai} alt="ai face" className="face"/>
        </header>
    );
};

export default Header;
