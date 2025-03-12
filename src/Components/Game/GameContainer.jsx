import { useDispatch, useSelector } from 'react-redux';
import { EMPTY_FIELD } from '../../constants';
import { GameLayout } from './GameLayout';
import {
	actionDraw,
	actionField,
	actionIsGameEnded,
	actionResetGame,
} from '../../actions';
import { selectIsGameEnded } from '../../selectors';

export const GameContainer = () => {
	const isGameEnded = useSelector(selectIsGameEnded);
	const dispatch = useDispatch();

	const handleBtnClickPlay = () => {
		if (isGameEnded) {
			dispatch(actionIsGameEnded(false));
			dispatch(actionField(EMPTY_FIELD));
			dispatch(actionDraw('Процесс игры...'));
		} else {
			dispatch(actionResetGame());
		}
	};
	return (
		<GameLayout
			handleBtnClickPlay={handleBtnClickPlay}
			isGameEnded={isGameEnded}
		/>
	);
};
