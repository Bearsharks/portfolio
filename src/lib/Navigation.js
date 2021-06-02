import './Navigation.scss';
import { NavLink } from "react-router-dom";
function Navigation(props) {

    return (
        <div className={props.Active ? "navigation navigation--active" : "navigation navigation--inactive"}>
            <NavLink to={`/portfolio/home`} activeClassName={'linkActive'}>Home</NavLink>
            <NavLink to={`/portfolio/experience`} activeClassName={'linkActive'}>Experience</NavLink>
            <NavLink to={`/portfolio/about`} activeClassName={'linkActive'}>About</NavLink>
            <NavLink to={`/portfolio/contact`} activeClassName={'linkActive'}>contact</NavLink>
        </div>
    );
}

export default Navigation;
