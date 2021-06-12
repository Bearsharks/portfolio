import './Home.scss';
import { useEffect, useRef } from "react"

function Home() {
    const wrapperRef = useRef(null);
    const introRef = useRef(null);
    const articleRef = useRef(null);
    const testRef = useRef(null);
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
        if (wrapperRef.current.scrollTop > introRef.current.clientHeight) {
            let articleScrollTop = wrapperRef.current.scrollTop - introRef.current.clientHeight;
            let viewportSize = wrapperRef.current.clientHeight;
            //article.Height == 전체 높이 - article.offsetTop
            let maxScrollTop = (articleRef.current.clientHeight - viewportSize);
            let frameProgress = articleScrollTop / maxScrollTop;
            testRef.current.style.transform = `translate(${-frameProgress * (testRef.current.clientWidth - articleRef.current.clientWidth)}px, ${articleScrollTop}px)`;
        } else {
            testRef.current.style.transform = 'translate(0,0)';
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
                className="flex-wrapper__article"

            >
                <div ref={testRef} className="test">
                    detail detail detail detail detail detail detail detail
                    detail detail detail detail detail detail detail detail
                    detail detail detail detail detail detail detail detail
                    detail detail detail detail detail detail detail detail
                    detail detail detail detail detail detail detail detail
                    detail detail detail detail detail detail detail detail
                    detail detail detail detail detail detail detail detail
                    detail detail detail detail detail detail detail detail
                    detail detail detail detail detail detail detail detail
                    detail detail detail detail detail detail detail detail
                </div>
            </div>
        </div>

    );
}

export default Home;
