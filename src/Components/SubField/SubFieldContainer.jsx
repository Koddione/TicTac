import { useDispatch, useSelector } from 'react-redux';
import { EMPTY_FIELD, WIN_PATTERNS } from '../../constants';
import { getBorder } from '../../getBorder';
import { SubFieldLayout } from './SubFieldLayout';
import PropTypes from 'prop-types';
import {
	selectCurrentPlay,
	selectField,
	selectIsGameEnded,
} from '../../selectors';
import {
	actionCurrentPlay,
	actionDraw,
	actionField,
	actionIsGameEnded,
} from '../../actions';

export const SubFieldContainer = () => {
	const dispatch = useDispatch();
	const currentPlay = useSelector(selectCurrentPlay);
	const field = useSelector(selectField);
	const isGameEnded = useSelector(selectIsGameEnded);

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
			dispatch(actionField(newField));
			dispatch(actionCurrentPlay(currentPlay === 'X' ? '0' : 'X'));
		}

		const winner = checkWinner(newField);
		if (winner) {
			dispatch(actionIsGameEnded(true));
			winner === 'X'
				? dispatch(actionDraw('Победа крестиков'))
				: dispatch(actionDraw('Победа ноликов'));

			return;
		}
		if (!newField.includes('') && !winner) {
			dispatch(actionIsGameEnded(true));
			dispatch(actionDraw('Ничья'));
			dispatch(actionField(EMPTY_FIELD));
			return;
		}
	};

	const handleClick = (id) => {
		if (isGameEnded) return;
		handleFieldClick(id);
	};

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
