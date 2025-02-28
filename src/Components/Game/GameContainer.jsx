import { useState } from "react"
import { GameLayout } from "./GameLayout"

export const GameContainer = () => {

	const [currentPlay, setCurrentPlay] = useState("X");
	const [isGameEnded, setIsGameEnded] = useState(true);
	const [draw, setDraw] = useState("Игра еще не начата");
	const [field, setField] = useState(["", "", "", "", "", "", "", "", ""])

	const WIN_PATTERNS = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
	];

	const checkWinner = (field) => {
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (field[a] && field[a] === field[b] && field[a] === field[c]) {
				return field[a];
			}
		}

	}
	const handleFieldClick = (id) => {

		const newField = [...field]

		if (newField[id] === "") {
			newField[id] = currentPlay;
			setField(newField);
			setCurrentPlay(currentPlay === "X" ? "0" : "X");
		}


		const winner = checkWinner(newField)
		if (winner) {
			setIsGameEnded(true);
			winner === "X" ? setDraw("Победа крестиков") : setDraw("Победа ноликов");

			return
		}
		if (!newField.includes("") && !winner) {
			setIsGameEnded(true);
			setDraw("Ничья")
			setField(["", "", "", "", "", "", "", "", ""]);
			return
		}

	}

	const handleBtnClickPlay = () => {
		if (isGameEnded) {
			setIsGameEnded(false)
			setField(["", "", "", "", "", "", "", "", ""]);
			setDraw("Процесс игры...")

		}
		else {
			setIsGameEnded(true)
			setField(["", "", "", "", "", "", "", "", ""]);
			setDraw("Игра еще не начата")
		}
	}

	return (

		<GameLayout
			currentPlay={currentPlay}
			field={field}
			handleFieldClick={handleFieldClick}
			isGameEnded={isGameEnded}
			handleBtnClickPlay={handleBtnClickPlay}
			draw={draw}

		/>
	)
}

