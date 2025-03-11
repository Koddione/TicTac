import { FieldContainer } from '../Field/FieldContainer';
import PropTypes from 'prop-types';
import { InformationContainer } from '../Information/InformationContainer';
import styles from './Game.module.css';

export const GameLayout = ({ handleBtnClickPlay, isGameEnded }) => {
	return (
		<div className={styles.container}>
			<InformationContainer />

			<FieldContainer />

			<button className={styles.btnPlay} onClick={handleBtnClickPlay}>
				{isGameEnded ? 'Начать игру' : 'Начать сначала'}
			</button>
		</div>
	);
};
GameLayout.propTypes = {
	handleBtnClickPlay: PropTypes.func.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
};
