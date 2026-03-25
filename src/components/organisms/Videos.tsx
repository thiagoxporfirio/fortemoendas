import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, cardItem } from "../../lib/motion";

const videos = [
	{
		title: "Flange de Moenda 78",
		desc: "Acompanhe o processo completo de usinagem de um flange de moenda 78 na nossa estrutura fabril em Sertãozinho/SP.",
		src: "/images/flangemoenda.mp4",
		tag: "Usinagem"
	},
	{
		title: "Camisa de Moenda 78",
		desc: "Processo de usinagem de precisão de uma camisa de moenda 78, com controle dimensional rigoroso e acabamento conforme projeto.",
		src: "/images/camisaemoenda.mp4",
		tag: "Usinagem"
	}
];

function VideoCard({ video }: { video: (typeof videos)[0] }) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [playing, setPlaying] = useState(false);

	function togglePlay() {
		const el = videoRef.current;
		if (!el) return;
		if (el.paused) {
			el.play();
			setPlaying(true);
		} else {
			el.pause();
			setPlaying(false);
		}
	}

	function handleEnded() {
		setPlaying(false);
	}

	return (
		<motion.div
			variants={cardItem}
			className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm"
		>
			{/* Video wrapper */}
			<div className="relative bg-black aspect-video overflow-hidden group">
				<video
					ref={videoRef}
					src={video.src}
					className="w-full h-full object-cover"
					playsInline
					preload="metadata"
					onEnded={handleEnded}
				/>

				{/* Play/Pause overlay */}
				<button
					onClick={togglePlay}
					aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
					className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
					style={{ background: playing ? "transparent" : "rgba(0,0,0,0.35)" }}
				>
					{!playing && (
						<span className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-green/90 text-white shadow-lg transition-transform duration-200 hover:scale-110">
							{/* Play icon */}
							<svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 ml-1">
								<path d="M8 5v14l11-7L8 5z" />
							</svg>
						</span>
					)}
				</button>

				{/* Tag badge */}
				<span className="absolute top-3 left-3 bg-brand-green text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full z-10">
					{video.tag}
				</span>
			</div>

			{/* Info */}
			<div className="p-5">
				<h4 className="font-bold text-brand-dark text-base mb-2">{video.title}</h4>
				<p className="text-sm text-gray-600 leading-relaxed">{video.desc}</p>
			</div>
		</motion.div>
	);
}

export default function Videos() {
	return (
		<section className="py-24 bg-gray-50 overflow-hidden">
			<div className="container mx-auto">
				{/* Header */}
				<motion.div
					className="mb-14 max-w-2xl"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-60px" }}
				>
					<motion.p
						variants={fadeUp}
						className="text-brand-green text-xs font-bold uppercase tracking-[0.2em] mb-3"
					>
						Acompanhe na prática
					</motion.p>
					<motion.h2
						variants={fadeUp}
						className="text-4xl font-extrabold text-brand-dark leading-tight"
					>
						Nossa fábrica em ação
					</motion.h2>
					<motion.p
						variants={fadeUp}
						className="mt-4 text-gray-600 leading-relaxed"
					>
						Veja de perto os processos de fabricação e usinagem que garantem a
						qualidade dos nossos componentes para o setor sucroenergético.
					</motion.p>
				</motion.div>

				{/* Video grid */}
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-60px" }}
					className="grid gap-8 sm:grid-cols-2"
				>
					{videos.map(v => (
						<VideoCard key={v.title} video={v} />
					))}
				</motion.div>
			</div>
		</section>
	);
}
