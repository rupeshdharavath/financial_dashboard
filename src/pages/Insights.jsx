import InsightsPanel from '../components/insights/InsightsPanel.jsx'
import { useFinance } from '../context/FinanceContext.jsx'
import { getInsights } from '../utils/getInsights'

function Insights() {
	const { transactions } = useFinance()
	const insights = getInsights(transactions)

	return (
		<div className="space-y-5">
			<div>
				<h2 className="text-xl font-bold text-slate-900">Insights</h2>
				<p className="text-sm text-slate-600">
					A quick read on your spending and cash flow patterns.
				</p>
			</div>

			<InsightsPanel insights={insights} />
		</div>
	)
}

export default Insights

