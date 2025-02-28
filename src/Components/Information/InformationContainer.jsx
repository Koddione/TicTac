import { InformationLayout } from "./InformationLayout"
import PropTypes from 'prop-types';

export const InformationContainer = ({ currentPlay, iSFieldDisabled, draw }) => {

	return <InformationLayout
		currentPlay={currentPlay}
		iSFieldDisabled={iSFieldDisabled}
		draw={draw}
	/>
}
InformationContainer.propTypes = {
	currentPlay: PropTypes.string,
	iSFieldDisabled: PropTypes.bool,
	draw: PropTypes.string
}
