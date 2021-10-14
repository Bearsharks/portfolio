import './App.scss';
import { useEffect } from "react"
import { Route, NavLink, Switch, Redirect, useHistory } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"
import Mynav from "./components/Navigation"
import { useSetRecoilState } from 'recoil';
import { headerActive, backBtnState } from "./atoms/atoms"

function MainContents(props) {
    const history = useHistory();
    const setHeaderActive = useSetRecoilState(headerActive);
    const setBackBtnState = useSetRecoilState(backBtnState);
    const getLocationId = ({ pathname, search, hash }) => {
        return pathname + (search ? "?" + search : "") + (hash ? "#" + hash : "");
    }

    useEffect(
        () => {
            history.block((location, action) =>
                action !== "PUSH" || getLocationId(location) !== getLocationId(history.location)
            );

            history.listen((location, action) => {
                setHeaderActive(true);
                if (location.pathname === '/home') setBackBtnState(false);
                else setBackBtnState(true);
                window.scrollTo(0, 0)
                //location.
            });
        }, [] // eslint-disable-line react-hooks/exhaustive-deps
    );
    return (
        <>
            <Mynav>
                <NavLink to={"/home"} activeClassName={'linkActive'} style={{ "zIndex": 4 }}>Home</NavLink>
                <NavLink to={"/about"} activeClassName={'linkActive'} style={{ "zIndex": 3 }}>About</NavLink>
                <NavLink to={"/projects"} activeClassName={'linkActive'} style={{ "zIndex": 2 }}>Projects</NavLink>
                <NavLink to={"/contact"} activeClassName={'linkActive'} style={{ "zIndex": 1 }}>Contact</NavLink>
            </Mynav>
            <Switch>
                <Route exact path="/">
                    <Redirect to={"/home"} />
                </Route>
                <Route path={"/home"} component={Home} />
                <Route path={"/projects"} component={Projects} />
                <Route path={"/about"} component={About} />
                <Route path={"/contact"} component={Contact} />
            </Switch>
        </>
    );
}

export default MainContents;
