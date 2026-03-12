import React from "react"
import { motion } from "framer-motion"
import { staggerContainer, fadeUp, fadeLeft, fadeRight, cardItem } from "../../lib/motion"

const products = [
	{
		title: "Moendas de Cana-de-Açúcar",
		desc: "Fabricação e reforma completa de moendas de alta capacidade, projetadas para máxima extração e durabilidade em operações contínuas.",
		img: "/images/fortecapa2.png",
		tag: "Fabricação & Reforma"
	},
	{
		title: "Cilindros de Moenda",
		desc: "Usinagem e recuperação de cilindros superiores, de entrada e saída, com revestimento e grooving conforme especificação técnica.",
		img: "/images/fortecapap.png",
		tag: "Usinagem"
	},
	{
		title: "Coroas e Pinhões",
		desc: "Fabricação de engrenagens industriais de grande porte com aço especial, garantindo precisão dimensional e alta resistência ao desgaste.",
		img: "/images/industria.jpg",
		tag: "Fabricação"
	}
]

const stats = [
	{ value: "24h", label: "Suporte técnico" },
	{ value: "+30", label: "Anos de experiência" },
	{ value: "100%", label: "Foco no setor sucroenergético" },
	{ value: "6", label: "Linhas de serviço" }
]

export default function WhatWeDo() {
	return (
		<section className="py-24 bg-white overflow-hidden">
			<div className="container mx-auto">
				{/* Header */}
				<motion.div
					className="mb-16 max-w-2xl"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-60px" }}
				>
					<motion.p
						variants={fadeUp}
						className="text-brand-green text-xs font-bold uppercase tracking-[0.2em] mb-3"
					>
						Nossa especialidade
					</motion.p>
					<motion.h2
						variants={fadeUp}
						className="text-4xl font-extrabold text-brand-dark leading-tight"
					>
						O que a Forte Moendas
						<br />
						<span className="text-brand-green">fabrica e reforma</span>
					</motion.h2>
					<motion.p
						variants={fadeUp}
						className="mt-4 text-gray-600 leading-relaxed"
					>
						Atuamos no setor{" "}
						<strong className="text-brand-dark">sucroenergético</strong>,
						entregando soluções técnicas completas para usinas de cana-de-açúcar
						— do projeto à entrega em campo.
					</motion.p>
				</motion.div>

				{/* Stats bar */}
				<motion.div
					className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 p-8 rounded-2xl"
					style={{
						background:
							"linear-gradient(135deg, #075C2C 0%, #0D8040 60%, #10994D 100%)"
					}}
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-60px" }}
				>
					{stats.map(s => (
						<motion.div
							key={s.label}
							variants={fadeUp}
							className="text-center"
						>
							<p className="text-4xl font-extrabold text-white">{s.value}</p>
							<p className="text-green-200 text-sm mt-1">{s.label}</p>
						</motion.div>
					))}
				</motion.div>

				{/* Featured row — imagem industrial + texto setor */}
				<div className="grid md:grid-cols-2 gap-12 items-center mb-24">
					<motion.div
						variants={fadeLeft}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-60px" }}
						className="relative"
					>
						<img
							src="/images/usinas-acucar.jpg"
							alt="Equipe técnica Forte Moendas em campo"
							className="rounded-2xl w-full h-80 object-cover shadow-xl"
						/>
						{/* Badge sobre a foto */}
						<div className="absolute bottom-4 left-4 bg-brand-green text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow">
							Setor Sucroenergético
						</div>
					</motion.div>

					<motion.div
						variants={fadeRight}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-60px" }}
					>
						<h3 className="text-2xl font-bold text-brand-dark mb-4">
							Presença completa na linha de moagem
						</h3>
						<p className="text-gray-600 leading-relaxed mb-4">
							A Forte Moendas S/A opera na fabricação e reforma de equipamentos
							críticos para o processamento de cana-de-açúcar. Com estrutura
							fabril própria em Sertãozinho/SP — coração do setor
							sucroenergético brasileiro — entregamos projetos com precisão
							industrial e agilidade operacional.
						</p>
						<p className="text-gray-600 leading-relaxed">
							Nosso portfólio contempla desde grandes conjuntos de moenda até
							componentes de precisão, com rastreabilidade técnica, controle
							dimensional e suporte pós-entrega.
						</p>

						<ul className="mt-6 space-y-2">
							{[
								"Fabricação de máquinas e equipamentos industriais",
								"Reforma e recuperação de conjuntos de moenda",
								"Usinagem de precisão de cilindros e eixos",
								"Fabricação de engrenagens e transmissão de potência",
								"Montagem e comissionamento em campo"
							].map(item => (
								<li key={item} className="flex items-start gap-2 text-sm text-gray-700">
									<span className="mt-0.5 h-2 w-2 rounded-full bg-brand-green flex-shrink-0" />
									{item}
								</li>
							))}
						</ul>
					</motion.div>
				</div>

				{/* Product cards */}
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-60px" }}
				>
					<motion.p
						variants={fadeUp}
						className="text-brand-green text-xs font-bold uppercase tracking-[0.2em] mb-3"
					>
						Principais produtos
					</motion.p>
					<motion.h3
						variants={fadeUp}
						className="text-3xl font-bold text-brand-dark mb-10"
					>
						O que fabricamos e reformamos
					</motion.h3>

					<motion.div
						variants={staggerContainer}
						className="grid gap-8 md:grid-cols-3"
					>
						{products.map(p => (
							<motion.article
								key={p.title}
								variants={cardItem}
								whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(13,128,64,0.12)" }}
								className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm cursor-default"
							>
								<div className="relative h-48 overflow-hidden">
									<img
										src={p.img}
										alt={p.title}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
									<span className="absolute bottom-3 left-3 bg-brand-green text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
										{p.tag}
									</span>
								</div>
								<div className="p-5">
									<h4 className="font-bold text-brand-dark text-base mb-2">{p.title}</h4>
									<p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
								</div>
							</motion.article>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
