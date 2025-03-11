const initialState = {
	currentPlay: 'X',
	isGameEnded: true,
	draw: 'Игра еще не начата',
	field: ['', '', '', '', '', '', '', '', ''],
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_CURRENT_PLAY':
			return {
				...state,
				currentPlay: payload,
			};

		case 'SET_FIELD':
			return {
				...state,
				field: payload,
			};

		case 'CHECK_END_GAME':
			return {
				...state,
				isGameEnded: payload,
			};
		case 'GAME_STATE':
			return {
				...state,
				draw: payload,
			};
		case 'RESET_GAME':
			return { ...initialState, currentPlay: 'X' };
		default:
			return state;
	}
};
