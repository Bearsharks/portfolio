import { useEffect } from 'react'
import { RecoilRoot } from 'recoil';
import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import MainContents from "./MainContents"
import HamburgerBtn from "./components/HamburgerBtn"
import { RECAPTCHA_CLIENT_KEY } from './constants/constants';

function App(props) {
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

	return (
		<RecoilRoot>
			<div className="App">
				<header>
					<div className="header-wrapper">
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
		</RecoilRoot>
	);
}

export default App;
