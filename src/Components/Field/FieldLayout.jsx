import styles from './Field.module.css'
import { SubFieldContainer } from '../SubField/SubFieldContainer'
import { useState } from 'react'

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
