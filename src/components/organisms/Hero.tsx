import React, { useState, useCallback, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
	{
		title: "Camisa de Moenda",
		label: "Usinagem de Precisão",
		video: "/images/moendafrisada.mp4"
	},
	{
		title: "Moenda em Operação",
		label: "Processo Industrial",
		video: "/images/moendavideo.mp4"
	},
	{
		title: "Pente de Moenda",
		label: "Fabricação",
		video: "/images/pente.mp4"
	},
	{
		title: "Etapa Final",
		label: "Inspeção & Entrega",
		video: "/images/pentevideo2.mp4"
	}
]

const AUTOPLAY_INTERVAL = 7000

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
		const id = setInterval(next, AUTOPLAY_INTERVAL)
		return () => clearInterval(id)
	}, [next])

	const videoVariants = {
		enter: (d: number) => ({ opacity: 0, scale: d > 0 ? 1.04 : 0.96 }),
		center: { opacity: 1, scale: 1 },
		exit: (d: number) => ({ opacity: 0, scale: d > 0 ? 0.96 : 1.04 })
	}

	return (
		<section className="relative min-h-[92vh] flex items-end overflow-hidden grain-overlay">
			{/* Vídeo de fundo */}
			<AnimatePresence custom={direction} initial={false}>
				<motion.div
					key={current}
					custom={direction}
					variants={videoVariants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
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
				</motion.div>
			</AnimatePresence>

			{/* Gradientes sobrepostos */}
			<div className="absolute inset-0 bg-gradient-to-t from-brand-soil via-brand-soil/60 to-transparent" />
			<div className="absolute inset-0 bg-gradient-to-r from-brand-soil/70 via-transparent to-transparent" />

			{/* Grid técnico de fundo */}
			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage:
						"linear-gradient(rgba(200,168,75,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,75,.8) 1px, transparent 1px)",
					backgroundSize: "60px 60px"
				}}
			/>

			{/* Conteúdo principal */}
			<div className="relative z-10 container mx-auto pb-20 pt-40">
				<div className="max-w-3xl">
					{/* Etiqueta técnica */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="flex items-center gap-3 mb-6"
					>
						<span className="w-8 h-[2px] bg-brand-green" />
						<span className="tech-label text-brand-green">
							Setor Sucroenergético · Sertãozinho/SP
						</span>
					</motion.div>

					{/* Título principal */}
					<motion.h1
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
						className="font-display text-[clamp(4rem,9vw,7.5rem)] font-black text-white leading-[0.88] tracking-tightest uppercase"
					>
						Forte<br />
						<span
							className="text-transparent"
							style={{ WebkitTextStroke: "2px #0D8040" }}
						>
							Tecnologia
						</span>
						<br />
						<span className="text-brand-green">em Moendas</span>
					</motion.h1>

					{/* Linha descritiva */}
					<motion.p
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
						className="mt-7 text-white/70 text-lg max-w-xl leading-relaxed font-body"
					>
						Engenharia, fabricação, reforma e manutenção de moendas para usinas — com
						suporte técnico 24 horas.
					</motion.p>

					{/* CTAs */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						className="mt-10 flex flex-wrap gap-4"
					>
						<Link to="/about">
							<motion.span
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.97 }}
								className="inline-block bg-brand-green text-white px-8 py-3.5 font-display font-bold text-lg uppercase tracking-widest cursor-pointer transition-colors hover:bg-brand-dark"
							>
								Conheça a empresa
							</motion.span>
						</Link>
						<Link to="/contact">
							<motion.span
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.97 }}
								className="inline-block border-2 border-brand-green text-brand-green px-8 py-3.5 font-display font-bold text-lg uppercase tracking-widest cursor-pointer transition-colors hover:bg-brand-green hover:text-white"
							>
								Fale conosco
							</motion.span>
						</Link>
					</motion.div>
				</div>

				{/* Stats na base */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.8 }}
					className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/10 divide-x divide-white/10"
				>
					{[
						{ v: "24h", l: "Suporte técnico" },
						{ v: "+15", l: "Anos de experiência" },
						{ v: "100%", l: "Setor sucroenergético" },
						{ v: "6", l: "Linhas de serviço" }
					].map(s => (
						<div key={s.l} className="px-6 py-4 text-center backdrop-blur-sm bg-brand-soil/30">
							<p className="font-display text-3xl font-black text-brand-green">{s.v}</p>
							<p className="tech-label text-white/50 mt-1">{s.l}</p>
						</div>
					))}
				</motion.div>
			</div>

			{/* Slide controls laterais */}
			<div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2">
				{slides.map((s, i) => (
					<button
						key={i}
						onClick={() => goTo(i)}
						aria-label={s.title}
						className="group flex items-center gap-2"
					>
						<span
							className={`block transition-all duration-400 rounded-full ${
								i === current
									? "w-6 h-[3px] bg-brand-green"
									: "w-3 h-[2px] bg-white/30 group-hover:bg-white/60"
							}`}
						/>
					</button>
				))}
			</div>

			{/* Label do slide atual */}
			<AnimatePresence mode="wait">
				<motion.div
					key={`label-${current}`}
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -8 }}
					transition={{ duration: 0.3 }}
					className="absolute right-6 bottom-8 z-20 text-right"
				>
					<p className="tech-label text-brand-green">{slides[current].label}</p>
					<p className="font-display text-sm font-bold text-white/60 uppercase tracking-widest">
						{slides[current].title}
					</p>
				</motion.div>
			</AnimatePresence>

			{/* Setas prev/next — discretas */}
			<button
				onClick={prev}
				className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center border border-white/20 text-white/50 hover:text-white hover:border-white/60 transition-colors backdrop-blur-sm"
				aria-label="Anterior"
			>
				<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
				</svg>
			</button>
			<button
				onClick={next}
				className="absolute right-16 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center border border-white/20 text-white/50 hover:text-white hover:border-white/60 transition-colors backdrop-blur-sm"
				aria-label="Próximo"
			>
				<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</section>
	)
}
