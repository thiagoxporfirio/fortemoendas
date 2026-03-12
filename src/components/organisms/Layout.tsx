import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
	const location = useLocation()

	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-grow">
				<AnimatePresence mode="wait">
					<motion.div
						key={location.pathname}
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -8 }}
						transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
					>
						<Outlet />
					</motion.div>
				</AnimatePresence>
			</main>
			<Footer />
		</div>
	)
}
