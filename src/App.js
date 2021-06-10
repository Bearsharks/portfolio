import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import MainContents from "./MainContents"
import HamburgerBtn from "./components/HamburgerBtn"

function App(props) {
	return (
		<div className="App">
			<header>
				<div className="header-wrapper">
					<div>home버튼</div>
					<HamburgerBtn></HamburgerBtn>
				</div>
			</header>
			<main>
				<BrowserRouter>
					<Route component={MainContents} />
				</BrowserRouter>
			</main>
		</div >
	);
}

export default App;
