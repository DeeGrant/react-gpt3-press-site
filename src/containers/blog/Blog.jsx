import './blog.css';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import { Article } from "../../components";


const articleData = [
    {
        title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
        date: 'Jan. 26 2023',
        article_link: '#',
        image_url: {blog01}
    },{
        title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
        date: 'Jan. 26 2023',
        article_link: '#',
        image_url: {blog02}
    },{
        title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
        date: 'Jan. 26 2023',
        article_link: '#',
        image_url: {blog03}
    },{
        title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
        date: 'Jan. 26 2023',
        article_link: '#',
        image_url: {blog04}
    },{
        title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
        date: 'Jan. 26 2023',
        article_link: '#',
        image_url: {blog05}
    },
]

const Blog = () => {
    return (
        <section id="blog" className="section__padding">
            <h2 className="gradient__text">A lot is happening, We are blogging about it.</h2>
            <div>
                {/* TODO fix article image */}
                {/* TODO add keys */}
                {articleData.map((item, _) => (
                    <Article title={item.title} date={item.date} article_link={item.article_link} image_url={blog02} />
                ))}
            </div>
        </section>
    );
};

export default Blog;
