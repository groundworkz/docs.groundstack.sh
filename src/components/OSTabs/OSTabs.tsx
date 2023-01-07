import React, { useState } from "react"
import { LinuxSection, MacSection, WindowsSection } from "./sections"
import styles from "./styles.module.css"
import { CommandObject, TextObject } from "@site/src/types"

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
				{tabOpen === "Linux" && (
					<LinuxSection texts={text.linux} command={commands.linux} />
				)}
				{tabOpen === "Windows" && (
					<WindowsSection texts={text.windows} command={commands.windows} />
				)}
				{tabOpen === "Mac" && (
					<MacSection texts={text.mac} command={commands.mac} />
				)}
			</div>
		</>
	)
}
