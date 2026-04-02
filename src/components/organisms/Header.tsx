import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import Nav from "../molecules/Nav"

const links = [
	{ to: "/", label: "Início" },
	{ to: "/about", label: "Sobre" },
	{ to: "/contact", label: "Contato" }
]

export default function Header() {
	const [open, setOpen] = useState(false)
	const { pathname } = useLocation()

	return (
		<motion.header
			className="bg-brand-green shadow-lg relative z-50"
			initial={{ y: -80, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
		>
			<div className="container mx-auto flex items-center justify-between py-3">
				{/* Logo */}
				<Link to="/" className="flex items-center gap-3 group">
					<motion.img
						src="/images/fortelogonotbg.png"
						alt="Forte Moendas logo"
						className="h-20 w-auto"
						whileHover={{ rotate: -5, scale: 1.05 }}
						transition={{ type: "spring", stiffness: 300 }}
					/>
					<span className="hidden sm:block text-white text-2xl font-bold tracking-wide">
						Forte Moendas
					</span>
				</Link>

				{/* Desktop nav */}
				<div className="hidden md:block">
					<Nav />
				</div>

				{/* Hamburger button — mobile only */}
				<button
					className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg focus:outline-none"
					onClick={() => setOpen(prev => !prev)}
					aria-label="Menu"
				>
					<span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
					<span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
					<span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
				</button>
			</div>

			{/* Mobile dropdown menu */}
			<AnimatePresence>
				{open && (
					<motion.div
						key="mobile-menu"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.25, ease: "easeInOut" }}
						className="md:hidden overflow-hidden bg-brand-dark"
					>
						<nav className="container mx-auto flex flex-col py-4 gap-1">
							{links.map(link => {
								const active = pathname === link.to
								return (
									<Link
										key={link.to}
										to={link.to}
										onClick={() => setOpen(false)}
										className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
											active
												? "bg-brand-green text-white"
												: "text-green-200 hover:bg-brand-green hover:text-white"
										}`}
									>
										{link.label}
									</Link>
								)
							})}
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	)
}
