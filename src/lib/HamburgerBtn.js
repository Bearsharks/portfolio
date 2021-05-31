import './HamburgerBtn.scss';
import { useState } from 'react';
/*
* props.clickHandler 햄버거버튼 누르면 발생하는 이벤트처리
*/
function HamburgerBtn(props) {
    const [isActive, setActive] = useState(false);
    const togleActive = () => {
        let tmp = (isActive) ? false : true;
        setActive(tmp);
        props.clickHandler(tmp);
    }

    return (
        <div
            className={`hamburger-btn`}
            onClick={togleActive}
        >
            <div
                className={(isActive) ? `hamburger hamburger--active` : `hamburger`}
            />
        </div>

    );
}

export default HamburgerBtn;
