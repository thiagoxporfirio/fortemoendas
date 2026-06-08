import React from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"

const links = [
	{ to: "/", label: "Início" },
	{ to: "/about", label: "Sobre" },
	{ to: "/contact", label: "Contato" }
]

export default function Nav() {
	const { pathname } = useLocation()

	return (
		<nav className="flex items-center gap-7">
			{links.map(link => {
				const active = pathname === link.to
				return (
					<Link
						key={link.to}
						to={link.to}
						className={`relative font-display font-bold text-sm uppercase tracking-widest transition-colors pb-1 ${
							active ? "text-brand-green" : "text-white/60 hover:text-white"
						}`}
					>
						{link.label}
						{active && (
							<motion.span
								className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-brand-green rounded-full"
								layoutId="nav-underline"
								transition={{ type: "spring", stiffness: 400, damping: 30 }}
							/>
						)}
					</Link>
				)
			})}
		</nav>
	)
}
