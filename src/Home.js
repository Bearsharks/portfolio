import './Home.scss';
import { useEffect, useRef } from "react"
import Article from "./components/Article"
import Badge from './components/badge';
import { ReactComponent as Icon } from './images/expand.svg';
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
        wrapperRef.current.cnt = Math.floor(wrapperRef.current.scrollTop / (window.innerHeight / scrollSpeed));
    }

    const articles = [
        {
            title: `About me`,
            tags: ['#효율지향적', '#창의적', '#기본에 충실한'],
            contents: [
                '개발을 통해 더 나은 가치를 전달하는 것을 목표로 하고있습니다.',
                "사람들이 필요로 하는 것에 대해 생각하고 그 것을 구현하는 것을 좋아합니다.",
                <>
                    관심 기술 :<br />

                    <span style={{ fontSize: `1px` }}>
                        <Badge name="HTML5" color="001A23" /> &nbsp;
                        <Badge name="SASS" color="001A23" /> &nbsp;

                        <Badge name="JavaScript" color="001A23" /> &nbsp;

                        <Badge name="React" color="001A23" />&nbsp;
                        <Badge name="Recoil" color="001A23" logo="react" /> &nbsp;
                        <Badge name="Jest" color="001A23" logoColor="007ACC" />


                    </span >
                </>
            ],
            linkInfo: {
                alt: "About me & Skills",
                link: "/portfolio/about"
            }
        },
        {
            title: `Experience`,
            tags: ["#비교와 분석", "#지속가능한 코드", '#백문이불여일타'],
            contents: ['1년 경력의 주니어 웹개발자입니다.', "개발에서 빈틈없는 코드, 지속가능한 코드를 위해 항상 고민합니다.", "가장 좋은 학습방법이 실습이라고 생각하기에 배우면 기록하고, 사이드 프로젝트에 하나씩 적용해봅니다."],
            linkInfo: {
                alt: "Projects",
                link: "/portfolio/projects"
            }
        },
        {
            title: `Communication`,
            tags: ['#역지사지', "#예의와 배려", "#Open mind"],
            contents: ['예의와 배려로 의사소통하고, 다른 사람의 입장에서 한번 더 생각합니다.', "제 메일함은 항상 열려있습니다. 제의나 질문이든 혹은 단지 안부인사든 모두 환영입니다. 부담 없이 연락주세요."],
            linkInfo: {
                alt: "Contact",
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
                    <div className="article-ul">
                        {
                            articles.map((el, index) => {
                                return (
                                    <li key={index}>

                                        <Article
                                            title={el.title}
                                            tags={el.tags}
                                            contents={el.contents}
                                            linkInfo={el.linkInfo}>
                                        </Article>
                                    </li>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="test">
                test
            </div>
        </div>

    );
}

export default Home;
