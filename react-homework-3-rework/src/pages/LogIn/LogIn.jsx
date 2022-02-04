import React, { useEffect } from 'react'
import { Form, Input, Button, Card } from 'antd'
import { grey } from '@ant-design/colors'
import { useNavigate } from 'react-router-dom'

export const LogIn = () => {
    const navigate = useNavigate()

    const onFinish = (values) => {
        alert('finished')
        localStorage.setItem('username', values.username)
        localStorage.setItem('password', values.password)
        navigate('/')
    }

    const wrapperStyle = {
        display: 'flex',
        minWidth: '100vw',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        background: grey[0],
    }

    return (
        <div style={wrapperStyle}>
            <Card title='Amplitudo academy homework 3'>
                <h1>Please log in</h1>
                <Form
                    name='basic'
                    bacground='volcano-8'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={onFinish}
                    autoComplete='off'
                >
                    <Form.Item
                        label='Username'
                        name='username'
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Password'
                        name='password'
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type='primary' htmlType='submit'>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}
