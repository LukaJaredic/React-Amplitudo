import React from 'react'
import { Layout, Menu } from 'antd'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import { LogIn } from '../LogIn/LogIn'
const { Header, Content, Footer } = Layout

export const Dashboard = () => {
    const layoutStyle = { minHeight: '100vh' }

    return (
        <Layout className='layout' style={layoutStyle}>
            <Header>
                <div className='logo' />
                <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
                    <Menu.Item key={1}>
                        <Link to='celebrities'>Celebrities</Link>
                    </Menu.Item>
                    <Menu.Item key={2}>
                        <Link to='books'>Books</Link>
                    </Menu.Item>
                    <Menu.Item key={3}>
                        <Link to='movies'>Movies</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '20px 50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='site-layout-content' style={{ width: '100%' }}>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2022 Created by Luigi</Footer>
        </Layout>
    )
}
