import Card from '../common/Card.jsx'
import { formatCurrency } from '../../utils/formatCurrency'

function buildSeries(transactions) {
	const monthMap = {}

	const sorted = [...transactions].sort(
		(a, b) => new Date(a.date) - new Date(b.date),
	)

	sorted.forEach((tx) => {
		const d = new Date(tx.date)
		const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
		if (!monthMap[key]) {
			monthMap[key] = 0
		}
		monthMap[key] += tx.type === 'income' ? tx.amount : -tx.amount
	})

	let running = 0
	return Object.entries(monthMap).map(([month, net]) => {
		running += net
		return { month, value: running }
	})
}

function BalanceChart({ transactions }) {
	const points = buildSeries(transactions)

	if (points.length === 0) {
		return (
			<Card title="Balance Trend">
				<p className="text-sm text-slate-500">No data available.</p>
			</Card>
		)
	}

	const width = 560
	const height = 220
	const padding = 22
	const values = points.map((p) => p.value)
	const min = Math.min(...values)
	const max = Math.max(...values)
	const safeRange = max - min || 1

	const linePoints = points
		.map((point, index) => {
			const x =
				padding +
				(index * (width - padding * 2)) / Math.max(points.length - 1, 1)
			const y =
				height - padding - ((point.value - min) / safeRange) * (height - padding * 2)
			return `${x},${y}`
		})
		.join(' ')

	return (
		<Card title="Balance Trend">
			<div className="w-full overflow-x-auto">
				<svg viewBox={`0 0 ${width} ${height}`} className="min-w-[520px]">
					<rect x="0" y="0" width={width} height={height} fill="#f8fafc" rx="10" />
					<polyline
						fill="none"
						stroke="#1f7a5d"
						strokeWidth="3"
						points={linePoints}
					/>
					{points.map((point, index) => {
						const x =
							padding +
							(index * (width - padding * 2)) / Math.max(points.length - 1, 1)
						const y =
							height -
							padding -
							((point.value - min) / safeRange) * (height - padding * 2)

						return (
							<g key={point.month}>
								<circle cx={x} cy={y} r="4" fill="#12513f" />
								<text x={x} y={height - 6} textAnchor="middle" fontSize="11" fill="#475569">
									{point.month.slice(5)}
								</text>
							</g>
						)
					})}
				</svg>
			</div>

			<p className="mt-2 text-sm text-slate-600">
				Latest running balance: {formatCurrency(points[points.length - 1].value)}
			</p>
		</Card>
	)
}

export default BalanceChart

