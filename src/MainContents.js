import './App.scss';
import { useEffect } from "react"
import { Route, NavLink, Switch, Redirect, useHistory } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"
import Mynav from "./components/Navigation"

function MainContents(props) {
    const history = useHistory();
    const getLocationId = ({ pathname, search, hash }) => {
        return pathname + (search ? "?" + search : "") + (hash ? "#" + hash : "");
    }

    useEffect(
        () => {
            history.block((location, action) =>
                action !== "PUSH" || getLocationId(location) !== getLocationId(history.location)
            );
        }, [] // eslint-disable-line react-hooks/exhaustive-deps
    );
    return (
        <>
            <Mynav>
                <NavLink to={`/portfolio/home`} activeClassName={'linkActive'} style={{ "zIndex": 4 }}>Home</NavLink>
                <NavLink to={`/portfolio/about`} activeClassName={'linkActive'} style={{ "zIndex": 3 }}>About</NavLink>
                <NavLink to={`/portfolio/projects`} activeClassName={'linkActive'} style={{ "zIndex": 2 }}>Projects</NavLink>
                <NavLink to={`/portfolio/contact`} activeClassName={'linkActive'} style={{ "zIndex": 1 }}>Contact</NavLink>
            </Mynav>
            <Switch>
                <Route exact path="/portfolio">
                    <Redirect to={`/portfolio/home`} />
                </Route>
                <Route path={`/portfolio/home`}>
                    <Home></Home>
                </Route>
                <Route path={`/portfolio/projects`}>
                    <Projects></Projects>
                </Route>
                <Route path={`/portfolio/about`} component={About}>

                </Route>
                <Route path={`/portfolio/contact`}>
                    <Contact></Contact>
                </Route>
            </Switch>
        </>
    );
}

export default MainContents;
