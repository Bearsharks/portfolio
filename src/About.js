import './About.scss';
import { useState, useRef } from 'react'
import { ReactComponent as Icon } from './images/expand.svg';
import Badge from './components/badge';
function About(props) {
    const skillBoxRef = useRef(null);
    const backBoxRef = useRef(null);
    let prevCeta = 0;
    let canRot = false;
    let isRotating = false;
    let lastd = 1;
    const getCeta = (rawceta) => {
        return ((rawceta % 360) + 360) % 360;
    }
    const onMouseDownHandler = (e) => {
        canRot = true;
    }
    const rotate = (curCeta) => {
        curCeta = getCeta(curCeta);
        skillBoxRef.current.style.transform = `rotateY(${Math.round(curCeta)}deg)`;
        if (90 < curCeta && curCeta < 270) {
            backBoxRef.current.style.zIndex = '1';
        } else {
            backBoxRef.current.style.zIndex = '';
        }
    }

    const onMouseMoveHandler = (e) => {
        if (canRot) {
            prevCeta = getCeta(prevCeta + e.movementX / 3);
            lastd = e.movementX > 0 ? 1 : -1;
            rotate(prevCeta);
        }
    }

    const rotBtnClickHandler = (d) => {
        if (isRotating) return;
        isRotating = true;
        canRot = false;
        let ceta = prevCeta;
        let remain = 0;
        if (90 > ceta) remain = 180 - ceta;
        else if (180 > ceta) remain = 360 - ceta;
        else if (270 > ceta) remain = 360 - ceta;
        else remain = 360 + 180 - ceta;
        if (d < 0) remain = 360 - remain;
        let prevTS = 0;

        const rotateframe = (timestamp) => {
            let dt = 0;
            if (prevTS) dt = (timestamp - prevTS);
            prevTS = timestamp;
            let dceta = Math.min(dt / 2, remain);

            remain -= dceta;
            prevCeta = getCeta(prevCeta + d * dceta);
            if (remain > 0) {
                requestAnimationFrame(rotateframe);
            } else {
                prevCeta = Math.round(prevCeta);
                isRotating = false;
            }
            rotate(prevCeta);
        }
        rotateframe(prevTS);
    }

    const onMouseUpHandler = (e) => {
        canRot = false;
        rotBtnClickHandler(lastd);
    }
    const onMouseLeaveHandler = (e) => {
        if (canRot === false) return;
        canRot = false;
        rotBtnClickHandler(lastd);
    }
    return (
        <div className={`about_wrapper`}>
            <div
                className={`about-box about-box--blueblack`}

            >
                <h1 className={`about_header`}>About</h1>
                <div className={`about_detail`}>
                    개발을 통해 사람들에게 더 나은 가치를 전하는 것을 목표로 하고 있습니다.
                    <li>사용자가 원하는 것에 대해 생각하고, 그 것을 구현하는데서 보람을 느낍니다.</li>
                    <br />

                    빈틈없고 지속가능한 코드를 작성하기 위해 항상 고민합니다.
                    <li>테스트와 검증, 코딩 컨벤션 준수와 가독성있는 코드 작성, 지속적인 리펙토링을 수행합니다.</li>
                    <br />

                    우선순위에 따른 계획있는 개발을 선호합니다.
                    <li>당장의 편의보다 사용자에게 전해질 가치를 우선시 합니다.</li>
                </div>

            </div>
            <div
                className={`about-box`}
                onMouseDown={onMouseDownHandler}
                onMouseMove={onMouseMoveHandler}
                onMouseUp={onMouseUpHandler}
                onMouseLeave={onMouseLeaveHandler}
            >
                <h2> Skills </h2>
                <div
                    ref={skillBoxRef}
                    className={`skill-box-wrapper`}
                >

                    <div
                        ref={backBoxRef}
                        className={`skill-box skill-box--back`}
                    >
                        <h2 className={`skill-box__header`} >Backend</h2>
                        <div className={`skill-box__contents`}>
                            <h3>Server</h3>
                            <Badge name="Spring" color="001A23" /> <Badge name="Apache tomcat" color="001A23" logoColor="FFFFFF" /> / <Badge name="Node.js" color="001A23" /> <Badge name="Express" color="001A23" /><br />
                            기본적인 환경 구성과 Restful API를 작성 할 수 있습니다.<br />
                            <h3>DB</h3>
                            <Badge name="Oracle" color="001A23" /> <br />

                            정규화와 트랜잭션에 대해 이해하고 기본적인 SQL을 작성 할 수 있습니다.
                        </div>
                        <h2 className={`skill-box__header`} >ETC </h2>
                        <div className={`skill-box__contents`}>
                            <Badge name="Python" color="001A23" /> <Badge name="Linux" color="001A23" logoColor="FFFFFF" /> <Badge name="Azure Functions" color="001A23" /> <Badge name="EC2" color="001A23" logo="Amazon AWS" />
                        </div>
                    </div>
                    <div className={`skill-box skill-box--front`}>
                        <h2 className={`skill-box__header`} >Frontend</h2>
                        <div className={`skill-box__contents`}>
                            <h3>Publishing</h3>
                            <Badge name="HTML5" color="fffff5" /> <Badge name="CSS3" color="fffff5" logoColor="007ACC" /> <Badge name="SASS" color="fffff5" /> <br />
                            CSS3 애니메이션과 반응형 디자인가능 SCSS css-module로 개발하는 것을 선호<br />
                        </div>
                        <div className={`skill-box__contents`}>
                            <h3>Programing language</h3>
                            <Badge name="JavaScript" color="fffff5" /> <br />
                            Javascript 프로토타입개념을 이해하고, es6문법과 여러 표준내장객체에 익숙합니다. <br />
                        </div>
                        <div className={`skill-box__contents`}>
                            <h3>Libraries</h3>
                            <Badge name="React" color="fffff5" /> <Badge name="Recoil" color="fffff5" logo="react" />  <Badge name="Jest" color="fffff5" logoColor="007ACC" /><br />
                            컴포넌트 구성, hook의 사용에 익숙합니다.
                            <br />
                            Flux패턴에 대해 이해하고, 상태관리에 Recoil을 활용 할 수 있습니다.
                            <br />
                            컴포넌트 테스트와 mocking으로 독립된 테스트를 작성 할 수 있습니다.
                        </div>
                        <div className={`skill-box__contents`}>
                            <h3> Tools</h3>
                            <Badge name="visual studio code" color="fffff5" logoColor="007ACC" />  <Badge name="git" color="fffff5" />
                        </div>

                    </div>
                </div>

            </div>
            <div className={`skill-btns`} >
                <div className={`skill-btns-left`} onClick={() => rotBtnClickHandler(-1)}>
                    <Icon className={`skill-btns-left__large`} width="110" height="100" fill='lightgrey' />
                    <Icon className={`skill-btns-left__small`} width="50" height="50" fill='lightgrey' />
                </div>

                <div className={`skill-btns-right`} onClick={() => rotBtnClickHandler(1)}>
                    <Icon className={`skill-btns-right__large`} width="110" height="100" fill='lightgrey' />
                    <Icon className={`skill-btns-right__small`} width="50" height="50" fill='lightgrey' />
                </div>
            </div>
        </div >
    );
}

export default About;
