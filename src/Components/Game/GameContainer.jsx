import { useState } from "react"
import { GameLayout } from "./GameLayout"

export const GameContainer = () => {

	const [currentPlay, setCurrentPlay] = useState("X");
	const [isGameEnded, setIsGameEnded] = useState(true);
	const [isDraw, setIsDraw] = useState(false);
	const [selectedId, setSelectedId] = useState(null);
	const [field, setField] = useState(["", "", "", "", "", "", "", "", ""])

	const handleFieldClick = (id) => {
		setSelectedId(id);

		const newField = [...field]

		if (newField[id] === "") {
			newField[id] = currentPlay;
			setField(newField);
			setCurrentPlay(currentPlay === "X" ? "0" : "X");
		}

	}
	console.log("1");
	return (

		<GameLayout

			currentPlay={currentPlay}
			field={field}
			handleFieldClick={handleFieldClick}
			isGameEnded={isGameEnded}

		/>
	)
}
