import './Home.scss';
import { useEffect, useRef } from "react"

function Home() {
    const wrapperRef = useRef(null);
    const introRef = useRef(null);
    const articleRef = useRef(null);
    const articleFrameRef = useRef(null);
    let lastReq = null;
    let prevScrollTop = 0;
    let isViewportChagned = false;
    const onScrollHandler = (e) => {
        setCameraDirty(e);
    }
    const setCameraDirty = (e) => {
        if (e.type === "resize") isViewportChagned = true;
        else if (prevScrollTop !== wrapperRef.current.scrollTop) {
            isViewportChagned = true;
            prevScrollTop = wrapperRef.current.scrollTop;
        }
    }

    const renderFrame = () => {
        lastReq = requestAnimationFrame(renderFrame.bind(this));
        if (!isViewportChagned) return;
        isViewportChagned = false;
        let frameProgress = 0;
        if (wrapperRef.current.scrollTop > introRef.current.clientHeight) {
            let articleScrollTop = wrapperRef.current.scrollTop - introRef.current.clientHeight;
            let viewportSize = wrapperRef.current.clientHeight;
            //article.Height == 전체 높이 - article.offsetTop
            let maxScrollTop = (articleRef.current.clientHeight - viewportSize);
            frameProgress = Math.min(0.9999, articleScrollTop / maxScrollTop);
            let curTop = Math.min(maxScrollTop, articleScrollTop);
            articleFrameRef.current.style.transform = `translate(${-frameProgress * (articleFrameRef.current.clientWidth - articleRef.current.clientWidth)}px, ${curTop}px)`;
        } else {
            articleFrameRef.current.style.transform = 'translate(0,0)';
        }
        //10% 이상 보이면 스타일 바꿔줌 
        let childCnt = articleFrameRef.current.children[0].childElementCount;
        let eleSize = 1 / (childCnt - 1);
        let first = Math.floor(frameProgress / eleSize);
        let firstShownSizePer = (eleSize - (frameProgress % eleSize)) / eleSize;

        if (firstShownSizePer > 0.15) {
            articleFrameRef.current.children[0].children[first].style.opacity = 1;
            articleFrameRef.current.children[0].children[first].style.transform = `translateY(0)`;
        }
        else {
            articleFrameRef.current.children[0].children[first].style.opacity = "";
            articleFrameRef.current.children[0].children[first].style.transform = "";
        }

        let second = Math.floor((frameProgress + eleSize) / eleSize);
        let secondShownSize = (frameProgress % eleSize) / eleSize;

        if (secondShownSize > 0.15) {
            articleFrameRef.current.children[0].children[second].style.opacity = 1;
            articleFrameRef.current.children[0].children[second].style.transform = `translateY(0)`;
        }
        else {
            articleFrameRef.current.children[0].children[second].style.opacity = "";
            articleFrameRef.current.children[0].children[second].style.transform = "";
        }
    }

    useEffect(() => {
        wrapperRef.current.addEventListener('scroll', onScrollHandler);
        window.addEventListener('resize', setCameraDirty);
        renderFrame();
        return () => {
            window.removeEventListener('resize', onScrollHandler);
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
                home
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
                        <li>f</li>
                        <li>g</li>
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
