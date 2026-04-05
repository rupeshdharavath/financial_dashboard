import BalanceChart from '../components/dashboard/BalanceChart.jsx'
import CategoryChart from '../components/dashboard/CategoryChart.jsx'
import SummaryCards from '../components/dashboard/SummaryCards.jsx'
import { useFinance } from '../context/FinanceContext.jsx'
import { calculateSummary } from '../utils/calculateSummary'

function Dashboard() {
	const { transactions } = useFinance()
	const summary = calculateSummary(transactions)

	return (
		<div className="space-y-5">
			<SummaryCards summary={summary} />

			<div className="grid gap-5 lg:grid-cols-2">
				<BalanceChart transactions={transactions} />
				<CategoryChart transactions={transactions} />
			</div>
		</div>
	)
}

export default Dashboard

