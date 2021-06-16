import './Home.scss';
import { useEffect, useRef } from "react"

function Home() {
    const wrapperRef = useRef(null);
    const introRef = useRef(null);
    const articleRef = useRef(null);
    const articleFrameRef = useRef(null);
    let lastReq = 0;
    const onScrollHandler = (e) => {
    }
    const setCameraDirty = (e) => {
    }

    const renderFrame = () => {
        lastReq = requestAnimationFrame(renderFrame.bind(this));
        let curTransForm = 'translate(0,0)';
        if (!wrapperRef.current) return;
        if (wrapperRef.current.scrollTop < introRef.current.clientHeight) {
            curTransForm = 'translate(0,0)';
            if (curTransForm !== articleFrameRef.current.style.transform) articleFrameRef.current.style.transform = curTransForm;
            return;
        }
        let articleScrollTop = wrapperRef.current.scrollTop - introRef.current.clientHeight;
        let viewportSize = wrapperRef.current.clientHeight;
        let maxScrollTop = (articleRef.current.clientHeight - viewportSize);
        let frameProgress = Math.max(0, Math.min(0.9999, articleScrollTop / maxScrollTop));
        let curTop = Math.min(maxScrollTop, articleScrollTop);
        let maxViewportPosX = articleFrameRef.current.clientWidth - articleRef.current.clientWidth;
        curTransForm = `translate(${-frameProgress * maxViewportPosX}px, ${curTop}px)`;

        if (curTransForm === articleFrameRef.current.style.transform) return;
        articleFrameRef.current.style.transform = curTransForm;


        //10% 이상 보이면 스타일 바꿔줌 
        let childCnt = articleFrameRef.current.children[0].childElementCount;
        let eleSize = 1 / (childCnt - 1);
        let first = Math.floor(frameProgress / eleSize);
        let firstShownSizePer = (eleSize - (frameProgress % eleSize)) / eleSize;
        let firstStyle = articleFrameRef.current.children[0].children[first].style;
        if (firstShownSizePer > 0.15) {
            if (!firstStyle.opacity || !firstStyle.transform) {
                firstStyle.opacity = 1;
                firstStyle.transform = `translateY(0)`;
            }
        }
        else {
            if (firstStyle.opacity && firstStyle.transform) {
                firstStyle.opacity = "";
                firstStyle.transform = "";
            }
        }

        let second = first + 1;
        let secondShownSizePer = 1 - firstShownSizePer;
        let secondStyle = articleFrameRef.current.children[0].children[second].style;
        if (secondShownSizePer > 0.15) {
            if (!secondStyle.opacity || !secondStyle.transform) {
                secondStyle.opacity = 1;
                secondStyle.transform = `translateY(0)`;
            }
        }
        else {
            if (secondStyle.opacity && secondStyle.transform) {
                secondStyle.opacity = "";
                secondStyle.transform = "";
            }
        }
    }

    useEffect(() => {
        wrapperRef.current.addEventListener('scroll', onScrollHandler);
        window.addEventListener('resize', setCameraDirty);
        renderFrame();
        return () => {
            debugger;
            window.removeEventListener('resize', setCameraDirty);
            if (lastReq) cancelAnimationFrame(lastReq);
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
