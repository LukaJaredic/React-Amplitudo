import React from 'react'
import { Layout, Menu } from 'antd'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import './Dashboard.css'

const { Header, Content, Footer } = Layout

export const Dashboard = () => {
    const navigate = useNavigate()

    const onLogOut = () => {
        localStorage.clear()
        navigate('/login')
    }

    const layoutStyle = { minHeight: '100vh' }

    return (
        <Layout className='layout' style={layoutStyle}>
            <Header>
                <div className='logo' />
                <Menu theme='dark' mode='horizontal'>
                    <Menu.Item key={1}>
                        <NavLink to='celebrities'>Celebrities</NavLink>
                    </Menu.Item>
                    <Menu.Item key={2}>
                        <NavLink to='books'>Books</NavLink>
                    </Menu.Item>
                    <Menu.Item key={3}>
                        <NavLink to='movies'>Movies</NavLink>
                    </Menu.Item>

                    <Menu.Item className='log-out' onClick={onLogOut}>
                        Log out
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '20px 50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='site-layout-content' style={{ width: '100%' }}>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Amplitudo d.o.o ©2022 Created by Luigi</Footer>
        </Layout>
    )
}
