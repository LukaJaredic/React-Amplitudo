import './App.css'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LogIn } from './pages/LogIn/LogIn'
import 'antd/dist/antd.css'
import { ProtectedRoute } from './pages/ProtectedRoute/ProtectedRoute'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='login' element={<LogIn />} />

                <Route
                    path='/'
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
