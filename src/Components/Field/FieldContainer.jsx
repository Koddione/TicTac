import { FieldLayout } from "./FieldLayout"

export const FieldContainer = ({ handleFieldClick, field, isDisabled }) => {
	return <FieldLayout
		field={field}
		handleFieldClick={handleFieldClick}
		isDisabled={isDisabled}
	/>
}
