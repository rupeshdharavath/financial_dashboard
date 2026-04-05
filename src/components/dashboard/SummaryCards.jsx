import Card from '../common/Card.jsx'
import { formatCurrency } from '../../utils/formatCurrency'

function SummaryCards({ summary }) {
	const items = [
		{
			label: 'Total Balance',
			value: formatCurrency(summary.balance),
			accent: 'text-emerald-700',
		},
		{
			label: 'Income',
			value: formatCurrency(summary.income),
			accent: 'text-emerald-600',
		},
		{
			label: 'Expenses',
			value: formatCurrency(summary.expense),
			accent: 'text-rose-600',
		},
	]

	return (
		<div className="grid gap-4 md:grid-cols-3">
			{items.map((item) => (
				<Card key={item.label}>
					<p className="text-sm text-slate-500">{item.label}</p>
					<p className={`mt-2 text-2xl font-bold ${item.accent}`}>{item.value}</p>
				</Card>
			))}
		</div>
	)
}

export default SummaryCards

