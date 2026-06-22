import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, cardItem } from "../../lib/motion";

const videos = [
	{ title: "Flange de Moenda 78", desc: "Usinagem de flange de moenda 78 em nossa estrutura fabril.", src: "/images/flangemoenda.mp4", tag: "Usinagem" },
	{ title: "Camisa de Moenda 78", desc: "Usinagem de precisão de camisa de moenda 78 com controle dimensional rigoroso.", src: "/images/moendafrisada.mp4", tag: "Usinagem" },
	{ title: "Moenda em Operação", desc: "Registro do processo de moenda em operação com foco em desempenho.", src: "/images/moendavideo.mp4", tag: "Operação" },
	{ title: "Processo Complementar", desc: "Etapa complementar com acompanhamento técnico da equipe da Forte.", src: "/images/moendavideo2.mp4", tag: "Processo" },
	{ title: "Conjunto de caixa de mancal", desc: "Fabricação e recuperação de caixas para eixo de moendas conforme projetos.", src: "/images/buchasvideo.mp4", tag: "Componentes" },
	{ title: "Casquilhos — Usinagem", desc: "Usinagem de casquilhos com controle dimensional e ajuste por especificação.", src: "/images/casquilhovideo.mp4", tag: "Usinagem" },
	{ title: "Bagaceira", desc: "Fabricação de bagaceiras rigorosamente usinadas, atendendo ao controle dimensional de acordo com o projeto.", src: "/images/pente.mp4", tag: "Fabricação" },
	{ title: "Solda de bagaceira", desc: "Aplicação de solda em bagaceira obtendo alta performance e durabilidade na moagem, com material de altíssima qualidade.", src: "/images/pentevideo.mp4", tag: "Processo" },
	{ title: "Pente — Etapa Final", desc: "Finalização e inspeção do pente antes da entrega.", src: "/images/pentevideo2.mp4", tag: "Inspeção" }
];

function VideoCard({ video }: { video: (typeof videos)[0] }) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [playing, setPlaying] = useState(false);

	function togglePlay() {
		const el = videoRef.current;
		if (!el) return;
		if (el.paused) { el.play(); setPlaying(true); }
		else { el.pause(); setPlaying(false); }
	}

	return (
		<motion.div
			variants={cardItem}
			className="group relative bg-brand-soil overflow-hidden"
		>
			{/* Video */}
			<div className="relative bg-black aspect-video overflow-hidden">
				<video
					ref={videoRef}
					src={video.src}
					className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
					playsInline
					preload="metadata"
					onEnded={() => setPlaying(false)}
				/>

				{/* Overlay escuro quando parado */}
				<div className={`absolute inset-0 transition-opacity duration-300 ${playing ? "opacity-0" : "opacity-100 bg-brand-soil/40"}`} />

				{/* Play button */}
				<button
					onClick={togglePlay}
					aria-label={playing ? "Pausar" : "Reproduzir"}
					className="absolute inset-0 flex items-center justify-center"
				>
					{!playing && (
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							className="w-14 h-14 flex items-center justify-center border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white transition-colors"
						>
							<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-0.5">
								<path d="M8 5v14l11-7L8 5z" />
							</svg>
						</motion.div>
					)}
				</button>

				{/* Tag */}
				<span className="absolute top-3 left-3 tech-label bg-brand-green text-white px-2.5 py-1 z-10">
					{video.tag}
				</span>
			</div>

			{/* Info */}
			<div className="p-5 border-t border-white/10">
				<h4 className="font-display font-black text-white text-lg uppercase leading-tight mb-2">
					{video.title}
				</h4>
				<p className="text-xs text-white/45 leading-relaxed">{video.desc}</p>
			</div>
		</motion.div>
	);
}

export default function Videos() {
	return (
		<section className="py-24 bg-brand-steel overflow-hidden">
			<div className="container mx-auto">
				<motion.div
					className="mb-14 flex flex-col md:flex-row md:items-end gap-4 justify-between"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-60px" }}
				>
					<div>
						<motion.span
							variants={fadeUp}
							className="tech-label harvest-line text-brand-green block mb-4"
						>
							Acompanhe na prática
						</motion.span>
						<motion.h2
							variants={fadeUp}
							className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-black text-white uppercase leading-tight"
						>
							Nossa fábrica<br />
							<span className="text-brand-green">em ação</span>
						</motion.h2>
					</div>
					<motion.p variants={fadeUp} className="text-white/50 max-w-xs text-sm leading-relaxed">
						Processos de fabricação e usinagem que garantem a qualidade dos nossos componentes.
					</motion.p>
				</motion.div>

				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-60px" }}
					className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-white/10"
				>
					{videos.map(v => (
						<VideoCard key={v.title} video={v} />
					))}
				</motion.div>
			</div>
		</section>
	);
}
