import React from 'react'
import { Form, Input, Button, Card } from 'antd'
import { grey } from '@ant-design/colors'

export const LogIn = () => {
    const onFinish = (values) => {
        localStorage.setItem('username', values.username)
        localStorage.setItem('password', values.password)
    }

    const formStyle = {
        background: grey[0],
    }

    return (
        <Card title='Amplitudo academy homework 3' style={formStyle}>
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
    )
}
