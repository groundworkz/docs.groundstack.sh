import React, { useState } from "react"
import { LinuxSection, MacSection, WindowsSection } from "./sections"
import styles from "./styles.module.css"

interface CommandObject {
	linux?: string
	windows?: string
	mac?: string
}

interface TextObject {
	linux?: {
		topText?: string
		bottomText?: string
	}
	windows?: {
		topText?: string
		bottomText?: string
	}
	mac?: {
		topText?: string
		bottomText?: string
	}
}

interface OSTabsProps {
	commands: CommandObject
	text: TextObject
}

export const OSTabs = ({ commands, text }: OSTabsProps) => {
	const [tabOpen, setTabOpen] = useState<string>("Linux")

	const selectOpenOSTab = (OS: string) => {
		setTabOpen(OS)
	}
	console.log(commands, text)

	return (
		<>
			<div className={styles.tabContainer}>
				<section
					className={tabOpen === "Linux" ? styles.labelActive : styles.label}
				>
					<span onClick={() => selectOpenOSTab("Linux")}>Linux</span>
				</section>
				<section
					className={tabOpen === "Windows" ? styles.labelActive : styles.label}
				>
					<span onClick={() => selectOpenOSTab("Windows")}>Windows</span>
				</section>
				<section
					className={tabOpen === "Mac" ? styles.labelActive : styles.label}
				>
					<span onClick={() => selectOpenOSTab("Mac")}>Mac</span>
				</section>
			</div>
			<div>
				{tabOpen === "Linux" && <LinuxSection />}
				{tabOpen === "Windows" && <WindowsSection />}
				{tabOpen === "Mac" && <MacSection />}
			</div>
		</>
	)
}
