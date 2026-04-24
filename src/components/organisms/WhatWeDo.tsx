import React from "react";
import { motion } from "framer-motion";
import {
	staggerContainer,
	fadeUp,
	fadeLeft,
	fadeRight,
	cardItem
} from "../../lib/motion";

const products = [
	{
		title: "Moendas — Friso e Fabricação",
		desc: "Execução de friso (grooving) em cilindros e fabricação de novas moendas completas, com padrões técnicos que maximizam a extração de caldo.",
		img: "/images/moenda.jpeg",
		tag: "Friso & Fabricação"
	},
	{
		title: "Coroas e Pinhões",
		desc: "Fabricação de engrenagens industriais de grande porte com aço especial, garantindo precisão dimensional e alta resistência ao desgaste.",
		img: "/images/engrenagensrodete.jpeg",
		tag: "Fabricação"
	},
	{
		title: "Tambor Nivelador",
		desc: "Fabricação e reforma de tambores niveladores para preparação da cana, garantindo uniformidade na alimentação e eficiência no processo de moagem.",
		img: "/images/tembor.jpeg",
		tag: "Fabricação & Reforma"
	},
	{
		title: "Rodetes",
		desc: "Fabricação e recuperação de rodetes para conjuntos de moenda, com usinagem de precisão e materiais selecionados para alta resistência ao desgaste.",
		img: "/images/rodete.jpeg",
		tag: "Usinagem"
	},
	{
		title: "Volandeiras",
		desc: "Fabricação e reforma de volandeiras, componentes críticos no conjunto de moenda, com controle dimensional rigoroso e acabamento conforme projeto.",
		img: "/images/volandeira.jpeg",
		tag: "Fabricação & Reforma"
	},
	{
		title: "Casquilhos",
		desc: "Fabricação e recuperação de casquilhos para eixos de moenda, com tolerâncias apertadas, bronzes especiais e geometria adequada ao projeto original.",
		img: "/images/buchas.jpeg",
		tag: "Fabricação & Recuperação"
	}
];

const photoGallery = [
	{ src: "/images/moenda.jpeg", alt: "Moenda industrial" },
	{ src: "/images/flange.jpeg", alt: "Flange de moenda" },
	{ src: "/images/buchas.jpeg", alt: "Casquilhos e buchas usinadas" },
	{ src: "/images/engrenagensrodete.jpeg", alt: "Engrenagens e rodete" },
	{ src: "/images/tembor.jpeg", alt: "Tambor nivelador" },
	{ src: "/images/tambor2.jpeg", alt: "Tambor nivelador em fabricação" },
	{ src: "/images/rodete.jpeg", alt: "Rodete" },
	{ src: "/images/rodete2.jpeg", alt: "Rodete em processo" },
	{ src: "/images/rodete3.jpeg", alt: "Rodete finalizado" },
	{ src: "/images/volandeira.jpeg", alt: "Volandeira" },
	{ src: "/images/volandeira2.jpeg", alt: "Volandeira em montagem" }
];

const stats = [
	{ value: "24h", label: "Suporte técnico" },
	{ value: "+15", label: "Anos de experiência" },
	{ value: "100%", label: "Foco no setor sucroenergético" },
	{ value: "6", label: "Linhas de serviço" }
];

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
						Quem é a Forte Moendas S/A e o que fazemos? <br />
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
						<motion.div key={s.label} variants={fadeUp} className="text-center">
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
						{/* Collage de fotos reais */}
						<div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden shadow-xl">
							<video
								src="/images/pente.mp4"
								title="Pente de moenda Forte Moendas"
								className="w-full h-44 object-cover"
								autoPlay
								muted
								loop
								playsInline
								preload="metadata"
							/>
							<img
								src="/images/rodete2.jpeg"
								alt="Rodetes Forte Moendas"
								className="w-full h-44 object-cover"
							/>
							<img
								src="/images/volandeira2.jpeg"
								alt="Volandeira Forte Moendas"
								className="w-full h-44 object-cover"
							/>
							<img
								src="/images/montagemcompleta.jpeg"
								alt="Montagem completa Forte Moendas"
								className="w-full h-44 object-cover"
							/>
						</div>
						{/* Badge sobre a foto */}
						<div className="absolute bottom-4 left-4 bg-brand-green text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow">
							Trabalhos Reais
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
								<li
									key={item}
									className="flex items-start gap-2 text-sm text-gray-700"
								>
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
						className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
					>
						{products.map(p => (
							<motion.article
								key={p.title}
								variants={cardItem}
								whileHover={{
									y: -6,
									boxShadow: "0 16px 48px rgba(13,128,64,0.12)"
								}}
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
									<h4 className="font-bold text-brand-dark text-base mb-2">
										{p.title}
									</h4>
									<p className="text-sm text-gray-600 leading-relaxed">
										{p.desc}
									</p>
								</div>
							</motion.article>
						))}
					</motion.div>
				</motion.div>

				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-60px" }}
					className="mt-16"
				>
					<motion.p
						variants={fadeUp}
						className="text-brand-green text-xs font-bold uppercase tracking-[0.2em] mb-3"
					>
						Galeria técnica
					</motion.p>
					<motion.h3
						variants={fadeUp}
						className="text-2xl font-bold text-brand-dark mb-8"
					>
						Fotos recentes de fabricação e reforma
					</motion.h3>

					<motion.div
						variants={staggerContainer}
						className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
					>
						{photoGallery.map(photo => (
							<motion.div
								key={photo.src}
								variants={cardItem}
								className="rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-white"
							>
								<img
									src={photo.src}
									alt={photo.alt}
									className="w-full h-40 object-cover"
								/>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
