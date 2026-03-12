import type { Variants } from "framer-motion"

/** Fade up — usado para títulos e parágrafos */
export const fadeUp: Variants = {
	hidden: { opacity: 0, y: 32 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
	}
}

/** Fade in da esquerda */
export const fadeLeft: Variants = {
	hidden: { opacity: 0, x: -40 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
	}
}

/** Fade in da direita */
export const fadeRight: Variants = {
	hidden: { opacity: 0, x: 40 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
	}
}

/** Container que stagga os filhos */
export const staggerContainer: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.1
		}
	}
}

/** Card item — para grids de serviços */
export const cardItem: Variants = {
	hidden: { opacity: 0, y: 24, scale: 0.97 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
	}
}

/** Logo flutuante */
export const floatLogo: Variants = {
	initial: { y: 0 },
	animate: {
		y: [-8, 8, -8],
		transition: {
			duration: 5,
			ease: "easeInOut",
			repeat: Infinity
		}
	}
}
