import './HamburgerBtn.scss';
import { useRecoilState } from 'recoil';
import { isNavActive } from '../atoms/isNavActive'
/*
* props.clickHandler 햄버거버튼 누르면 발생하는 이벤트처리
*/
function HamburgerBtn(props) {
    const [isActive, setActive] = useRecoilState(isNavActive);
    const togleActive = () => {
        setActive((isActive) ? false : true);
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
