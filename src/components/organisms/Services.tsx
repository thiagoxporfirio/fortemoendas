import React from "react"
import { motion } from "framer-motion"
import { staggerContainer, cardItem, fadeUp } from "../../lib/motion"

const services = [
	{
		num: "01",
		title: "Engenharia",
		desc: "Projetos de engenharia voltados à confiabilidade operacional e aumento de performance dos equipamentos de moagem.",
		icon: (
			<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
				<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
			</svg>
		)
	},
	{
		num: "02",
		title: "Fabricação",
		desc: "Fabricação de moendas e componentes industriais com precisão e padrões técnicos para o setor sucroenergético.",
		icon: (
			<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
			</svg>
		)
	},
	{
		num: "03",
		title: "Montagem",
		desc: "Montagem especializada de equipamentos de moagem com equipes técnicas treinadas e certificadas.",
		icon: (
			<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
			</svg>
		)
	},
	{
		num: "04",
		title: "Reforma",
		desc: "Reforma completa de moendas, devolvendo desempenho e vida útil com qualidade garantida.",
		icon: (
			<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
			</svg>
		)
	},
	{
		num: "05",
		title: "Manutenção",
		desc: "Manutenção preventiva e corretiva 24 horas, garantindo a operação contínua da sua usina.",
		icon: (
			<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		)
	},
	{
		num: "06",
		title: "Fornecimento de Peças",
		desc: "Peças originais e sob medida para moendas de cana-de-açúcar, com entrega ágil e suporte técnico.",
		icon: (
			<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
			</svg>
		)
	}
]

export default function Services() {
	return (
		<section id="servicos" className="py-24 bg-brand-green overflow-hidden relative">
			{/* Pattern de fundo */}
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
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-60px" }}
				>
					<motion.span
						variants={fadeUp}
						className="tech-label text-brand-green harvest-line block mb-4"
					>
						O que fazemos
					</motion.span>
					<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
						<motion.h3
							variants={fadeUp}
							className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-black text-white uppercase leading-tight"
						>
							Soluções industriais<br />
							<span className="text-brand-green">para o setor</span>
						</motion.h3>
						<motion.p
							variants={fadeUp}
							className="text-white/60 max-w-xs text-sm leading-relaxed"
						>
							Cobertura técnica completa — da engenharia ao suporte em campo, 24 horas.
						</motion.p>
					</div>

					<motion.div
						variants={staggerContainer}
						className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-white/10"
					>
						{services.map(s => (
							<motion.article
								key={s.title}
								variants={cardItem}
								whileHover={{ backgroundColor: "rgba(13,23,16,0.9)" }}
								className="group bg-brand-dark/80 backdrop-blur-sm p-8 cursor-default transition-colors duration-300"
							>
								<div className="flex items-start justify-between mb-6">
									<div className="w-12 h-12 flex items-center justify-center border border-brand-green/50 text-brand-green group-hover:bg-brand-green group-hover:text-white group-hover:border-brand-green transition-all duration-300">
										{s.icon}
									</div>
									<span className="font-display font-black text-4xl text-white/10 group-hover:text-white/20 transition-colors select-none">
										{s.num}
									</span>
								</div>
								<h4 className="font-display font-black text-white text-xl uppercase mb-3">
									{s.title}
								</h4>
								<p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
								<div className="mt-6 w-0 h-[2px] bg-brand-green transition-all duration-500 group-hover:w-8" />
							</motion.article>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
