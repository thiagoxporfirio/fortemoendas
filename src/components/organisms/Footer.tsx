import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "../../lib/motion"

const year = new Date().getFullYear()

export default function Footer() {
	return (
		<footer className="bg-brand-soil border-t border-white/10">
			{/* Faixa harvest */}
			<div className="h-[3px] bg-gradient-to-r from-transparent via-brand-green to-transparent" />

			<motion.div
				className="container mx-auto py-16"
				variants={staggerContainer}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				<div className="grid md:grid-cols-3 gap-12">
					{/* Marca */}
					<motion.div variants={fadeUp}>
						<img
							src="/images/fortelogonotbg.png"
							alt="Forte Moendas"
							className="h-16 w-auto mb-4"
						/>
						<p className="font-display font-bold text-xl text-white uppercase tracking-wide">
							Forte Moendas S/A
						</p>
						<p className="tech-label text-brand-green/70 mt-1">
							Forte Tecnologia em Moendas
						</p>
						<p className="text-white/40 text-xs mt-4 leading-relaxed">
							Fabricação, engenharia e manutenção de moendas<br />
							para o setor sucroenergético brasileiro.
						</p>
					</motion.div>

					{/* Navegação */}
					<motion.div variants={fadeUp}>
						<p className="tech-label text-brand-green mb-5 block">Navegação</p>
						<ul className="space-y-3">
							{[
								{ to: "/", label: "Início" },
								{ to: "/about", label: "Sobre a empresa" },
								{ to: "/contact", label: "Contato" },
								{ to: "/#servicos", label: "Serviços" }
							].map(l => (
								<li key={l.to}>
									<Link
										to={l.to}
										className="text-white/50 text-sm hover:text-brand-green transition-colors font-body"
									>
										{l.label}
									</Link>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Contato */}
					<motion.div variants={fadeUp}>
						<p className="tech-label text-brand-green mb-5 block">Localização & Contato</p>
						<address className="not-italic text-sm text-white/50 leading-relaxed space-y-2">
							<p>Av. Mauro Albertani, 1096</p>
							<p>Sertãozinho, São Paulo — Brasil</p>
							<p>CEP 14176-123</p>
						</address>
						<a
							href="mailto:contato@fortemoendas.com.br"
							className="inline-block mt-4 text-sm text-brand-green hover:text-white transition-colors"
						>
							contato@fortemoendas.com.br
						</a>
						<a
							href="https://maps.google.com/?q=Avenida+Mauro+Albertani+1096+Sertaozinho+SP"
							target="_blank"
							rel="noopener noreferrer"
							className="block mt-2 text-xs text-white/30 hover:text-white/60 transition-colors"
						>
							Ver no Google Maps →
						</a>
					</motion.div>
				</div>

				{/* Barra inferior */}
				<motion.div
					variants={fadeUp}
					className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3"
				>
					<p className="tech-label text-white/25">
						© {year} Forte Moendas S/A — Todos os direitos reservados
					</p>
					<p className="tech-label text-white/20">
						Sertãozinho/SP · Brasil
					</p>
				</motion.div>
			</motion.div>
		</footer>
	)
}
