const variantClasses = {
	primary: 'bg-emerald-600 text-white hover:bg-emerald-700',
	ghost: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
	danger: 'bg-rose-600 text-white hover:bg-rose-700',
}

const sizeClasses = {
	sm: 'px-3 py-1.5 text-sm',
	md: 'px-4 py-2 text-sm',
}

function Button({
	children,
	type = 'button',
	onClick,
	variant = 'primary',
	size = 'md',
	className = '',
	disabled = false,
}) {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`inline-flex items-center justify-center rounded-lg font-medium transition ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className}`}
		>
			{children}
		</button>
	)
}

export default Button

