import './App.scss';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Experience from "./Experience"
import HamburgerBtn from "./lib/HamburgerBtn"
import Mynav from "./lib/Navigation"

function App(props) {
	return (
		<div className="App">
			<header className="App-header">
				<div>home버튼</div>
				<HamburgerBtn></HamburgerBtn>
			</header>
			<main>
				<Router>
					<Mynav>
						<NavLink to={`/portfolio/home`} activeClassName={'linkActive'}>Home</NavLink>
						<NavLink to={`/portfolio/experience`} activeClassName={'linkActive'}>Experience</NavLink>
						<NavLink to={`/portfolio/about`} activeClassName={'linkActive'}>About</NavLink>
						<NavLink to={`/portfolio/contact`} activeClassName={'linkActive'}>contact</NavLink>
					</Mynav>
					<Switch>
						<Route exact path="/portfolio">
							<Redirect to={`/portfolio/home`} />
						</Route>
						<Route path={`/portfolio/home`}>
							<Home></Home>
						</Route>
						<Route path={`/portfolio/experience`}>
							<Experience></Experience>
						</Route>
						<Route path={`/portfolio/about`} component={About}>

						</Route>
						<Route path={`/portfolio/contact`}>
							<Contact></Contact>
						</Route>
					</Switch>
				</Router>
			</main>
		</div >
	);
}

export default App;
