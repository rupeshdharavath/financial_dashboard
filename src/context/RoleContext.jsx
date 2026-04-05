import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'finance-dashboard-role'

const RoleContext = createContext(null)

export function RoleProvider({ children }) {
	const [role, setRole] = useState(() => localStorage.getItem(STORAGE_KEY) || 'viewer')

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, role)
	}, [role])

	const value = useMemo(
		() => ({
			role,
			setRole,
			loginAsAdmin: () => setRole('admin'),
			logoutToViewer: () => setRole('viewer'),
			isAdmin: role === 'admin',
		}),
		[role],
	)

	return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>
}

export function useRole() {
	const context = useContext(RoleContext)
	if (!context) {
		throw new Error('useRole must be used within RoleProvider')
	}
	return context
}

