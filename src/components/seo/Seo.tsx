import React from "react"
import { Helmet } from "react-helmet-async"
import { useLocation } from "react-router-dom"
import {
	SITE_NAME,
	SITE_URL,
	DEFAULT_DESCRIPTION,
	DEFAULT_OG_IMAGE,
	DEFAULT_TITLE
} from "../../lib/seo"

type JsonLdObject = Record<string, unknown>

interface SeoProps {
	title?: string
	description?: string
	path?: string
	image?: string
	type?: "website" | "article"
	noindex?: boolean
	jsonLd?: JsonLdObject | JsonLdObject[]
}

function toAbsoluteUrl(value: string) {
	if (value.startsWith("http://") || value.startsWith("https://")) {
		return value
	}

	return new URL(value, SITE_URL).toString()
}

export default function Seo({
	title = DEFAULT_TITLE,
	description = DEFAULT_DESCRIPTION,
	path,
	image = DEFAULT_OG_IMAGE,
	type = "website",
	noindex = false,
	jsonLd
}: SeoProps) {
	const location = useLocation()
	const canonicalUrl = toAbsoluteUrl(path ?? location.pathname)
	const ogImage = toAbsoluteUrl(image)
	const robots = noindex ? "noindex, nofollow" : "index, follow"
	const jsonLdList = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []

	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="robots" content={robots} />
			<link rel="canonical" href={canonicalUrl} />

			<meta property="og:locale" content="pt_BR" />
			<meta property="og:type" content={type} />
			<meta property="og:site_name" content={SITE_NAME} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:image" content={ogImage} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={ogImage} />

			{jsonLdList.map((item, index) => (
				<script
					key={`json-ld-${index}`}
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
				/>
			))}
		</Helmet>
	)
}

