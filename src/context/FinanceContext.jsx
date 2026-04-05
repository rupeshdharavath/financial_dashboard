import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import initialTransactions from '../data/transactions'

const STORAGE_KEY = 'finance-dashboard-transactions'
const FinanceContext = createContext(null)

export function FinanceProvider({ children }) {
	const [transactions, setTransactions] = useState(() => {
		const stored = localStorage.getItem(STORAGE_KEY)
		if (!stored) {
			return initialTransactions
		}

		try {
			return JSON.parse(stored)
		} catch {
			return initialTransactions
		}
	})

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions))
	}, [transactions])

	const addTransaction = (transaction) => {
		const id = `t-${Date.now()}`
		setTransactions((prev) => [{ ...transaction, id }, ...prev])
	}

	const updateTransaction = (id, updates) => {
		setTransactions((prev) =>
			prev.map((tx) => (tx.id === id ? { ...tx, ...updates } : tx)),
		)
	}

	const value = useMemo(
		() => ({
			transactions,
			addTransaction,
			updateTransaction,
		}),
		[transactions],
	)

	return (
		<FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>
	)
}

export function useFinance() {
	const context = useContext(FinanceContext)
	if (!context) {
		throw new Error('useFinance must be used within FinanceProvider')
	}
	return context
}

