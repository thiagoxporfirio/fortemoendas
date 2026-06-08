import React from "react"
import { motion } from "framer-motion"
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from "../lib/motion"
import Seo from "../components/seo/Seo"
import { ORGANIZATION_SCHEMA, SITE_URL } from "../lib/seo"

export default function About() {
	const pageTitle = "Sobre a Forte Moendas S/A | Engenharia e Experiência no Setor"
	const pageDescription =
		"Conheça a Forte Moendas S/A, empresa brasileira especializada em soluções industriais para o setor sucroenergético."

	const webpageSchema = {
		"@context": "https://schema.org",
		"@type": "AboutPage",
		name: pageTitle,
		url: `${SITE_URL}/about`,
		description: pageDescription
	}

	return (
		<div>
			<Seo
				title={pageTitle}
				description={pageDescription}
				path="/about"
				jsonLd={[ORGANIZATION_SCHEMA, webpageSchema]}
			/>

			{/* Hero banner */}
			<section className="relative py-28 overflow-hidden bg-brand-soil grain-overlay">
				{/* Grid técnico */}
				<div
					className="absolute inset-0 opacity-[0.04]"
					style={{
						backgroundImage:
							"linear-gradient(rgba(200,168,75,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,75,.8) 1px, transparent 1px)",
						backgroundSize: "60px 60px"
					}}
				/>

				<motion.div
					className="container mx-auto relative z-10"
					variants={staggerContainer}
					initial="hidden"
					animate="visible"
				>
					<motion.span
						variants={fadeUp}
						className="tech-label harvest-line text-brand-green block mb-5"
					>
						Quem somos
					</motion.span>
					<motion.h1
						variants={fadeUp}
						className="font-display text-[clamp(3rem,6vw,5.5rem)] font-black text-white uppercase leading-[0.88]"
					>
						Forte Moendas<br />
						<span className="text-brand-green">S/A</span>
					</motion.h1>
					<motion.p
						variants={fadeUp}
						className="mt-6 text-white/60 text-lg max-w-xl leading-relaxed"
					>
						Forte Tecnologia em Moendas — 24 horas ao lado da sua usina.
					</motion.p>
				</motion.div>
			</section>

			{/* Visão geral — fundo cream */}
			<section className="py-20 bg-brand-cream">
				<div className="container mx-auto">
					<div className="grid md:grid-cols-2 gap-16">
						<motion.div
							variants={fadeLeft}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-60px" }}
						>
							<span className="tech-label harvest-line text-brand-green block mb-4">Visão Geral</span>
							<h3 className="font-display text-3xl font-black text-brand-soil uppercase mb-6 leading-tight">
								Referência nacional<br />
								<span className="text-brand-green">em sistemas de moagem</span>
							</h3>
							<div className="space-y-4 text-brand-soil/70 leading-relaxed">
								<p>
									A Forte Moendas S/A é uma empresa brasileira especializada em
									soluções industriais para o setor sucroenergético, com atuação em
									engenharia, fabricação, montagem, reforma e manutenção de moendas
									para processamento de cana-de-açúcar.
								</p>
								<p>
									Com décadas de experiência no setor, a empresa desenvolve e executa
									projetos voltados à confiabilidade operacional, eficiência produtiva
									e aumento de performance dos equipamentos de moagem.
								</p>
								<p>
									Reconhecida pela excelência técnica e profundo conhecimento em
									sistemas de moagem, a Forte Moendas atua em parceria com usinas e
									empresas do setor, entregando soluções industriais robustas,
									seguras e orientadas para resultados.
								</p>
							</div>
						</motion.div>

						<motion.div
							variants={staggerContainer}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-60px" }}
							className="flex flex-col gap-4"
						>
							<motion.div
								variants={fadeRight}
								className="bg-white p-6 border-l-4 border-brand-green shadow-sm"
							>
								<h4 className="font-display font-bold text-brand-soil uppercase text-sm tracking-widest mb-2">
									Setor
								</h4>
								<p className="text-brand-soil/70 text-sm">
									Fabricação e manutenção de máquinas e equipamentos
								</p>
							</motion.div>

							<motion.div
								variants={fadeRight}
								className="bg-white p-6 border-l-4 border-brand-green shadow-sm"
							>
								<h4 className="font-display font-bold text-brand-soil uppercase text-sm tracking-widest mb-2">
									Sede
								</h4>
								<address className="text-brand-soil/70 text-sm not-italic leading-relaxed">
									Avenida Mauro Albertani, 1096<br />
									Sertãozinho, São Paulo<br />
									CEP 14176-123 — Brasil
								</address>
								<a
									href="https://maps.google.com/?q=Avenida+Mauro+Albertani+1096+Sertaozinho+SP"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block mt-3 text-brand-green text-sm font-medium hover:text-brand-dark transition-colors"
								>
									Ver no Google Maps →
								</a>
							</motion.div>

							<motion.div
								variants={fadeRight}
								className="bg-brand-soil p-6 border-l-4 border-brand-green shadow-sm"
							>
								<h4 className="font-display font-bold text-brand-green uppercase text-sm tracking-widest mb-2">
									Suporte
								</h4>
								<p className="font-display text-4xl font-black text-white">24h</p>
								<p className="text-white/50 text-sm mt-1">Atendimento técnico contínuo</p>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</section>

		</div>
	)
}
