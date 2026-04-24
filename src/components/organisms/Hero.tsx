import React, { useState, useCallback } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import Button from "../atoms/Button"
import { fadeUp, staggerContainer } from "../../lib/motion"

const slides = [
	{
		title: "Moenda - Usinagem de Camisa",
		desc: "Processo de usinagem de camisa de moenda com controle técnico de acabamento.",
		video: "/images/moendafrisada.mp4"
	},
	{
		title: "Moenda em Operação",
		desc: "Registro do processo de moenda em operação com foco em desempenho industrial.",
		video: "/images/moendavideo.mp4"
	},
	{
		title: "Moenda - Processo Complementar",
		desc: "Etapa complementar de operação e ajuste técnico na linha de moagem.",
		video: "/images/moendavideo2.mp4"
	},
	{
		title: "Pente de Moenda - Fabricação",
		desc: "Fabricação de pente de moenda com robustez estrutural e precisão geométrica.",
		video: "/images/pente.mp4"
	},
	{
		title: "Pente de Moenda - Etapa Final",
		desc: "Finalização do pente com inspeção técnica antes da entrega.",
		video: "/images/pentevideo2.mp4"
	},
	{
		title: "Pente de Moenda - Processo",
		desc: "Sequência de usinagem e preparação para montagem do conjunto.",
		video: "/images/pentevideo.mp4"
	}
]

export default function Hero() {
	const [current, setCurrent] = useState(0)
	const [direction, setDirection] = useState(1)

	const goTo = useCallback(
		(idx: number) => {
			setDirection(idx > current ? 1 : -1)
			setCurrent(idx)
		},
		[current]
	)

	const next = useCallback(() => {
		setDirection(1)
		setCurrent(c => (c + 1) % slides.length)
	}, [])

	const prev = useCallback(() => {
		setDirection(-1)
		setCurrent(c => (c - 1 + slides.length) % slides.length)
	}, [])

	const variants = {
		enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
		center: { x: 0, opacity: 1 },
		exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 })
	}

	return (
		<section
			className="relative py-28 overflow-hidden"
			style={{
				background:
					"linear-gradient(135deg, #075C2C 0%, #0D8040 50%, #10994D 100%)"
			}}
		>
			{/* Grid tecúgrafico de fundo */}
			<div
				className="absolute inset-0 opacity-[0.04]"
				style={{
					backgroundImage:
						"linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
					backgroundSize: "40px 40px"
				}}
			/>

			{/* Círculos decorativos animados */}
			<motion.div
				className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full bg-white opacity-[0.04]"
				animate={{ scale: [1, 1.08, 1], rotate: [0, 15, 0] }}
				transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
			/>
			<motion.div
				className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white opacity-[0.04]"
				animate={{ scale: [1, 1.12, 1], rotate: [0, -15, 0] }}
				transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, delay: 2 }}
			/>

			<div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center gap-14">
				{/* Texto */}
				<motion.div
					className="flex-1"
					variants={staggerContainer}
					initial="hidden"
					animate="visible"
				>
					<motion.p
						variants={fadeUp}
						className="text-green-300 text-xs font-bold uppercase tracking-[0.2em] mb-4"
					>
						Setor Sucroenergético
					</motion.p>

					<motion.h1
						variants={fadeUp}
						className="text-5xl font-extrabold text-white leading-tight tracking-tight"
					>
						Forte Tecnologia<br />
						<span className="text-green-300">em Moendas</span>
					</motion.h1>

					<motion.p
						variants={fadeUp}
						className="mt-5 text-green-100 text-lg max-w-lg leading-relaxed border-l-2 border-green-400 pl-4 italic"
					>
						&ldquo;A verdadeira inovação está na confiabilidade absoluta &ndash;
						24 horas ao lado da sua usina.&rdquo;
					</motion.p>

					<motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
						<Link to="/about">
							<Button>Conheça a empresa</Button>
						</Link>
						<Link to="/contact">
							<Button variant="outline">Fale conosco</Button>
						</Link>
					</motion.div>
				</motion.div>

				{/* Carrossel de vídeos */}
				<div className="flex-shrink-0 w-full md:w-[640px]">
					<div className="relative rounded-xl overflow-hidden shadow-2xl">
						{/* Slide */}
						<div className="relative h-[460px] overflow-hidden">
							<AnimatePresence custom={direction} initial={false}>
								<motion.div
									key={current}
									custom={direction}
									variants={variants}
									initial="enter"
									animate="center"
									exit="exit"
									transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
									className="absolute inset-0"
								>
									<video
										src={slides[current].video}
										className="w-full h-full object-cover"
										autoPlay
										muted
										loop
										playsInline
										preload="metadata"
									/>
									{/* Overlay gradiente */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

									{/* Texto sobreposto */}
									<div className="absolute bottom-0 left-0 right-0 px-6 py-5">
										<p className="text-white font-bold text-xl leading-tight drop-shadow">
											{slides[current].title}
										</p>
										<p className="text-green-200 text-sm mt-1 leading-relaxed">
											{slides[current].desc}
										</p>
									</div>

									{/* Setas nav */}
									<button
										onClick={prev}
										className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
									>
										<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
											<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
										</svg>
									</button>
									<button
										onClick={next}
										className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
									>
										<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
											<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
										</svg>
									</button>
								</motion.div>
							</AnimatePresence>
						</div>

						{/* Dots de navegação */}
						<div className="absolute bottom-4 right-5 flex items-center gap-1.5 z-10">
							{slides.map((_, i) => (
								<button
									key={i}
									onClick={() => goTo(i)}
									className={`transition-all duration-300 rounded-full ${
										i === current
											? "w-5 h-1.5 bg-white"
											: "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
									}`}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
