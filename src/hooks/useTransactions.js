import { useMemo } from 'react'

export function useTransactions(transactions, filters) {
	return useMemo(() => {
		const filtered = transactions.filter((tx) => {
			const matchesSearch =
				tx.description.toLowerCase().includes(filters.search.toLowerCase()) ||
				tx.category.toLowerCase().includes(filters.search.toLowerCase())

			const matchesCategory =
				filters.category === 'all' || tx.category === filters.category
			const matchesType = filters.type === 'all' || tx.type === filters.type

			return matchesSearch && matchesCategory && matchesType
		})

		const sorted = [...filtered].sort((a, b) => {
			switch (filters.sortBy) {
				case 'amount-asc':
					return a.amount - b.amount
				case 'amount-desc':
					return b.amount - a.amount
				case 'date-asc':
					return new Date(a.date) - new Date(b.date)
				case 'date-desc':
				default:
					return new Date(b.date) - new Date(a.date)
			}
		})

		return sorted
	}, [transactions, filters])
}

