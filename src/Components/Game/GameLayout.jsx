import { FieldContainer } from "../Field/FieldContainer"
import PropTypes from 'prop-types';
import { InformationContainer } from "../Information/InformationContainer"
import styles from './Game.module.css'

export const GameLayout = ({
	currentPlay,
	handleFieldClick,
	field,
	isGameEnded,
	handleBtnClickPlay,
	draw

}) => {

	const iSFieldDisabled = isGameEnded;
	return (
		<div className={styles.container}>
			<InformationContainer
				currentPlay={currentPlay}
				iSFieldDisabled={iSFieldDisabled}
				draw={draw}
			/>

			<FieldContainer
				field={field}
				handleFieldClick={handleFieldClick}
				isDisabled={iSFieldDisabled}
			/>

			<button className={styles.btnPlay} onClick={handleBtnClickPlay}>{isGameEnded ? "Начать игру" : "Начать сначала"}</button>
		</div>
	)
}
GameLayout.propTypes = {
	currentPlay: PropTypes.string,
	handleFieldClick: PropTypes.func.isRequired,
	field: PropTypes.array.isRequired,
	isGameEnded: PropTypes.bool,
	handleBtnClickPlay: PropTypes.func.isRequired,
	draw: PropTypes.string
};
