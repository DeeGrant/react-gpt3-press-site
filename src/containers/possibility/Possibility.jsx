import './possibility.css';
import possibility from '../../assets/possibility.png'

const Possibility = () => {
    return (
        <section id="possibility" className="section__padding">
            <img src={possibility} alt="person with vr headset"/>
            <div>
                <h2 className="gradient__text">The possibilities are beyond your imagination</h2>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <a href="#early-access">Request Early Access to Get Started</a>
            </div>
        </section>
    );
};

export default Possibility;
