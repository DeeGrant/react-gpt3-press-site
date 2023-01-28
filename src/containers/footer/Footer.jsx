import './footer.css';

const Footer = () => {
    return (
        <footer className="section__padding">
            <section id="outro">
                <h2 className="gradient__text">Do you want to step in to the future before others</h2>
                <button className="btn">Request Early Access</button>
            </section>
            <div id="info">
                <section>
                    <h5>GPT-3</h5>
                    <address>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</address>
                </section>
                <section>
                    <h6>Links</h6>
                    <ul>
                        <li><a href="#">Overons</a></li>
                        <li><a href="#">Social Media</a></li>
                        <li><a href="#">Counters</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </section>
                <section>
                    <h6>Company</h6>
                    <ul>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </section>
                <section>
                    <h6>Get in Touch</h6>
                    <address>
                        Crechterwoord K12<br/>
                        182 DK Alknjkcb<br/>
                        <a href="tel:555-1234">555-1234</a><br/>
                        <a href="mailto:nothing@nowhere.net">nothing@nowhere.net</a>
                    </address>
                </section>
            </div>
            <div><span className="small-text">Copyright</span></div>
        </footer>
    );
};

export default Footer;
