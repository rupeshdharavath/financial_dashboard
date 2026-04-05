import EmptyState from '../common/EmptyState.jsx'
import TransactionRow from './TransactionRow.jsx'

function TransactionTable({ transactions, isAdmin, onSave }) {
	if (!transactions.length) {
		return (
			<EmptyState
				title="No transactions found"
				description="Try changing filters or add a new transaction as admin."
			/>
		)
	}

	return (
		<div className="overflow-x-auto rounded-xl border border-slate-200">
			<table className="min-w-full bg-white">
				<thead className="bg-slate-50">
					<tr className="text-left text-xs uppercase tracking-wide text-slate-500">
						<th className="px-3 py-3">Date</th>
						<th className="px-3 py-3">Description</th>
						<th className="px-3 py-3">Category</th>
						<th className="px-3 py-3">Type</th>
						<th className="px-3 py-3">Amount</th>
						<th className="px-3 py-3">Action</th>
					</tr>
				</thead>
				<tbody>
					{transactions.map((transaction) => (
						<TransactionRow
							key={transaction.id}
							transaction={transaction}
							isAdmin={isAdmin}
							onSave={onSave}
						/>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default TransactionTable

