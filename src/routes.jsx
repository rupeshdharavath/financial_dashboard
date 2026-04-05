import { Navigate, Route, Routes } from 'react-router-dom'
import AdminLogin from './pages/AdminLogin.jsx'
import AdminLogout from './pages/AdminLogout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Insights from './pages/Insights.jsx'
import Transactions from './pages/Transactions.jsx'

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/dashboard" replace />} />
			<Route path="/admin-login" element={<AdminLogin />} />
			<Route path="/admin-logout" element={<AdminLogout />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/transactions" element={<Transactions />} />
			<Route path="/insights" element={<Insights />} />
		</Routes>
	)
}

export default AppRoutes

