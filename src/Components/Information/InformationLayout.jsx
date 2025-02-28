import styles from './Information.module.css'


export const InformationLayout = ({ currentPlay }) => {
	return (
		<>
			<p className={styles.textMove}>
				Ходят: {currentPlay === "X" ? "крестики" : "нолики"}
			</p>
			<p className={styles.GameProcess}>Игра еще не начата</p>
		</>
	)
}
