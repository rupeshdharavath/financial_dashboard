import Navbar from './Navbar.jsx'
import Sidebar from './Sidebar.jsx'

function Layout({ children }) {
	return (
		<div className="min-h-screen bg-slate-100">
			<div className="flex min-h-screen w-full flex-col md:flex-row">
				<Sidebar />

				<div className="flex min-h-screen flex-1 flex-col">
					<div className="flex min-h-screen flex-1 flex-col overflow-hidden bg-white md:rounded-none md:border-l md:border-slate-200">
						<Navbar />
						<main className="flex-1 p-5 text-left md:p-6">{children}</main>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Layout

