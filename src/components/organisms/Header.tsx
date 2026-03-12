import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Nav from "../molecules/Nav"

export default function Header() {
	return (
		<motion.header
			className="bg-brand-green shadow-lg"
			initial={{ y: -80, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
		>
			<div className="container mx-auto flex items-center justify-between py-3">
				<Link to="/" className="flex items-center gap-4 group">
					<motion.img
						src="/images/fortelogonotbg.png"
						alt="Forte Moendas logo"
						className="h-16 w-auto"
						whileHover={{ rotate: -5, scale: 1.05 }}
						transition={{ type: "spring", stiffness: 300 }}
					/>
					<span className="text-white text-2xl font-bold tracking-wide">
						Forte Moendas
					</span>
				</Link>
				<Nav />
			</div>
		</motion.header>
	)
}
