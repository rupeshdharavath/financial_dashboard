import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import Button from '../components/common/Button.jsx'
import Card from '../components/common/Card.jsx'
import { useRole } from '../context/RoleContext.jsx'

function AdminLogin() {
	const { role, loginAsAdmin } = useRole()

	useEffect(() => {
		loginAsAdmin()
	}, [loginAsAdmin])

	if (role === 'admin') {
		return <Navigate to="/dashboard" replace />
	}

	return (
		<div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
			<Card title="Admin Login" className="max-w-md w-full">
				<p className="text-sm text-slate-600">
					This hidden route switches the interface into admin mode.
				</p>
				<Button className="mt-4" onClick={loginAsAdmin}>
					Enter Admin Mode
				</Button>
			</Card>
		</div>
	)
}

export default AdminLogin