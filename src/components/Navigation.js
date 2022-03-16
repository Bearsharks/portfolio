import React from "react"
import './Navigation.scss';
import MiniLinks from "./MiniLinks";
import { useRecoilState } from 'recoil';
import { isNavActive } from '../atoms/atoms'

function Navigation({ children }) {

    const [isActive, setNavActive] = useRecoilState(isNavActive);
    const inActiveNav = (e) => {
        if (e.target.href) setNavActive(false);
    }

    return (
        <div
            onClick={inActiveNav}
            onWheel={e => window.onWheelStopPropa(e)}
            className={"navigation " + (isActive ? "navigation--active" : "navigation--inactive")}
        >
            {children}
            <div className={"miniLink"}>
                <MiniLinks

                    linkSize={40}
                ></MiniLinks>
            </div>
        </div>
    );
}

export default Navigation;
