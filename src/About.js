import './About.scss';
import { useState, useRef } from 'react'
function About(props) {
    const skillBoxRef = useRef(null);
    const backBoxRef = useRef(null);
    let prevRot = 0;
    let canRot = false;

    const onMouseDownHandler = (e) => {

        canRot = true;
        console.log(canRot);
    }
    const onMouseMoveHandler = (e) => {

        if (canRot) {
            let curRot = (prevRot + e.movementX / 5);
            console.log(curRot.toFixed(1));
            skillBoxRef.current.style.transform = `rotateY(${curRot.toFixed(1)}deg)`;
            let test = (curRot + 90) % 360;
            if (test < 0) test += 360;
            if (test > 180) {
                backBoxRef.current.style.zIndex = '1';
            } else {
                backBoxRef.current.style.zIndex = '';
            }
            prevRot = curRot;
        }
    }
    const onMouseUpHandler = (e) => {
        canRot = false;
    }
    const onMouseLeaveHandler = (e) => {
        canRot = false;
    }
    return (
        <div className={`about_wrapper`}>
            <div
                className={`about-box about-box--blueblack`}

            >
                <h1>About</h1>
            </div>
            <div
                className={`about-box about-box--reverse-blueblack`}
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
        </div>
    );
}

export default About;
