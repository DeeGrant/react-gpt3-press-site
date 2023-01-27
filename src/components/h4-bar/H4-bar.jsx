import './h4-bar.css'

const H4Bar = ({text}) => {
    return (
        <>
            <div className="h4-bar"></div>
            <h4 className="h4-bar">{text}</h4>
        </>
    );
};

export default H4Bar;
