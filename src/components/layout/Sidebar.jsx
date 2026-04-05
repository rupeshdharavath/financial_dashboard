import { NavLink } from 'react-router-dom'

const links = [
	{ to: '/dashboard', label: 'Overview' },
	{ to: '/transactions', label: 'Transactions' },
	{ to: '/insights', label: 'Insights' },
]

function Sidebar() {
	return (
		<aside className="w-full border-b border-slate-200 bg-slate-950 px-4 py-3 text-white md:flex md:w-72 md:flex-col md:border-b-0 md:border-r md:px-5 md:py-6">
			<div className="mb-4 hidden md:block">
				<p className="text-xs uppercase tracking-[0.25em] text-emerald-300">Finance</p>
				<p className="mt-1 text-lg font-semibold text-white">Dashboard</p>
			</div>
			<nav className="flex gap-2 md:flex-col">
				{links.map((link) => (
					<NavLink
						key={link.to}
						to={link.to}
						className={({ isActive }) =>
							`rounded-lg px-3 py-2 text-sm font-medium transition ${
								isActive
									? 'bg-emerald-500 text-white'
									: 'text-slate-200 hover:bg-slate-800 hover:text-white'
							}`
						}
					>
						{link.label}
					</NavLink>
				))}
			</nav>
		</aside>
	)
}

export default Sidebar

