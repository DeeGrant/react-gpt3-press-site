import './article.css';

const Article = ({title, date, article_link, image_url, alt_text= ''}) => {
    return (
        <article>
            <img src={image_url} alt={alt_text} />
            <section>
                <span>{date}</span>
                <h3>{title}</h3>
                <a href={article_link}>Read Full Article</a>
            </section>
        </article>
    );
};

export default Article;
