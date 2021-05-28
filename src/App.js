import './App.scss';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import Home from "./Home"
//다음목표 about 페이지 만들기
//about을 채워보기
//인터액션 
//클립파일 스크롤하면 다음페이지로 넘어감 클릭해서 잡아끌면 다음페이지로 넘어감 
//스크롤할때 섹션위치에 따라 네비게이션이 바뀐다.
//네비게이션을 클릭하면 해당 위치로 이동한다.

function App() {
	return (
		<div className="App">
			<header className="App-header">
			</header>

			<Router>
				<NavLink to={`/portfolio/Home`} activeClassName={'linkActive'}>Home</NavLink>
				<NavLink to={`/portfolio/work`} activeClassName={'linkActive'}>work</NavLink>
				<NavLink to={`/portfolio/contact`} activeClassName={'linkActive'}>contact</NavLink>
				<NavLink to={`/portfolio/youtube`} activeClassName={'linkActive'}>youtube</NavLink>
				<Switch>
					<Route exact path="/portfolio">
						<Redirect to={`/portfolio/Home`} />
					</Route>
					<Route path={`/portfolio/Home`}>
						<Home></Home>
					</Route>
					<Route path={`/portfolio/work`}>
						<div>2</div>
					</Route>
					<Route path={`/portfolio/contact`}>
						<div>3</div>
					</Route>
					<Route path={`/portfolio/youtube`}>
						<div>4</div>
					</Route>
				</Switch>
			</Router>
			<footer>

			</footer>
		</div >
	);
}

export default App;
