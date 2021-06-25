import { useEffect, useState } from 'react'
import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import MainContents from "./MainContents"
import HamburgerBtn from "./components/HamburgerBtn"
import { RECAPTCHA_CLIENT_KEY } from './constants/constants';

function App(props) {
	const [isHeaderHide, setHeaderHide] = useState(false);
	useEffect(() => {
		const isScriptExist = document.getElementById("recaptcha");
		if (!isScriptExist) {
			const script = document.createElement("script");
			script.type = "text/javascript";
			script.id = "recaptcha";
			script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_CLIENT_KEY}`;
			document.body.appendChild(script);
		}
	}, [])
	const onWheelHandler = (e) => {
		if (e.deltaY < 0 && isHeaderHide === true) {
			setHeaderHide(false);
		} else if (e.deltaY > 0 && isHeaderHide === false) {
			setHeaderHide(true);
		}
	}
	return (
		<div className="App" onWheel={onWheelHandler}>
			<header>
				<div className={"header-wrapper" + (isHeaderHide ? " header-wrapper--hide" : "")} >
					<div className="home-btn">
						home버튼
					</div>
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
