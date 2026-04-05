function Input({
	label,
	id,
	value,
	onChange,
	type = 'text',
	placeholder,
	className = '',
	required = false,
	min,
	step,
}) {
	return (
		<label className={`flex flex-col gap-1 text-sm text-slate-700 ${className}`}>
			{label ? <span className="font-medium">{label}</span> : null}
			<input
				id={id}
				value={value}
				onChange={onChange}
				type={type}
				min={min}
				step={step}
				required={required}
				placeholder={placeholder}
				className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-emerald-100 transition focus:border-emerald-600 focus:ring-2"
			/>
		</label>
	)
}

export default Input

