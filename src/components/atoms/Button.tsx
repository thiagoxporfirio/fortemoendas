import React from "react"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode
	variant?: "primary" | "outline" | "ghost"
	size?: "sm" | "md" | "lg"
}

export default function Button({
	children,
	variant = "primary",
	size = "md",
	className = "",
	...rest
}: Props) {
	const sizes = {
		sm: "px-4 py-2 text-xs",
		md: "px-6 py-3 text-sm",
		lg: "px-8 py-3.5 text-base"
	}

	const base = `font-display font-bold uppercase tracking-widest transition-all duration-200 ${sizes[size]}`

	const variants = {
		primary: `${base} bg-brand-green text-white hover:bg-brand-dark hover:scale-[1.02]`,
		outline: `${base} border-2 border-white/40 text-white hover:border-white hover:bg-white/10`,
		ghost:   `${base} text-brand-green hover:bg-brand-green/10`
	}

	return (
		<button {...rest} className={`${variants[variant]} ${className}`}>
			{children}
		</button>
	)
}
