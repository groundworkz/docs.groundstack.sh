import React from "react"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"

export const HomepageHeader = () => {
	const { siteConfig } = useDocusaurusContext()

	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<h1 className={clsx(`hero__title`, styles.white)}>
					{siteConfig.title}
				</h1>
				<p className={clsx(`hero__subtitle`, styles.white)}>
					{siteConfig.tagline}
				</p>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/overview"
					>
						Get Started
					</Link>
				</div>
			</div>
		</header>
	)
}
