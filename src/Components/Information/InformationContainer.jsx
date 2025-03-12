import { useSelector } from 'react-redux';
import { InformationLayout } from './InformationLayout';
import { selectCurrentPlay, selectDraw } from '../../selectors';

export const InformationContainer = () => {
	const currentPlay = useSelector(selectCurrentPlay);
	const draw = useSelector(selectDraw);

	return <InformationLayout currentPlay={currentPlay} draw={draw} />;
};
