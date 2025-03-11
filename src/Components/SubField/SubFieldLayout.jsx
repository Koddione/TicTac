import styles from './SubField.module.css';
import PropTypes from 'prop-types';

export const SubFieldLayout = ({
	border,
	id,
	children,
	handleClick,
	isGameEnded,
}) => {
	return (
		<div
			id={id}
			onClick={() => handleClick(id)}
			className={`${styles.subField} ${styles[border]}`}
			style={{
				pointerEvents: isGameEnded ? 'none' : 'auto',
				opacity: isGameEnded ? 0.5 : 1,
				cursor: isGameEnded ? 'not-allowed' : 'pointer',
			}}>
			{children}
		</div>
	);
};

SubFieldLayout.propTypes = {
	border: PropTypes.string,
	children: PropTypes.node,
	id: PropTypes.number.isRequired,
	handleClick: PropTypes.func.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
};
