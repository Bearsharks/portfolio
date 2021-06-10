import './Home.scss';
import { useState } from "react"
import { INTRO, ARTICLE } from "./constants/constants"
function Home() {
    const [curFocusedContent, setCurFocusedContent] = useState(INTRO);
    const introScroll = (e) => {
        setCurFocusedContent(ARTICLE);
    }
    const articleScroll = (e) => {
        setCurFocusedContent(INTRO);
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

    return (
        <div
            className={"flex-wrapper " + curFocusClassName}>
            <div
                onWheel={introScroll}
                className="flex-wrapper__intro"
            >
                home
            </div>
            <div
                onWheel={articleScroll}
                className="flex-wrapper__article"
            >
                detail
            </div>
        </div>

    );
}

export default Home;
