import './Article.scss';
import LinkBtn from './LinkBtn';
function Article(props) {
    return (
        <>
            <div className="article_title">{props.title}</div>
            <div className={`article-wrapper`}>

                <div className={`article-wrapper-tags`}>
                    <div style={
                        { height: `15vh`, width: `15vh` }
                    }></div>
                    {
                        props.tags.map((ele, index) => <div key={index}>{ele}</div>)
                    }
                </div>
                <div className={`article-wrapper-contents`}>
                    {
                        props.contents.map((ele, index) => <div key={index}>{ele}</div>)
                    }
                    <div className={`article-wrapper-contents__link-button`}>
                        <LinkBtn
                            link={props.linkInfo.link}
                        >
                            {props.linkInfo.alt}
                        </LinkBtn>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Article;
