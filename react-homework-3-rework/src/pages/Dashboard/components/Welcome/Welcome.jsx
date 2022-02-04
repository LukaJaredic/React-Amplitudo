import React from 'react'
import { Typography } from 'antd'

const { Title } = Typography

export const Welcome = () => {
    let username = localStorage.getItem('username')
    const welcomeStyle = { textAlign: 'center' }
    return (
        <section style={welcomeStyle}>
            <Title level={3}>Hi {username}!</Title>
            <Title level={1}>Welcome to a website about my favourite people, books and movies.</Title>
            <Title level={3}>Hope you find something interesting!</Title>
        </section>
    )
}
