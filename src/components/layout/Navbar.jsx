import { useNavigate } from 'react-router-dom'
import Button from '../common/Button.jsx'
import { useRole } from '../../context/RoleContext.jsx'

function Navbar() {
	const navigate = useNavigate()
	const { isAdmin, logoutToViewer } = useRole()

	const handleLogout = () => {
		logoutToViewer()
		navigate('/')
	}

	return (
		<header className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white/80 px-5 py-4 backdrop-blur">
			<div>
				<p className="text-xs uppercase tracking-[0.2em] text-emerald-700">Finance Dashboard</p>
				<h1 className="text-xl font-bold text-slate-900">Personal Money Tracker</h1>
			</div>

			<div className="flex items-center gap-3">
				<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
					{new Date().toLocaleDateString()}
				</span>

				{isAdmin ? (
					<Button variant="ghost" size="sm" onClick={handleLogout}>
						Admin Logout
					</Button>
				) : null}
			</div>
		</header>
	)
}

export default Navbar

