import { useEffect, useState } from 'react';
import { store } from '../store';

export const useSubscribe = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return () => unsubscribe();
	}, []);
};
