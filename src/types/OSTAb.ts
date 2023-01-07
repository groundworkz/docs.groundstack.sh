export interface CommandObject {
	linux?: string
	windows?: string
	mac?: string
}

export interface TextObject {
	linux?: DescriptionTexts
	windows?: DescriptionTexts
	mac?: DescriptionTexts
}

export interface DescriptionTexts {
	topText?: string
	bottomText?: string
}

export interface IndividualOsProp {
	texts: DescriptionTexts
	command: string
}
