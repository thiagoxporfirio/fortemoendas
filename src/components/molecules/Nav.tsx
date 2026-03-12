import React from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { staggerContainer, fadeUp } from "../../lib/motion"

const links = [
	{ to: "/", label: "Início" },
	{ to: "/about", label: "Sobre" },
	{ to: "/contact", label: "Contato" }
]

export default function Nav() {
	const { pathname } = useLocation()

	return (
		<motion.nav
			className="flex items-center gap-6"
			variants={staggerContainer}
			initial="hidden"
			animate="visible"
		>
			{links.map(link => {
				const active = pathname === link.to
				return (
					<motion.div key={link.to} variants={fadeUp}>
						<Link
							to={link.to}
							className={`relative text-sm font-medium transition-colors ${
								active ? "text-white" : "text-green-200 hover:text-white"
							}`}
						>
							{link.label}
							{active && (
								<motion.span
									className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
									layoutId="nav-underline"
								/>
							)}
						</Link>
					</motion.div>
				)
			})}
		</motion.nav>
	)
}
