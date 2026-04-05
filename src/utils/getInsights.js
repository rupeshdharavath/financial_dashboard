import { formatCurrency } from './formatCurrency'

function monthKey(dateStr) {
	const d = new Date(dateStr)
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
}

export function getInsights(transactions) {
	if (!transactions.length) {
		return {
			highestSpendingCategory: 'N/A',
			monthlyComparison: 'No transaction data available yet.',
			usefulObservation: 'Add transactions to unlock insights.',
		}
	}

	const expenseByCategory = {}
	const monthTotals = {}

	transactions.forEach((tx) => {
		if (tx.type === 'expense') {
			expenseByCategory[tx.category] =
				(expenseByCategory[tx.category] || 0) + tx.amount
		}

		const key = monthKey(tx.date)
		if (!monthTotals[key]) {
			monthTotals[key] = { income: 0, expense: 0 }
		}

		if (tx.type === 'income') {
			monthTotals[key].income += tx.amount
		} else {
			monthTotals[key].expense += tx.amount
		}
	})

	const highestSpendingCategory =
		Object.entries(expenseByCategory).sort((a, b) => b[1] - a[1])[0]?.[0] ||
		'N/A'

	const months = Object.keys(monthTotals).sort()
	const latestMonth = months[months.length - 1]
	const previousMonth = months[months.length - 2]

	const monthlyComparison = previousMonth
		? (() => {
				const latestNet =
					monthTotals[latestMonth].income - monthTotals[latestMonth].expense
				const previousNet =
					monthTotals[previousMonth].income - monthTotals[previousMonth].expense
				const delta = latestNet - previousNet
				const direction = delta >= 0 ? 'up' : 'down'
				return `Net cash flow is ${direction} ${formatCurrency(Math.abs(delta))} compared with ${previousMonth}.`
			})()
		: 'Need at least two months of data to compare trends.'

	const biggestExpense = transactions
		.filter((tx) => tx.type === 'expense')
		.sort((a, b) => b.amount - a.amount)[0]

	const usefulObservation = biggestExpense
		? `Largest single expense is ${biggestExpense.category} (${formatCurrency(biggestExpense.amount)}).`
		: 'No expenses recorded yet.'

	return {
		highestSpendingCategory,
		monthlyComparison,
		usefulObservation,
	}
}

