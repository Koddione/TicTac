import styles from './Information.module.css'


export const InformationLayout = ({ currentPlay, iSFieldDisabled, draw }) => {
	return (
		<>
			<p className={styles.textMove}>
				Ходят: {currentPlay === "X" ? "крестики" : "нолики"}
			</p>
			<p className={styles.GameProcess}>{draw}</p>
		</>
	)
}
