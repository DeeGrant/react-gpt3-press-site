import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports'

const Brand = () => {
    return (
        <section className="brands section__padding">
            <img src={google} alt="google logo"/>
            <img src={slack} alt="slack logo"/>
            <img src={atlassian} alt="atlassian logo"/>
            <img src={dropbox} alt="dropbox logo"/>
            <img src={shopify} alt="shopify logo"/>
        </section>
    );
};

export default Brand;
