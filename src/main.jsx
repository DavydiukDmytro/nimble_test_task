import React from 'react';
import ReactDOM from 'react-dom/client';

import './utils/index.css';
import { App } from './component/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter basename='/nimble_test_task'>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
