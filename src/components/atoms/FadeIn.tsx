import React from "react"
import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "../../lib/motion"
import type { Variants } from "framer-motion"

type Props = {
	children: React.ReactNode
	className?: string
	variants?: Variants
	/** Ativa scroll-trigger (whileInView). Default: true */
	inView?: boolean
	delay?: number
}

/**
 * Atom reutilizável para animar qualquer conteúdo com fade.
 * Por padrão usa `fadeUp` e dispara ao entrar na viewport.
 */
export default function FadeIn({
	children,
	className,
	variants = fadeUp,
	inView = true,
	delay = 0
}: Props) {
	const transition = delay
		? { ...((variants.visible as { transition?: object })?.transition ?? {}), delay }
		: undefined

	const variantsWithDelay: Variants = delay
		? {
				...variants,
				visible: {
					...(variants.visible as object),
					transition
				}
			}
		: variants

	if (inView) {
		return (
			<motion.div
				className={className}
				variants={variantsWithDelay}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-60px" }}
			>
				{children}
			</motion.div>
		)
	}

	return (
		<motion.div
			className={className}
			variants={variantsWithDelay}
			initial="hidden"
			animate="visible"
		>
			{children}
		</motion.div>
	)
}

/** Wrapper que stagga os filhos diretos */
export function StaggerChildren({
	children,
	className,
	inView = true
}: {
	children: React.ReactNode
	className?: string
	inView?: boolean
}) {
	if (inView) {
		return (
			<motion.div
				className={className}
				variants={staggerContainer}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-60px" }}
			>
				{children}
			</motion.div>
		)
	}
	return (
		<motion.div
			className={className}
			variants={staggerContainer}
			initial="hidden"
			animate="visible"
		>
			{children}
		</motion.div>
	)
}
