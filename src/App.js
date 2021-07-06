import { useEffect } from 'react'
import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import MainContents from "./MainContents"
import HamburgerBtn from "./components/HamburgerBtn"
import { RECAPTCHA_CLIENT_KEY } from './constants/constants';
import { useRecoilValue, useRecoilState } from 'recoil';
import { isNavActive } from './atoms/atoms'
import { ReactComponent as BackIcon } from './images/arrow_back.svg';
import { headerActive, backBtnState } from "./atoms/atoms"

function App(props) {
	const [isHeaderActive, setHeaderState] = useRecoilState(headerActive);
	const navActive = useRecoilValue(isNavActive);
	const backBtnActive = useRecoilValue(backBtnState);
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
		if (e.deltaY < 0 && isHeaderActive === false) {
			setHeaderState(true);
		} else if (e.deltaY > 0 && isHeaderActive === true) {
			setHeaderState(false);
		}
	}
	const backBtnClickHandler = () => {
		window.history.back();
	}

	return (
		<div className="App" onWheel={onWheelHandler}>
			<header>
				<div
					className={"header-wrapper" + (!isHeaderActive ? " header-wrapper--hide" : "") + (navActive ? " header-wrapper--navActive" : "")}
					onWheel={e => window.onWheelStopPropa(e)}
				>
					<div className={"back-btn"} onClick={backBtnClickHandler} >
						{backBtnActive && <BackIcon width="35" height="35" fill="white" />}
					</div>
					<HamburgerBtn></HamburgerBtn>
				</div>
			</header>
			<main>
				<BrowserRouter basename="/portfolio">
					<Route component={MainContents} />
				</BrowserRouter>
			</main>
		</div >
	);
}

export default App;
