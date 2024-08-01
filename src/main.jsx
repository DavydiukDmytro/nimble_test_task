import ReactDOM from 'react-dom/client';

import './utils/index.css';
import { App } from './component/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter basename='/nimble_test_task'>
			<App />
		</BrowserRouter>
	</Provider>
);
