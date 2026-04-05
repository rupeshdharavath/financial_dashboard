import Card from '../common/Card.jsx'

function InsightsPanel({ insights }) {
	return (
		<div className="grid gap-4 md:grid-cols-3">
			<Card title="Highest Spending Category">
				<p className="text-lg font-semibold text-slate-900">{insights.highestSpendingCategory}</p>
			</Card>

			<Card title="Monthly Comparison">
				<p className="text-sm text-slate-700">{insights.monthlyComparison}</p>
			</Card>

			<Card title="Useful Observation">
				<p className="text-sm text-slate-700">{insights.usefulObservation}</p>
			</Card>
		</div>
	)
}

export default InsightsPanel

