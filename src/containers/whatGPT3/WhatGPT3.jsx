import './whatGPT3.css';
import H4Bar from "../../components/h4-bar/H4-bar";

const WhatGpt3 = () => {
    return (
        <section id="wgpt3" className="section__margin">
            <div>
                <H4Bar text="What is GPT-3?"/>
                <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
            </div>
            <div className="explore">
                <h2 className="gradient__text">The possibilities are beyond your imagination</h2>
                <a href="#library">Explore the Library</a>
            </div>
            <div className="examples">
                <section>
                    <H4Bar text="Chatbots"/>
                    <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
                </section>
                <section>
                    <H4Bar text="Knowledge"/>
                    <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments.</p>
                </section>
                <section>
                    <H4Bar text="Education"/>
                    <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments.</p>
                </section>
            </div>
        </section>
    );
};

export default WhatGpt3;
