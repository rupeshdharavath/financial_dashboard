function Card({ title, children, className = '' }) {
	return (
		<section
			className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-panel ${className}`}
		>
			{title ? <h3 className="mb-3 text-lg font-semibold text-slate-900">{title}</h3> : null}
			{children}
		</section>
	)
}

export default Card

