import styles from './Information.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ currentPlay, draw }) => {
	return (
		<>
			<p className={styles.textMove}>
				Ходят: {currentPlay === 'X' ? 'крестики' : 'нолики'}
			</p>
			<p className={styles.GameProcess}>{draw}</p>
		</>
	);
};

InformationLayout.propTypes = {
	currentPlay: PropTypes.string,
	draw: PropTypes.string,
};
