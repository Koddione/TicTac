import { useState } from "react"
import { InformationLayout } from "./InformationLayout"

export const InformationContainer = ({ currentPlay, iSFieldDisabled, draw }) => {

	return <InformationLayout
		currentPlay={currentPlay}
		iSFieldDisabled={iSFieldDisabled}
		draw={draw}
	/>
}
