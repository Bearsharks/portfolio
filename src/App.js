import './App.scss';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Experience from "./Experience"
import HamburgerBtn from "./lib/HamburgerBtn"
//다음목표 about 페이지 만들기
//about을 채워보기
//인터액션 
//클립파일 스크롤하면 다음페이지로 넘어감 클릭해서 잡아끌면 다음페이지로 넘어감 
//스크롤할때 섹션위치에 따라 네비게이션이 바뀐다.
//네비게이션을 클릭하면 해당 위치로 이동한다.

function App() {
	const clickHandler = (isActive) => {
		console.log(isActive);
	};
	return (
		<div className="App">
			<header className="App-header">
				<div>home버튼</div>
				<HamburgerBtn clickHandler={clickHandler}></HamburgerBtn>
			</header>
			<main>
				<Router>
					<NavLink to={`/portfolio/home`} activeClassName={'linkActive'}>Home</NavLink>
					<NavLink to={`/portfolio/experience`} activeClassName={'linkActive'}>Experience</NavLink>
					<NavLink to={`/portfolio/about`} activeClassName={'linkActive'}>About</NavLink>
					<NavLink to={`/portfolio/contact`} activeClassName={'linkActive'}>contact</NavLink>
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
						<Route path={`/portfolio/about`}>
							<About></About>
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
