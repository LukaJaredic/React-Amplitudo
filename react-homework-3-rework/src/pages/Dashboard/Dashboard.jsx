import React from 'react'
import { Layout, Menu } from 'antd'
const { Header, Content, Footer } = Layout

export const Dashboard = () => {
    const layoutStyle = { minHeight: '100vh' }

    return (
        <Layout className='layout' style={layoutStyle}>
            <Header>
                <div className='logo' />
                <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
                    <Menu.Item key={1}>Celebrities</Menu.Item>
                    <Menu.Item key={2}>Books</Menu.Item>
                    <Menu.Item key={3}>Movies</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className='site-layout-content'>Content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}
