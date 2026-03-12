import React from "react"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode
	variant?: "primary" | "outline"
}

export default function Button({ children, variant = "primary", className = "", ...rest }: Props) {
	const base = "px-6 py-2.5 rounded-md font-semibold transition-colors text-sm"
	const styles =
		variant === "outline"
			? `${base} border-2 border-white text-white hover:bg-white hover:text-brand-green ${className}`
			: `${base} bg-white text-brand-green hover:bg-brand-light ${className}`
	return (
		<button {...rest} className={styles}>
			{children}
		</button>
	)
}
