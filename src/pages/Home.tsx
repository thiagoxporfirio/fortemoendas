import React from "react"
import Hero from "../components/organisms/Hero"
import WhatWeDo from "../components/organisms/WhatWeDo"
import Videos from "../components/organisms/Videos"
import Services from "../components/organisms/Services"
import Seo from "../components/seo/Seo"
import { ORGANIZATION_SCHEMA, SITE_URL } from "../lib/seo"

export default function Home() {
	const pageTitle = "Forte Moendas S/A | Tecnologia em Moendas para Usinas"
	const pageDescription =
		"Soluções industriais para usinas: engenharia, fabricação, montagem, reforma e manutenção de moendas com suporte técnico 24h."

	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Forte Moendas S/A",
		url: SITE_URL
	}

	const webpageSchema = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: pageTitle,
		url: SITE_URL,
		description: pageDescription
	}

	return (
		<div>
			<Seo
				title={pageTitle}
				description={pageDescription}
				path="/"
				jsonLd={[ORGANIZATION_SCHEMA, websiteSchema, webpageSchema]}
			/>
			<Hero />
			<WhatWeDo />
			<Videos />
			<Services />
		</div>
	)
}
