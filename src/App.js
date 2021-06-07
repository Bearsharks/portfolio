import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import MainContents from "./MainContents"
import HamburgerBtn from "./lib/HamburgerBtn"

function App(props) {
	return (
		<div className="App">
			<header className="App-header">
				<div>home버튼</div>
				<HamburgerBtn></HamburgerBtn>
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
