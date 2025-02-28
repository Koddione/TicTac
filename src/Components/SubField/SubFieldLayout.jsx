import styles from './SubField.module.css';
import PropTypes from 'prop-types';

export const SubFieldLayout = ({ border, id, handleFieldClick, children, disabled }) => {
	const handleClick = () => {
		if (disabled) return;
		handleFieldClick(id);
	}

	return (
		<div
			id={id}
			onClick={handleClick}
			className={`${styles.subField} ${styles[border]}`}
			style={{
				pointerEvents: disabled ? 'none' : 'auto',
				opacity: disabled ? 0.5 : 1,
				cursor: disabled ? 'not-allowed' : 'pointer',
			}}
		>
			{children}
		</div>
	);
};

SubFieldLayout.propTypes = {
	border: PropTypes.string,
	children: PropTypes.node,
	id: PropTypes.number.isRequired,
	handleFieldClick: PropTypes.func.isRequired,
};
