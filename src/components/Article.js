import './Article.scss';

function Article(props) {
    return (
        <div className={`article-wrapper`}>
            <div className={`article-wrapper__tags`}>
                {props.tags}
            </div>
            <div className={`article-wrapper__contents`}>
                {props.contents}
            </div>
        </div>
    );
}

export default Article;
