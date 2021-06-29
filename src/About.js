import './About.scss';
import { useState, useRef } from 'react'
import { ReactComponent as Icon } from './images/expand.svg';

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
                <h1>About</h1>
            </div>
            <div
                className={`about-box`}
                onMouseDown={onMouseDownHandler}
                onMouseMove={onMouseMoveHandler}
                onMouseUp={onMouseUpHandler}
                onMouseLeave={onMouseLeaveHandler}
            >
                <div
                    ref={skillBoxRef}
                    className={`skill-box-wrapper`}
                >
                    <div
                        ref={backBoxRef}
                        className={`skill-box skill-box--back`}
                    >
                        back
                    </div>
                    <div className={`skill-box skill-box--front`}>front</div>
                </div>

            </div>
            <div className={`skill-btns`} >
                <div className={`skill-btns__leftbtn`} onClick={() => rotBtnClickHandler(-1)}>
                    <Icon width="110" height="100" fill='black' />
                </div>

                <div className={`skill-btns__rightbtn`} onClick={() => rotBtnClickHandler(1)}>
                    <Icon width="110" height="100" fill='black' />
                </div>
            </div>
        </div>
    );
}

export default About;
