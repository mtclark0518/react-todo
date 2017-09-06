import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './_config/routes.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

ReactDOM.render(
	<Router routes={routes} history={browserHistory}/>,
	document.getElementById('root')
	);

