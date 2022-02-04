import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate()
    let username = localStorage.getItem('username')

    useEffect(() => {
        if (!username) navigate('/login')
    }, [])

    return children
}
