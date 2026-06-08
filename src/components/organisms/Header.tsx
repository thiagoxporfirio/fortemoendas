import React, { useState, useEffect } from "react"
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
	const [scrolled, setScrolled] = useState(false)
	const { pathname } = useLocation()

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20)
		window.addEventListener("scroll", onScroll, { passive: true })
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	return (
		<header
			className={`sticky top-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-brand-soil/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.4)]"
					: "bg-brand-soil"
			}`}
		>
			{/* Faixa verde topo */}
			<div className="h-[3px] bg-gradient-to-r from-brand-dark via-brand-green to-brand-dark" />

			<div className="container mx-auto flex items-center justify-between py-3">
				{/* Logo */}
				<Link to="/" className="flex items-center gap-3 group">
					<div className="relative">
						<motion.img
							src="/images/fortelogonotbg.png"
							alt="Forte Moendas logo"
							className="h-14 w-auto"
							whileHover={{ scale: 1.04 }}
							transition={{ type: "spring", stiffness: 400, damping: 20 }}
						/>
					</div>
					<div className="hidden sm:flex flex-col">
						<span className="text-white font-display text-xl font-bold leading-none tracking-tight">
							FORTE MOENDAS
						</span>
						<span className="tech-label text-brand-green/90 mt-0.5">
							S/A — Sertãozinho/SP
						</span>
					</div>
				</Link>

				{/* Desktop nav */}
				<div className="hidden md:flex items-center gap-8">
					<Nav />
					<Link
						to="/contact"
						className="tech-label bg-brand-green text-white px-4 py-2 font-bold transition-all hover:bg-brand-dark hover:scale-105"
					>
						Fale conosco
					</Link>
				</div>

				{/* Hamburger — mobile */}
				<button
					className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded focus:outline-none"
					onClick={() => setOpen(prev => !prev)}
					aria-label="Menu"
				>
					<span className={`block w-6 h-[2px] bg-brand-green transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
					<span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
					<span className={`block w-6 h-[2px] bg-brand-green transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
				</button>
			</div>

			{/* Mobile menu */}
			<AnimatePresence>
				{open && (
					<motion.div
						key="mobile-menu"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.25, ease: "easeInOut" }}
						className="md:hidden overflow-hidden border-t border-white/10"
					>
						<nav className="container mx-auto flex flex-col py-4 gap-1">
							{links.map(link => {
								const active = pathname === link.to
								return (
									<Link
										key={link.to}
										to={link.to}
										onClick={() => setOpen(false)}
										className={`px-4 py-3 font-display font-bold text-lg uppercase tracking-wide transition-colors ${
											active
												? "text-brand-green"
												: "text-white/70 hover:text-white"
										}`}
									>
										{link.label}
									</Link>
								)
							})}
							<Link
								to="/contact"
								onClick={() => setOpen(false)}
								className="mt-2 mx-4 py-3 text-center tech-label bg-brand-green text-white font-bold"
							>
								Fale conosco
							</Link>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	)
}
