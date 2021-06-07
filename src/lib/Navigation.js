import './Navigation.scss';
import { useRecoilState } from 'recoil';
import { isNavActive } from '../atoms/isNavActive'

function Navigation(props) {
    const [isActive, setActive] = useRecoilState(isNavActive);
    return (
        <div className={isActive ? "navigation navigation--active" : "navigation navigation--inactive"}>
            {props.children}
        </div>
    );
}

export default Navigation;
