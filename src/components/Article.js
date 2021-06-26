import './Article.scss';
import { NavLink } from "react-router-dom";
function Article(props) {
    return (
        <div className={`article-wrapper`}>
            <div className={`article-wrapper__tags`}>
                {
                    props.tags.map((ele, index) => <div key={index}>{ele}</div>)
                }
            </div>
            <div className={`article-wrapper__contents`}>
                {props.contents}
                <NavLink to={props.linkInfo.link} target="_blank" rel="noopener noreferrer">{props.linkInfo.alt}</NavLink>
            </div>
        </div>
    );
}

export default Article;
