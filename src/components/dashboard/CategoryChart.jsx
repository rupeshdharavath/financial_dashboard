import Card from '../common/Card.jsx'
import { formatCurrency } from '../../utils/formatCurrency'

function CategoryChart({ transactions }) {
	const categoryTotals = transactions
		.filter((tx) => tx.type === 'expense')
		.reduce((acc, tx) => {
			acc[tx.category] = (acc[tx.category] || 0) + tx.amount
			return acc
		}, {})

	const categories = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1])
	const highest = categories[0]?.[1] || 1

	return (
		<Card title="Spending Breakdown">
			{categories.length === 0 ? (
				<p className="text-sm text-slate-500">No expense data available.</p>
			) : (
				<div className="space-y-3">
					{categories.map(([category, total]) => (
						<div key={category}>
							<div className="mb-1 flex justify-between text-sm text-slate-700">
								<span>{category}</span>
								<span>{formatCurrency(total)}</span>
							</div>
							<div className="h-2 rounded-full bg-slate-200">
								<div
									className="h-2 rounded-full bg-emerald-600"
									style={{ width: `${(total / highest) * 100}%` }}
								/>
							</div>
						</div>
					))}
				</div>
			)}
		</Card>
	)
}

export default CategoryChart

