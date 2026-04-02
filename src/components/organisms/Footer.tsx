import React from "react"
import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "../../lib/motion"

export default function Footer() {
	return (
		<motion.footer
			className="bg-brand-dark py-8"
			variants={staggerContainer}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
				<motion.img
					variants={fadeUp}
					src="/images/fortelogonotbg.png"
					alt="Forte Moendas"
					className="h-20 w-auto"
				/>
				<motion.div variants={fadeUp} className="text-center">
					<p className="text-green-100 text-sm font-semibold">Forte Moendas S/A</p>
					<p className="text-green-300 text-xs mt-1">
						© {new Date().getFullYear()} Todos os direitos reservados
					</p>
				</motion.div>
				<motion.div variants={fadeUp} className="text-right text-xs text-green-300 leading-relaxed">
					<p>Av. Mauro Albertani, 1096 — Sertãozinho/SP</p>
					<a
						href="mailto:contato@fortemoendas.com.br"
						className="text-green-200 hover:text-white transition-colors"
					>
						contato@fortemoendas.com.br
					</a>
				</motion.div>
			</div>
		</motion.footer>
	)
}

