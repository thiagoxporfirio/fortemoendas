import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Button from "../atoms/Button"
import { fadeUp, fadeLeft, floatLogo, staggerContainer } from "../../lib/motion"

export default function Hero() {
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

				{/* Logo flutuante */}
				<motion.div
					className="flex-shrink-0"
					variants={floatLogo}
					initial="initial"
					animate="animate"
				>
					<motion.img
						src="/images/fortelogoonly.png"
						alt="Forte Moendas"
						className="w-96 h-96 object-contain drop-shadow-2xl"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
					/>
				</motion.div>
			</div>
		</section>
	)
}
