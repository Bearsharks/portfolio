import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<App />
		</RecoilRoot>

	</React.StrictMode>,
	document.getElementById('root')
);

window.onWheelStopPropa = function (e) {
	e.stopPropagation();
}
reportWebVitals();
