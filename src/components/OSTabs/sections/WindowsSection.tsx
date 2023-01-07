import { IndividualOsProp } from "@site/src/types"
import React from "react"

export const WindowsSection = ({ texts, command }: IndividualOsProp) => {
	return (
		<>
			<p>{texts.topText}</p>
			<p>{command}</p>
			<p>{texts.bottomText}</p>
		</>
	)
}
