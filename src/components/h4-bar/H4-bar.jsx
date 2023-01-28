import './h4-bar.css'

const H4Bar = ({text}) => {
    return (
        <div className="h4-bar">
            <div></div>
            <h4 className="h4-bar">{text}</h4>
        </div>
    );
};

export default H4Bar;
