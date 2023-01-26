import './feature.css';

const Feature = ({title, text}) => {
    return (
        <section>
            <h4>{title}</h4>
            <p>{text}</p>
        </section>
    );
};

export default Feature;
