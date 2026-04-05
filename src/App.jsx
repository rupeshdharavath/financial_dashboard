import { BrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import { FinanceProvider } from './context/FinanceContext.jsx'
import { RoleProvider } from './context/RoleContext.jsx'
import AppRoutes from './routes.jsx'

function App() {
  return (
    <BrowserRouter>
      <RoleProvider>
        <FinanceProvider>
          <Layout>
            <AppRoutes />
          </Layout>
        </FinanceProvider>
      </RoleProvider>
    </BrowserRouter>
  )
}

export default App
