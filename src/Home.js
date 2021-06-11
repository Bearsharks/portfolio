import './Home.scss';
import { useState, useEffect, useRef } from "react"
import { INTRO, ARTICLE } from "./constants/constants"

function Home() {
    const articleRef = useRef(null);
    const [curFocusedContent, setCurFocusedContent] = useState(INTRO);
    const onScrollHandler = (e) => {
        if (e.deltaY > 0) {//아래로
            if (curFocusedContent === INTRO) {
                setCurFocusedContent(ARTICLE);
            }
        } else if (e.deltaY < 0) {//위로
            if (curFocusedContent === ARTICLE) {
                if (articleRef.current.scrollTop === 0) {
                    setCurFocusedContent(INTRO);
                }

            }
        }
    }
    let curFocusClassName = "";
    switch (curFocusedContent) {
        case INTRO:
            curFocusClassName = "flex-wrapper--focus-intro";
            break;
        case ARTICLE:
            curFocusClassName = "flex-wrapper--focus-article";
            break;
        default:
            curFocusClassName = "";
    }
    useEffect(() => {
        //window.addEventListener('scroll', onScrollHandler);
        return () => {
            //window.removeEventListener('scroll', onScrollHandler);
        }
    }, []);

    return (
        <div
            className={"flex-wrapper " + curFocusClassName}>
            <div
                onWheel={onScrollHandler}
                className="flex-wrapper__intro"
            >
                home
            </div>
            <div
                onWheel={onScrollHandler}
                className="flex-wrapper__article"
                ref={articleRef}
            >
                <div className="test">detail</div>
            </div>
        </div>

    );
}

export default Home;
