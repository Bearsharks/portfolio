import './Home.scss';
import { useEffect, useRef } from "react"
import Article from "./components/Article"
import { ReactComponent as Icon } from './expand.svg';
function Home() {
    const wrapperRef = useRef(null);
    const introRef = useRef(null);
    const articleRef = useRef(null);
    const articleFrameRef = useRef(null);
    const scrollSpeed = 30;
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
            changeStyle(firstStyle, "opacity", "0");
            changeStyle(firstStyle, "transform", "");
        }
        if (childCnt <= 1) return;
        let second = first + 1;
        let secondShownSizePer = 1 - firstShownSizePer;
        let secondStyle = articleFrameRef.current.children[0].children[second].style;
        if (secondShownSizePer > 0.20) {
            changeStyle(secondStyle, "opacity", "1");
            changeStyle(secondStyle, "transform", `translateY(0px)`);
        }
        else {
            changeStyle(secondStyle, "opacity", "0");
            changeStyle(secondStyle, "transform", "");
        }
    }
    const renderFrame = () => {

        if (wrapperRef.current) {
            if (wrapperRef.current.cnt < scrollSpeed) {
                wrapperRef.current.scrollTop += window.innerHeight / scrollSpeed;
                wrapperRef.current.cnt++;
            }
            moveFrame();
        }
        lastReq = requestAnimationFrame(renderFrame.bind(this));
    }

    useEffect(() => {
        wrapperRef.current.addEventListener('scroll', onScrollHandler);
        let childCnt = articleFrameRef.current.children[0].childElementCount;

        articleRef.current.style.height = childCnt * window.innerHeight + 'px';
        window.addEventListener('resize', setCameraDirty);
        lastReq.current = requestAnimationFrame(renderFrame);
        return () => {
            window.removeEventListener('resize', setCameraDirty);
            if (lastReq.current) cancelAnimationFrame(lastReq.current);
        }
    }, []);
    const introBtnClickHandler = (e) => {
        debugger;
        wrapperRef.current.cnt = Math.floor(wrapperRef.current.scrollTop / (window.innerHeight / scrollSpeed));
    }

    const articles = [
        {
            tags: ['#효율지향적', '#창의적인', '#기본에충실'],
            contents: "hi",
            linkInfo: {
                alt: "hi",
                link: "/portfolio/about"
            }
        },
        {
            tags: ['#실습을 통해 배우기', "#비교분석", "#테스트"],
            contents: "hi",
            linkInfo: {
                alt: "hi",
                link: "/portfolio/project"
            }
        },
        {
            tags: ['#역지사지', "#예의와배려"],
            contents: "hi",
            linkInfo: {
                alt: "hi",
                link: "/portfolio/contact"
            }
        },
    ]
    return (
        <div
            ref={wrapperRef}
            onScroll={onScrollHandler}
            className="flex-wrapper blueblack">
            <div
                ref={introRef}
                className="flex-wrapper__intro"
            >
                <div>
                    <br /><br /><br />
                    <div className={`intro__header1`}>Write code for</div>
                    <div className={`intro__header2`}>humans!</div>
                </div>
                <div className={`intro__message`}>
                    <div>안녕하세요, 웹 개발자 조성빈입니다.</div>
                    <div
                        className={`intro__message--small`}
                    >
                        개발로써 사람들에게 더 나은 가치를 전합니다.
                    </div>
                </div>
                <div className={`intro__button`} onClick={introBtnClickHandler}>
                    <Icon width="150" height="150" fill="white" />
                </div>

            </div>
            <div
                ref={articleRef}
                className="flex-wrapper__article"
            >
                <div ref={articleFrameRef} className="article-frame">
                    <ul>
                        {
                            articles.map((el, index) => {
                                return (
                                    <li key={index}>
                                        <Article
                                            tags={el.tags}
                                            contents={el.contents}
                                            linkInfo={el.linkInfo}>
                                        </Article>
                                    </li>
                                );
                            })
                        }
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
