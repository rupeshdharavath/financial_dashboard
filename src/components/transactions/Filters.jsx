import Button from '../common/Button.jsx'

function Filters({
	category,
	setCategory,
	type,
	setType,
	sortBy,
	setSortBy,
	categories,
	onReset,
}) {
	return (
		<div className="grid gap-3 md:grid-cols-4">
			<label className="text-sm text-slate-700">
				<span className="mb-1 block font-medium">Category</span>
				<select
					value={category}
					onChange={(e) => setCategory(e.target.value)}
					className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-emerald-100 focus:border-emerald-600 focus:ring-2"
				>
					<option value="all">All</option>
					{categories.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</select>
			</label>

			<label className="text-sm text-slate-700">
				<span className="mb-1 block font-medium">Type</span>
				<select
					value={type}
					onChange={(e) => setType(e.target.value)}
					className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-emerald-100 focus:border-emerald-600 focus:ring-2"
				>
					<option value="all">All</option>
					<option value="income">Income</option>
					<option value="expense">Expense</option>
				</select>
			</label>

			<label className="text-sm text-slate-700">
				<span className="mb-1 block font-medium">Sort</span>
				<select
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value)}
					className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-emerald-100 focus:border-emerald-600 focus:ring-2"
				>
					<option value="date-desc">Newest first</option>
					<option value="date-asc">Oldest first</option>
					<option value="amount-desc">Amount high to low</option>
					<option value="amount-asc">Amount low to high</option>
				</select>
			</label>

			<div className="flex items-end">
				<Button variant="ghost" className="w-full" onClick={onReset}>
					Reset filters
				</Button>
			</div>
		</div>
	)
}

export default Filters

