import { store } from '../../store';
import { InformationLayout } from './InformationLayout';

export const InformationContainer = () => {
	const { currentPlay } = store.getState();
	const { draw } = store.getState();
	return <InformationLayout currentPlay={currentPlay} draw={draw} />;
};
