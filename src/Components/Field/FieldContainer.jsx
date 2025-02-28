import { FieldLayout } from "./FieldLayout"
import PropTypes from 'prop-types';

export const FieldContainer = ({ handleFieldClick, field, isDisabled }) => {
	return <FieldLayout
		field={field}
		handleFieldClick={handleFieldClick}
		isDisabled={isDisabled}
	/>
}

FieldContainer.propTypes = {
	handleFieldClick: PropTypes.func.isRequired,
	field: PropTypes.array.isRequired,
	isDisabled: PropTypes.bool
}
