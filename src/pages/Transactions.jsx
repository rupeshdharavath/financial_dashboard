import { useState } from 'react'
import Card from '../components/common/Card.jsx'
import Button from '../components/common/Button.jsx'
import Input from '../components/common/Input.jsx'
import Filters from '../components/transactions/Filters.jsx'
import SearchBar from '../components/transactions/SearchBar.jsx'
import TransactionTable from '../components/transactions/TransactionTable.jsx'
import { useFinance } from '../context/FinanceContext.jsx'
import { useRole } from '../context/RoleContext.jsx'
import { useFilters } from '../hooks/useFilters'
import { useTransactions } from '../hooks/useTransactions'

const initialForm = {
	date: new Date().toISOString().slice(0, 10),
	description: '',
	category: '',
	type: 'expense',
	amount: '',
}

function Transactions() {
	const { transactions, addTransaction, updateTransaction } = useFinance()
	const { isAdmin } = useRole()
	const filters = useFilters()

	const filteredTransactions = useTransactions(transactions, filters)
	const categories = [...new Set(transactions.map((tx) => tx.category))].sort()

	const [form, setForm] = useState(initialForm)

	function handleSubmit(e) {
		e.preventDefault()
		addTransaction({
			...form,
			amount: Number(form.amount),
		})
		setForm(initialForm)
	}

	return (
		<div className="space-y-5">
			{isAdmin ? (
				<Card title="Add Transaction">
					<form onSubmit={handleSubmit} className="grid gap-3 md:grid-cols-5">
						<Input
							label="Date"
							type="date"
							value={form.date}
							onChange={(e) => setForm((prev) => ({ ...prev, date: e.target.value }))}
							required
						/>
						<Input
							label="Description"
							value={form.description}
							onChange={(e) =>
								setForm((prev) => ({ ...prev, description: e.target.value }))
							}
							placeholder="Salary, Groceries, Rent"
							required
						/>
						<Input
							label="Category"
							value={form.category}
							onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
							placeholder="Food, Transport, etc."
							required
						/>
						<label className="text-sm text-slate-700">
							<span className="mb-1 block font-medium">Type</span>
							<select
								value={form.type}
								onChange={(e) => setForm((prev) => ({ ...prev, type: e.target.value }))}
								className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-emerald-100 focus:border-emerald-600 focus:ring-2"
							>
								<option value="expense">Expense</option>
								<option value="income">Income</option>
							</select>
						</label>
						<Input
							label="Amount"
							type="number"
							min="1"
							step="1"
							value={form.amount}
							onChange={(e) => setForm((prev) => ({ ...prev, amount: e.target.value }))}
							required
						/>
						<div className="md:col-span-5">
							<Button type="submit">Add Transaction</Button>
						</div>
					</form>
				</Card>
			) : null}

			<Card title="Filter Transactions">
				<div className="space-y-3">
					<SearchBar value={filters.search} onChange={filters.setSearch} />
					<Filters
						category={filters.category}
						setCategory={filters.setCategory}
						type={filters.type}
						setType={filters.setType}
						sortBy={filters.sortBy}
						setSortBy={filters.setSortBy}
						categories={categories}
						onReset={filters.resetFilters}
					/>
				</div>
			</Card>

			<Card title="Transaction List">
				<TransactionTable
					transactions={filteredTransactions}
					isAdmin={isAdmin}
					onSave={updateTransaction}
				/>
			</Card>
		</div>
	)
}

export default Transactions

