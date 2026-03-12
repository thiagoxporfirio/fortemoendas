import React from "react"
import { motion } from "framer-motion"
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from "../lib/motion"

export default function About() {
	return (
		<div>
			{/* Hero banner */}
			<section
				className="py-20 overflow-hidden"
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
						Quem somos
					</motion.p>
					<motion.h2
						variants={fadeUp}
						className="text-4xl font-extrabold text-white tracking-tight"
					>
						Forte Moendas S/A
					</motion.h2>
					<motion.p
						variants={fadeUp}
						className="mt-3 text-green-100 text-lg max-w-2xl"
					>
						Forte Tecnologia em Moendas — 24 horas ao lado da sua usina.
					</motion.p>
				</motion.div>
			</section>

			{/* Content */}
			<section className="py-16 container mx-auto">
				<div className="grid md:grid-cols-2 gap-12">
					<motion.div
						variants={fadeLeft}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-60px" }}
					>
						<h3 className="text-xl font-bold text-brand-green mb-3">Visão Geral</h3>
						<p className="text-gray-700 leading-relaxed">
							A Forte Moendas S/A é uma empresa brasileira especializada em
							soluções industriais para o setor sucroenergético, com atuação em
							engenharia, fabricação, montagem, reforma e manutenção de moendas
							para processamento de cana-de-açúcar.
						</p>
						<p className="text-gray-700 leading-relaxed mt-4">
							Com décadas de experiência no setor, a empresa desenvolve e executa
							projetos voltados à confiabilidade operacional, eficiência produtiva
							e aumento de performance dos equipamentos de moagem.
						</p>
						<p className="text-gray-700 leading-relaxed mt-4">
							Reconhecida pela excelência técnica e profundo conhecimento em
							sistemas de moagem, a Forte Moendas atua em parceria com usinas e
							empresas do setor, entregando soluções industriais robustas,
							seguras e orientadas para resultados.
						</p>
					</motion.div>

					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-60px" }}
						className="flex flex-col gap-6"
					>
						<motion.div
							variants={fadeRight}
							className="bg-brand-light rounded-xl p-6 border-l-4 border-brand-green"
						>
							<h4 className="font-semibold text-brand-dark mb-1">Setor</h4>
							<p className="text-gray-700 text-sm">
								Fabricação e manutenção de máquinas e equipamentos
							</p>
						</motion.div>

						<motion.div
							variants={fadeRight}
							className="bg-brand-light rounded-xl p-6 border-l-4 border-brand-green"
						>
							<h4 className="font-semibold text-brand-dark mb-1">Sede</h4>
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
					</motion.div>
				</div>
			</section>

			{/* Directors Section */}
			<section className="py-10 bg-brand-light">
				<div className="container mx-auto">
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-60px" }}
					>
						<motion.p
							variants={fadeUp}
							className="text-brand-green text-xs font-bold uppercase tracking-[0.2em] mb-1"
						>
							Liderança
						</motion.p>
						<motion.h3
							variants={fadeUp}
							className="text-2xl font-extrabold text-brand-dark mb-6"
						>
							Diretoria
						</motion.h3>

						<motion.div
							variants={fadeUp}
							className="flex flex-col sm:flex-row gap-8 max-w-3xl items-start"
						>
							{/* Portrait photo */}
							<div className="flex-shrink-0 mx-auto sm:mx-0">
								<div className="border-4 border-brand-green rounded-xl overflow-hidden shadow-lg w-44">
									<img
										src="/images/diretorfoto.png"
										alt="Marcos Porfirio — Diretor Industrial e Fundador"
										className="w-full block"
									/>
								</div>
							</div>

							{/* Info card */}
							<div className="bg-white rounded-xl shadow-md p-6 flex-1">
								<span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green bg-brand-light px-3 py-1 rounded-full mb-3">
									Fundador &amp; Diretor Industrial
								</span>

								<h4 className="text-lg font-extrabold text-brand-dark mb-3">Marcos Porfirio</h4>

								<p className="text-sm text-gray-700 leading-relaxed mb-4">
									Diretor Industrial e Fundador da Forte Moendas S/A, com mais de três décadas de
									experiência no setor sucroenergético, reconhecido como referência técnica nacional
									em sistemas de moagem.
								</p>

								<ul className="space-y-2">
									{[
										"Responsável técnico e estratégico pela companhia — engenharia, qualidade, montagem, manutenção e segurança.",
										"Conduz negociações e parcerias de longo prazo com usinas e fornecedores do setor.",
										"Lidera equipes de alta performance, promovendo cultura de segurança e excelência operacional.",
									].map((item, i) => (
										<li key={i} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
											<span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-green" />
											{item}
										</li>
									))}
								</ul>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>
		</div>
	)
}
