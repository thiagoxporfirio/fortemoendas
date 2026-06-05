import React from "react"
import { motion } from "framer-motion"
import { staggerContainer, fadeUp, cardItem } from "../lib/motion"
import Seo from "../components/seo/Seo"
import { ORGANIZATION_SCHEMA, SITE_URL } from "../lib/seo"

export default function Contact() {
	const pageTitle = "Contato | Forte Moendas S/A"
	const pageDescription =
		"Entre em contato com a Forte Moendas S/A em Sertãozinho/SP para projetos, fabricação, reforma e manutenção de moendas."

	const webpageSchema = {
		"@context": "https://schema.org",
		"@type": "ContactPage",
		name: pageTitle,
		url: `${SITE_URL}/contact`,
		description: pageDescription
	}

	return (
		<div>
			<Seo
				title={pageTitle}
				description={pageDescription}
				path="/contact"
				jsonLd={[ORGANIZATION_SCHEMA, webpageSchema]}
			/>

			{/* Header banner */}
			<section className="relative py-28 overflow-hidden bg-brand-soil grain-overlay">
				<div
					className="absolute inset-0 opacity-[0.04]"
					style={{
						backgroundImage:
							"linear-gradient(rgba(13,128,64,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(13,128,64,.8) 1px, transparent 1px)",
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
						Fale conosco
					</motion.span>
					<motion.h1
						variants={fadeUp}
						className="font-display text-[clamp(3rem,6vw,5.5rem)] font-black text-white uppercase leading-[0.88]"
					>
						Contato
					</motion.h1>
					<motion.p
						variants={fadeUp}
						className="mt-6 text-white/60 max-w-xl leading-relaxed"
					>
						Estamos prontos para atender sua usina. Entre em contato e fale com
						um especialista.
					</motion.p>
				</motion.div>
			</section>

			{/* Cards de contato */}
			<section className="py-20 bg-brand-cream">
				<div className="container mx-auto">
					<motion.div
						className="grid md:grid-cols-3 gap-6 mb-12"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-60px" }}
					>
						{/* Localização */}
						<motion.div
							variants={cardItem}
							className="bg-white p-8 border-t-4 border-brand-green shadow-sm"
						>
							<div className="w-12 h-12 flex items-center justify-center border border-brand-green/30 text-brand-green mb-6">
								<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
									<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
								</svg>
							</div>
							<h3 className="font-display font-black text-brand-soil uppercase text-xl mb-4">
								Localização
							</h3>
							<address className="text-brand-soil/65 text-sm not-italic leading-relaxed space-y-1">
								<p>Avenida Mauro Albertani, 1096</p>
								<p>Sertãozinho, São Paulo</p>
								<p>CEP 14176-123 — Brasil</p>
							</address>
						</motion.div>

						{/* E-mail */}
						<motion.div
							variants={cardItem}
							className="bg-white p-8 border-t-4 border-brand-green shadow-sm"
						>
							<div className="w-12 h-12 flex items-center justify-center border border-brand-green/30 text-brand-green mb-6">
								<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
								</svg>
							</div>
							<h3 className="font-display font-black text-brand-soil uppercase text-xl mb-4">
								E-mail
							</h3>
							<a
								href="mailto:contato@fortemoendas.com.br"
								className="text-brand-green font-medium text-sm hover:text-brand-dark transition-colors break-all"
							>
								contato@fortemoendas.com.br
							</a>
						</motion.div>

						{/* Disponibilidade */}
						<motion.div
							variants={cardItem}
							className="bg-brand-soil p-8 border-t-4 border-brand-green shadow-sm"
						>
							<div className="w-12 h-12 flex items-center justify-center border border-brand-green/30 text-brand-green mb-6">
								<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 className="font-display font-black text-white uppercase text-xl mb-4">
								Disponibilidade
							</h3>
							<p className="font-display text-5xl font-black text-brand-green">24h</p>
							<p className="text-white/50 text-sm mt-2">Suporte técnico contínuo</p>
							<p className="text-white/40 text-xs mt-4 leading-relaxed">
								Fabricação e manutenção de máquinas e equipamentos para o setor sucroenergético.
							</p>
						</motion.div>
					</motion.div>

					{/* Mapa */}
					<motion.div
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-60px" }}
						className="relative overflow-hidden border-t-4 border-brand-green shadow-sm"
					>
						<iframe
							title="Forte Moendas — localização"
							src="https://www.google.com/maps?q=Av.+Mauro+Albertani,+1096,+Sertãozinho,+SP,+14176-123&output=embed&z=16"
							width="100%"
							height="420"
							style={{ border: 0, display: "block" }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
						{/* Badge sobreposto */}
						<div className="absolute bottom-4 left-4 bg-brand-soil/90 backdrop-blur-sm text-white px-4 py-2 flex items-center gap-2">
							<span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
							<span className="tech-label text-white/80">Forte Moendas S/A · Sertãozinho/SP</span>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	)
}
