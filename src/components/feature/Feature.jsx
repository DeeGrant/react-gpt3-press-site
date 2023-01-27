import './feature.css';
import H4Bar from "../h4-bar/H4-bar";

const Feature = ({title, text}) => {
    return (
        <section>
            <H4Bar text={title} />
            <p>{text}</p>
        </section>
    );
};

export default Feature;
