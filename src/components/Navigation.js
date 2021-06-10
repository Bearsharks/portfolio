import React from "react"
import './Navigation.scss';
import { useRecoilState } from 'recoil';
import { isNavActive } from '../atoms/isNavActive'

function Navigation({ children }) {
    const [isActive, setNavActive] = useRecoilState(isNavActive);
    const inActiveNav = (e) => {
        if (e.target.href) setNavActive(false);
    }
    return (
        <div
            onClick={inActiveNav}
            className={"navigation " + (isActive ? "navigation--active" : "navigation--inactive")}
        >
            {children}
        </div>
    );
}

export default Navigation;
