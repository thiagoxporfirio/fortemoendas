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
	{ src: "/images/buchas.jpeg", alt: "Casquilhos e buchas usinadas" },
	{ src: "/images/engrenagensrodete.jpeg", alt: "Engrenagens e rodete" },
	{ src: "/images/tembor.jpeg", alt: "Tambor nivelador" },
	{ src: "/images/rodete.jpeg", alt: "Rodete" },
	{ src: "/images/volandeira.jpeg", alt: "Volandeira" },
	{ src: "/images/volandeira2.jpeg", alt: "Volandeira em montagem" },
	{ src: "/images/rodete2.jpeg", alt: "Rodete em processo" },
];

export default function WhatWeDo() {
	return (
		<>
			{/* ── Seção quem somos — fundo verde ──────────────────────── */}
			<section className="py-24 bg-brand-green overflow-hidden relative">
				{/* Pattern de pontos, igual à seção de serviços */}
				<div
					className="absolute inset-0 opacity-[0.06]"
					style={{
						backgroundImage:
							"radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
						backgroundSize: "28px 28px"
					}}
				/>

				<div className="container mx-auto relative z-10">
					<motion.div
						className="mb-16 max-w-3xl"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-60px" }}
					>
						<motion.span
							variants={fadeUp}
							className="tech-label text-white/70 mb-4 flex items-center gap-3"
						>
							<span className="inline-block w-8 h-[2px] bg-white/40 flex-shrink-0" />
							Nossa especialidade
						</motion.span>
						<motion.h2
							variants={fadeUp}
							className="font-display text-[clamp(2.8rem,5vw,4.5rem)] font-black text-white uppercase leading-[0.9] text-balance"
						>
							Forte Moendas S/A —<br />
							<span className="text-white/50">o que fazemos</span>
						</motion.h2>
						<motion.p
							variants={fadeUp}
							className="mt-6 text-white/65 leading-relaxed max-w-xl"
						>
							Atuamos no setor{" "}
							<strong className="text-white">sucroenergético</strong>,
							entregando soluções técnicas completas para usinas de cana-de-açúcar
							— do projeto à entrega em campo.
						</motion.p>
					</motion.div>

					{/* Featured row — vídeo/imagens + texto */}
					<div className="grid md:grid-cols-2 gap-16 items-center">
						<motion.div
							variants={fadeLeft}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-60px" }}
							className="relative"
						>
							<div className="grid grid-cols-2 gap-px bg-white/10">
								<video
									src="/images/pente.mp4"
									className="w-full h-52 object-cover"
									autoPlay muted loop playsInline preload="metadata"
								/>
								<img src="/images/rodete2.jpeg" alt="Rodetes" className="w-full h-52 object-cover" />
								<img src="/images/volandeira2.jpeg" alt="Volandeira" className="w-full h-52 object-cover" />
								<img src="/images/engrenagensrodete.jpeg" alt="Engrenagens" className="w-full h-52 object-cover" />
							</div>
							<div className="absolute -bottom-3 -left-3 bg-brand-soil text-white tech-label px-4 py-2">
								Trabalhos Reais
							</div>
						</motion.div>

						<motion.div
							variants={fadeRight}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-60px" }}
						>
							<h3 className="font-display text-3xl font-black text-white uppercase mb-5 leading-tight">
								Presença completa<br />na linha de moagem
							</h3>
							<p className="text-white/65 leading-relaxed mb-4">
								A Forte Moendas S/A opera na fabricação e reforma de equipamentos
								críticos para o processamento de cana-de-açúcar. Com estrutura
								fabril própria em Sertãozinho/SP — coração do setor
								sucroenergético brasileiro — entregamos projetos com precisão
								industrial e agilidade operacional.
							</p>
							<p className="text-white/65 leading-relaxed">
								Nosso portfólio contempla desde grandes conjuntos de moenda até
								componentes de precisão, com rastreabilidade técnica, controle
								dimensional e suporte pós-entrega.
							</p>

							<ul className="mt-8 space-y-3">
								{[
									"Fabricação de máquinas e equipamentos industriais",
									"Reforma e recuperação de conjuntos de moenda",
									"Usinagem de precisão de cilindros e eixos",
									"Fabricação de engrenagens e transmissão de potência",
									"Montagem e comissionamento em campo"
								].map(item => (
									<li
										key={item}
										className="flex items-start gap-3 text-sm text-white/80"
									>
										<span className="mt-1.5 flex-shrink-0 w-4 h-[2px] bg-white/50" />
										{item}
									</li>
								))}
							</ul>
						</motion.div>
					</div>
				</div>
			</section>

			{/* ── Seção produtos — fundo soil escuro ───────────────────── */}
			<section className="py-24 bg-brand-soil overflow-hidden grain-overlay">
				<div className="container mx-auto">
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-60px" }}
					>
						<motion.span
							variants={fadeUp}
							className="tech-label harvest-line text-brand-green mb-4 block"
						>
							Principais produtos
						</motion.span>
						<motion.h3
							variants={fadeUp}
							className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-black text-white uppercase leading-tight mb-14"
						>
							O que fabricamos<br />
							<span className="text-brand-green">e reformamos</span>
						</motion.h3>

						<motion.div
							variants={staggerContainer}
							className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-white/10"
						>
							{products.map(p => (
								<motion.article
									key={p.title}
									variants={cardItem}
									className="group relative overflow-hidden bg-brand-soil cursor-default"
								>
									<div className="relative h-56 overflow-hidden">
										<img
											src={p.img}
											alt={p.title}
											className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-brand-soil via-brand-soil/30 to-transparent" />
										<span className="absolute top-3 left-3 tech-label bg-brand-green text-white px-2.5 py-1">
											{p.tag}
										</span>
									</div>
									<div className="p-6">
										<h4 className="font-display font-black text-white text-xl uppercase leading-tight mb-3">
											{p.title}
										</h4>
										<p className="text-sm text-white/55 leading-relaxed">
											{p.desc}
										</p>
										<div className="mt-4 w-0 h-[2px] bg-brand-green transition-all duration-500 group-hover:w-12" />
									</div>
								</motion.article>
							))}
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* ── Galeria — fundo cinza escuro ─────────────────────────── */}
			<section className="py-20 bg-brand-steel overflow-hidden">
				<div className="container mx-auto">
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-60px" }}
					>
						<motion.span
							variants={fadeUp}
							className="tech-label harvest-line text-brand-green mb-4 block"
						>
							Galeria técnica
						</motion.span>
						<motion.h3
							variants={fadeUp}
							className="font-display text-3xl font-black text-white uppercase mb-10"
						>
							Fotos de fabricação<br />
							<span className="text-white/40">e reforma</span>
						</motion.h3>

						<motion.div
							variants={staggerContainer}
							className="grid grid-cols-2 md:grid-cols-4 gap-1"
						>
							{photoGallery.map((photo, i) => (
								<motion.div
									key={photo.src}
									variants={cardItem}
									className={`relative overflow-hidden group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
								>
									<img
										src={photo.src}
										alt={photo.alt}
										className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
											i === 0 ? "h-80 md:h-full" : "h-40"
										}`}
									/>
									<div className="absolute inset-0 bg-brand-soil/0 group-hover:bg-brand-soil/30 transition-colors duration-300" />
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</div>
			</section>
		</>
	);
}
