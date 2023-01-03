import { FeatureItem } from "@site/src/types"
import clsx from "clsx"
import React from "react"
import styles from "./styles.module.css"

export const Feature = ({ title, Svg, description }: FeatureItem) => {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}
