import React from "react"
import Hero from "../components/organisms/Hero"
import WhatWeDo from "../components/organisms/WhatWeDo"
import Videos from "../components/organisms/Videos"
import Services from "../components/organisms/Services"

export default function Home() {
	return (
		<div>
			<Hero />
			<WhatWeDo />
			<Videos />
			<Services />
		</div>
	)
}
