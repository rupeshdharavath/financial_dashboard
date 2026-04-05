export function calculateSummary(transactions) {
	const totals = transactions.reduce(
		(acc, tx) => {
			if (tx.type === 'income') {
				acc.income += tx.amount
			} else {
				acc.expense += tx.amount
			}
			return acc
		},
		{
			income: 0,
			expense: 0,
		},
	)

	return {
		...totals,
		balance: totals.income - totals.expense,
	}
}

