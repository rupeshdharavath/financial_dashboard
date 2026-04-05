import { useState } from 'react'
import Button from '../common/Button.jsx'
import Input from '../common/Input.jsx'
import { formatCurrency } from '../../utils/formatCurrency'

function TransactionRow({ transaction, isAdmin, onSave }) {
	const [editing, setEditing] = useState(false)
	const [form, setForm] = useState({
		description: transaction.description,
		category: transaction.category,
		amount: transaction.amount,
	})

	const onSubmit = (e) => {
		e.preventDefault()
		onSave(transaction.id, {
			description: form.description,
			category: form.category,
			amount: Number(form.amount),
		})
		setEditing(false)
	}

	if (editing) {
		return (
			<tr className="border-b border-slate-100">
				<td colSpan="6" className="p-3">
					<form onSubmit={onSubmit} className="grid gap-3 md:grid-cols-4">
						<Input
							label="Description"
							value={form.description}
							onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
							required
						/>
						<Input
							label="Category"
							value={form.category}
							onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
							required
						/>
						<Input
							label="Amount"
							value={form.amount}
							type="number"
							min="1"
							onChange={(e) => setForm((prev) => ({ ...prev, amount: e.target.value }))}
							required
						/>
						<div className="flex items-end gap-2">
							<Button type="submit" size="sm">
								Save
							</Button>
							<Button
								variant="ghost"
								size="sm"
								onClick={() => {
									setEditing(false)
									setForm({
										description: transaction.description,
										category: transaction.category,
										amount: transaction.amount,
									})
								}}
							>
								Cancel
							</Button>
						</div>
					</form>
				</td>
			</tr>
		)
	}

	return (
		<tr className="border-b border-slate-100 text-sm">
			<td className="px-3 py-3 text-slate-600">{transaction.date}</td>
			<td className="px-3 py-3 font-medium text-slate-800">{transaction.description}</td>
			<td className="px-3 py-3 text-slate-700">{transaction.category}</td>
			<td className="px-3 py-3">
				<span
					className={`rounded-full px-2 py-1 text-xs font-semibold ${
						transaction.type === 'income'
							? 'bg-emerald-100 text-emerald-700'
							: 'bg-rose-100 text-rose-700'
					}`}
				>
					{transaction.type}
				</span>
			</td>
			<td className="px-3 py-3 font-semibold text-slate-900">
				{transaction.type === 'expense' ? '-' : '+'}
				{formatCurrency(transaction.amount)}
			</td>
			<td className="px-3 py-3">
				{isAdmin ? (
					<Button variant="ghost" size="sm" onClick={() => setEditing(true)}>
						Edit
					</Button>
				) : (
					<span className="text-xs text-slate-400">View only</span>
				)}
			</td>
		</tr>
	)
}

export default TransactionRow

