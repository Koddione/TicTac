import { SubFieldLayout } from "./SubFieldLayout";
import PropTypes from 'prop-types';

const getBorder = (index) => {
	switch (index) {
		case 0:
		case 1:
			return 'right';
		case 3:
		case 4:
		case 6:
		case 7:
			return "rightTop";
		case 5:
		case 8:
			return "top";
		default:
			return ""
	}
};

export const SubFieldContainer = ({ handleFieldClick, field, isDisabled }) => {
	return (
		<>
			{field.map((value, index) => (
				<SubFieldLayout
					key={index}
					handleFieldClick={handleFieldClick}
					id={index}
					border={getBorder(index)}
					disabled={isDisabled}
				>{value}</SubFieldLayout>
			))}


		</>
	);
};

SubFieldContainer.propTypes = {
	handleFieldClick: PropTypes.func.isRequired,
	field: PropTypes.array.isRequired,
	isDisabled: PropTypes.bool
}
