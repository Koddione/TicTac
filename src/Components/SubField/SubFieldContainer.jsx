import { EMPTY_FIELD, WIN_PATTERNS } from '../../constants';
import { getBorder } from '../../getBorder';
import { useSubscribe } from '../../hooks/useSubscribe';
import { store } from '../../store';
import { SubFieldLayout } from './SubFieldLayout';
import PropTypes from 'prop-types';

export const SubFieldContainer = () => {
	const { currentPlay } = store.getState();
	const { field } = store.getState();
	const { isGameEnded } = store.getState();

	const checkWinner = (field) => {
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (field[a] && field[a] === field[b] && field[a] === field[c]) {
				return field[a];
			}
		}
	};

	const handleFieldClick = (id) => {
		const newField = [...field];

		if (newField[id] === '') {
			newField[id] = currentPlay;
			store.dispatch({ type: 'SET_FIELD', payload: newField });
			store.dispatch({
				type: 'SET_CURRENT_PLAY',
				payload: currentPlay === 'X' ? '0' : 'X',
			});
		}

		const winner = checkWinner(newField);
		if (winner) {
			store.dispatch({ type: 'CHECK_END_GAME', payload: true });
			winner === 'X'
				? store.dispatch({
						type: 'GAME_STATE',
						payload: 'Победа крестиков',
				  })
				: store.dispatch({
						type: 'GAME_STATE',
						payload: 'Победа ноликов',
				  });

			return;
		}
		if (!newField.includes('') && !winner) {
			store.dispatch({ type: 'CHECK_END_GAME', payload: true });
			store.dispatch({ type: 'GAME_STATE', payload: 'Ничья' });
			store.dispatch({
				type: 'SET_FIELD',
				payload: EMPTY_FIELD,
			});
			return;
		}
	};

	const handleClick = (id) => {
		if (isGameEnded) return;
		handleFieldClick(id);
	};

	useSubscribe();

	return (
		<>
			{field.map((value, index) => (
				<SubFieldLayout
					key={index}
					handleFieldClick={handleFieldClick}
					id={index}
					border={getBorder(index)}
					handleClick={handleClick}
					isGameEnded={isGameEnded}>
					{value}
				</SubFieldLayout>
			))}
		</>
	);
};

SubFieldContainer.propTypes = {
	handleFieldClick: PropTypes.func.isRequired,
	field: PropTypes.array.isRequired,
	isDisabled: PropTypes.bool,
};
