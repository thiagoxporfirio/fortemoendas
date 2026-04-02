import React from "react"
import { motion } from "framer-motion"
import { staggerContainer, fadeUp, cardItem } from "../lib/motion"

export default function Contact() {
	return (
		<div>
			{/* Header banner */}
			<section
				className="py-20"
				style={{
					background:
						"linear-gradient(135deg, #075C2C 0%, #0D8040 60%, #10994D 100%)"
				}}
			>
				<motion.div
					className="container mx-auto"
					variants={staggerContainer}
					initial="hidden"
					animate="visible"
				>
					<motion.p
						variants={fadeUp}
						className="text-green-300 text-xs font-bold uppercase tracking-[0.2em] mb-2"
					>
						Fale conosco
					</motion.p>
					<motion.h2
						variants={fadeUp}
						className="text-4xl font-extrabold text-white tracking-tight"
					>
						Contato
					</motion.h2>
					<motion.p variants={fadeUp} className="mt-3 text-green-100 max-w-xl">
						Estamos prontos para atender sua usina. Entre em contato e fale com
						um especialista.
					</motion.p>
				</motion.div>
			</section>

			{/* Cards */}
			<section className="py-16 container mx-auto">
				<motion.div
					className="grid md:grid-cols-2 gap-8"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-60px" }}
				>
					<motion.div
						variants={cardItem}
						whileHover={{ y: -4 }}
						className="bg-brand-light rounded-xl p-6 border-l-4 border-brand-green"
					>
						<h3 className="font-bold text-brand-dark text-lg mb-3">Localização</h3>
						<address className="text-gray-700 text-sm not-italic leading-relaxed">
							Avenida Mauro Albertani, 1096<br />
							Sertãozinho, São Paulo<br />
							CEP 14176-123 — Brasil
						</address>
						<a
							href="https://maps.google.com/?q=Avenida+Mauro+Albertani+1096+Sertaozinho+SP"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block mt-3 text-brand-green text-sm font-medium underline"
						>
							Ver no Google Maps →
						</a>
					</motion.div>

					<motion.div
						variants={cardItem}
						whileHover={{ y: -4 }}
						className="bg-brand-light rounded-xl p-6 border-l-4 border-brand-green"
					>
						<h3 className="font-bold text-brand-dark text-lg mb-3">E-mail</h3>
						<a
							href="mailto:contato@fortemoendas.com.br"
							className="text-brand-green font-medium underline text-sm"
						>
							contato@fortemoendas.com.br
						</a>
						<h3 className="font-bold text-brand-dark text-lg mt-5 mb-1">Setor</h3>
						<p className="text-gray-700 text-sm">
							Fabricação de máquinas e equipamentos
						</p>
					</motion.div>
				</motion.div>
			</section>
		</div>
	)
}

