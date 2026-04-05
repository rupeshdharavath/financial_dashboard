import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import Button from '../components/common/Button.jsx'
import Card from '../components/common/Card.jsx'
import { useRole } from '../context/RoleContext.jsx'

function AdminLogout() {
	const { role, logoutToViewer } = useRole()

	useEffect(() => {
		logoutToViewer()
	}, [logoutToViewer])

	if (role !== 'admin') {
		return <Navigate to="/dashboard" replace />
	}

	return (
		<div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
			<Card title="Admin Logout" className="max-w-md w-full">
				<p className="text-sm text-slate-600">
					This hidden route clears admin mode and returns the app to viewer mode.
				</p>
				<Button className="mt-4" variant="ghost" onClick={logoutToViewer}>
					Return to Viewer Mode
				</Button>
			</Card>
		</div>
	)
}

export default AdminLogout