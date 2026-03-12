import React from "react"
import { motion } from "framer-motion"
import { staggerContainer, cardItem, fadeUp } from "../../lib/motion"

const services = [
	{
		title: "Engenharia",
		desc: "Projetos de engenharia voltados à confiabilidade operacional e aumento de performance dos equipamentos de moagem."
	},
	{
		title: "Fabricação",
		desc: "Fabricação de moendas e componentes industriais com precisão e padrões técnicos para o setor sucroenergético."
	},
	{
		title: "Montagem",
		desc: "Montagem especializada de equipamentos de moagem com equipes técnicas treinadas e certificadas."
	},
	{
		title: "Reforma",
		desc: "Reforma completa de moendas, devolvendo desempenho e vida útil com qualidade garantida."
	},
	{
		title: "Manutenção",
		desc: "Manutenção preventiva e corretiva 24 horas, garantindo a operação contínua da sua usina."
	},
	{
		title: "Fornecimento de Peças",
		desc: "Peças originais e sob medida para moendas de cana-de-açúcar, com entrega ágil e suporte técnico."
	}
]

export default function Services() {
	return (
		<section id="servicos" className="py-20 bg-brand-light">
			<div className="container mx-auto">
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-60px" }}
				>
					<motion.p
						variants={fadeUp}
						className="text-brand-green text-xs font-bold uppercase tracking-[0.2em] mb-2"
					>
						O que fazemos
					</motion.p>
					<motion.h3
						variants={fadeUp}
						className="text-3xl font-bold text-brand-dark mb-12 max-w-xl"
					>
						Soluções industriais para o setor sucroenergético
					</motion.h3>

					<motion.div
						variants={staggerContainer}
						className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
					>
						{services.map(s => (
							<motion.article
								key={s.title}
								variants={cardItem}
								whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(13,128,64,0.15)" }}
								className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-brand-green cursor-default"
							>
								<h4 className="font-semibold text-brand-dark text-lg">{s.title}</h4>
								<p className="text-sm text-gray-600 mt-2 leading-relaxed">{s.desc}</p>
							</motion.article>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
