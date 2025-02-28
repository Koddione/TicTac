import styles from './Field.module.css'
import { SubFieldContainer } from '../SubField/SubFieldContainer'
import PropTypes from 'prop-types'

export const FieldLayout = ({ handleFieldClick, field, isDisabled }) => {

	return (
		<div className={styles.ticTacField}>
			<SubFieldContainer
				handleFieldClick={handleFieldClick}
				field={field}
				isDisabled={isDisabled}
			></SubFieldContainer>
		</div>


	)

}

FieldLayout.propTypes = {
	handleFieldClick: PropTypes.func.isRequired,
	field: PropTypes.array,
	isDisabled: PropTypes.bool,
}
