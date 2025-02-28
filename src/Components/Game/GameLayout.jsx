import { FieldContainer } from "../Field/FieldContainer"

import { InformationContainer } from "../Information/InformationContainer"
import styles from './Game.module.css'

export const GameLayout = ({ currentPlay, handleFieldClick, field, isGameEnded }) => {
	const iSFieldDisabled = isGameEnded;
	return (
		<div className={styles.container}>
			<InformationContainer
				currentPlay={currentPlay}
			/>

			<FieldContainer
				field={field}
				handleFieldClick={handleFieldClick}
				isDisabled={iSFieldDisabled}
			/>

			<button className={styles.btnPlay}>Начать игру</button>
		</div>
	)
}
