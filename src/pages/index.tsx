import React from "react"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import { HomepageFeatures, HomepageHeader } from "../components"

const Home = () => {
	const { siteConfig } = useDocusaurusContext()
	return (
		<Layout
			title={siteConfig.title}
			description="Description will go into a meta tag in <head />"
		>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	)
}

export default Home
