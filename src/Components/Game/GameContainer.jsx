import { EMPTY_FIELD } from '../../constants';
import { useSubscribe } from '../../hooks/useSubscribe';
import { store } from '../../store';
import { GameLayout } from './GameLayout';

export const GameContainer = () => {
	const { isGameEnded } = store.getState();

	useSubscribe();

	const handleBtnClickPlay = () => {
		if (isGameEnded) {
			store.dispatch({ type: 'CHECK_END_GAME', payload: false });
			store.dispatch({ type: 'SET_FIELD', payload: EMPTY_FIELD });
			store.dispatch({ type: 'GAME_STATE', payload: 'Процесс игры...' });
		} else {
			store.dispatch({ type: 'RESET_GAME' });
		}
	};
	return (
		<GameLayout
			handleBtnClickPlay={handleBtnClickPlay}
			isGameEnded={isGameEnded}
		/>
	);
};
