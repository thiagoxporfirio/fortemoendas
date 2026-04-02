import React, { useState, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import Button from "../atoms/Button"
import { fadeUp, staggerContainer } from "../../lib/motion"

const slides = [
	{
		title: "Engenharia",
		desc: "Projetos voltados à confiabilidade operacional e performance máxima.",
		img: "/images/industria.jpg"
	},
	{
		title: "Fabricação",
		desc: "Componentes industriais com precisão para o setor sucroenergético.",
		img: "/images/volandeira.jpeg"
	},
	{
		title: "Montagem",
		desc: "Equipes técnicas certificadas para montagem especializada.",
		img: "/images/trabalhos.jpg"
	},
	{
		title: "Reforma",
		desc: "Reforma completa de moendas com qualidade e vida útil garantida.",
		img: "/images/rodete.jpeg"
	},
	{
		title: "Manutenção",
		desc: "Suporte preventivo e corretivo 24h ao lado da sua usina.",
		img: "/images/rodete2.jpeg"
	},
	{
		title: "Fornecimento de Peças",
		desc: "Peças originais e sob medida com entrega ágil e suporte técnico.",
		img: "/images/tambor2.jpeg"
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

	useEffect(() => {
		const id = setInterval(next, 3500)
		return () => clearInterval(id)
	}, [next])

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

				{/* Carrossel futurístico de serviços */}
				<div className="flex-shrink-0 w-full md:w-[600px]">
					{/* Moldura futurística */}
					<div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_60px_rgba(16,153,77,0.35)] bg-white/5 backdrop-blur-md">
						{/* Barra de topo */}
						<div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10 bg-white/5">
							<span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
							<span className="w-2.5 h-2.5 rounded-full bg-green-300/50" />
							<span className="w-2.5 h-2.5 rounded-full bg-white/30" />
							<span className="ml-auto text-[10px] text-green-300/70 font-mono tracking-widest uppercase">
								Serviços
							</span>
						</div>

						{/* Slide */}
						<div className="relative h-96 overflow-hidden">
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
									<img
										src={slides[current].img}
										alt={slides[current].title}
										className="w-full h-full object-cover"
									/>
									{/* Overlay gradiente */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

									{/* Badge de serviço */}
									<div className="absolute top-3 left-3">
										<span className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-green-300 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-green-400/30">
											{String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
										</span>
									</div>

									{/* Texto sobreposto */}
									<div className="absolute bottom-0 left-0 right-0 p-4">
										<p className="text-white font-bold text-lg leading-tight drop-shadow">
											{slides[current].title}
										</p>
										<p className="text-green-200 text-xs mt-1 leading-relaxed line-clamp-2">
											{slides[current].desc}
										</p>
									</div>

									{/* Linhas de scan futurísticas */}
									<div
										className="absolute inset-0 pointer-events-none opacity-[0.04]"
										style={{
											backgroundImage:
												"repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0px, transparent 1px, transparent 3px)"
										}}
									/>
								</motion.div>
							</AnimatePresence>

							{/* Setas nav */}
							<button
								onClick={prev}
								className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white hover:bg-green-600/60 transition-colors"
							>
								<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
								</svg>
							</button>
							<button
								onClick={next}
								className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white hover:bg-green-600/60 transition-colors"
							>
								<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
								</svg>
							</button>
						</div>

						{/* Dots de navegação */}
						<div className="flex items-center justify-center gap-1.5 py-3 bg-white/5 border-t border-white/10">
							{slides.map((_, i) => (
								<button
									key={i}
									onClick={() => goTo(i)}
									className={`transition-all duration-300 rounded-full ${
										i === current
											? "w-6 h-1.5 bg-green-400"
											: "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
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
