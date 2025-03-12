import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { GameContainer } from './Components/Game/GameContainer';
import { Provider } from 'react-redux';
import { store } from './store';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<GameContainer />
		</Provider>
	</StrictMode>,
);
