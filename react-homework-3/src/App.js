import './App.css'
import { LogIn } from './pages/LogIn/LogIn'
import 'antd/dist/antd.css'
import { grey } from '@ant-design/colors'
import { Dashboard } from './pages/Dashboard/Dashboard'

function App() {
    const appStyle = {
        background: grey[5],
    }

    return (
        <div className='App' style={appStyle}>
            <Dashboard />
        </div>
    )
}

export default App
