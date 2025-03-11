import { createStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

export const store = createStore(reducer);

// store.dispatch({});
// store.subscribe(() => {
// 	console.log('Новое состояние:', store.getState());
// });
