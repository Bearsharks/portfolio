import './Home.scss';
import { useEffect, useRef } from "react"

function Home() {
    const wrapperRef = useRef(null);
    const introRef = useRef(null);
    const articleRef = useRef(null);
    const articleFrameRef = useRef(null);
    let lastReq = useRef(null);
    const onScrollHandler = (e) => {
    }
    const setCameraDirty = (e) => {
    }
    const changeStyle = (styleElement, styleName, attribute) => {
        let isSame = attribute == styleElement[styleName];
        if (!isSame) {
            styleElement[styleName] = attribute;
        }
        return isSame;
    }
    const moveFrame = () => {
        if (wrapperRef.current.scrollTop < introRef.current.clientHeight) {
            changeStyle(articleFrameRef.current.style, "transform", "translate(0px, 0px)");
            return;
        }
        let articleScrollTop = wrapperRef.current.scrollTop - introRef.current.clientHeight;
        let viewportSize = wrapperRef.current.clientHeight;
        let maxScrollTop = (articleRef.current.clientHeight - viewportSize);
        let frameProgress = Math.max(0, Math.min(0.9999, articleScrollTop / maxScrollTop));
        let curTop = Math.min(maxScrollTop, articleScrollTop);
        let maxViewportPosX = articleFrameRef.current.clientWidth - articleRef.current.clientWidth;
        let isSame = changeStyle(articleFrameRef.current.style, "transform",
            `translate(${(-frameProgress * maxViewportPosX).toFixed(0)}px, ${curTop.toFixed(0)}px)`);
        if (isSame) return;

        //10% 이상 보이면 스타일 바꿔줌 
        let childCnt = articleFrameRef.current.children[0].childElementCount;
        let eleSize = 1 / (childCnt - 1);
        let first = Math.floor(frameProgress / eleSize);
        let firstShownSizePer = (eleSize - (frameProgress % eleSize)) / eleSize;
        let firstStyle = articleFrameRef.current.children[0].children[first].style;
        if (firstShownSizePer > 0.15) {
            changeStyle(firstStyle, "opacity", "1");
            changeStyle(firstStyle, "transform", `translateY(0px)`);
        }
        else {
            changeStyle(firstStyle, "opacity", "");
            changeStyle(firstStyle, "transform", "");
        }

        let second = first + 1;
        let secondShownSizePer = 1 - firstShownSizePer;
        let secondStyle = articleFrameRef.current.children[0].children[second].style;
        if (secondShownSizePer > 0.15) {
            changeStyle(secondStyle, "opacity", "1");
            changeStyle(secondStyle, "transform", `translateY(0px)`);
        }
        else {
            changeStyle(secondStyle, "opacity", "");
            changeStyle(secondStyle, "transform", "");
        }
    }
    const renderFrame = () => {
        if (wrapperRef.current) moveFrame();
        lastReq = requestAnimationFrame(renderFrame.bind(this));
    }

    useEffect(() => {
        wrapperRef.current.addEventListener('scroll', onScrollHandler);
        window.addEventListener('resize', setCameraDirty);
        lastReq.current = requestAnimationFrame(renderFrame);
        return () => {
            window.removeEventListener('resize', setCameraDirty);
            if (lastReq.current) cancelAnimationFrame(lastReq.current);
        }
    }, []);

    return (
        <div
            ref={wrapperRef}
            onScroll={onScrollHandler}
            className="flex-wrapper">
            <div
                ref={introRef}
                className="flex-wrapper__intro"
            >
                스크롤을 아래로 내려주세요
            </div>
            <div
                ref={articleRef}
                className="flex-wrapper-article"
            >
                <div ref={articleFrameRef} className="article-frame">
                    <ul>
                        <li>a</li>
                        <li>b</li>
                        <li>c</li>
                        <li>d</li>
                        <li>e</li>
                    </ul>
                </div>
            </div>
            <div className="test">
                test
            </div>
        </div>

    );
}

export default Home;
