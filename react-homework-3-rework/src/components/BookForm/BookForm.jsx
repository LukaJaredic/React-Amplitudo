import React from 'react'
import { Form, Upload, InputNumber, Input, Button } from 'antd'

export const BookForm = ({ onFormCompleted }) => {
    const formItemLayout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 8,
        },
        layout: 'vertical',
    }

    return (
        <Form {...formItemLayout} onFinish={onFormCompleted}>
            <Form.Item label='Title' name='title' rules={[{ required: true, message: 'Please enter the book title' }]}>
                <Input />
            </Form.Item>
            <Form.Item
                label='Year'
                name='year'
                rules={[{ required: true, message: 'Please enter the year book was published' }]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item label='Author' name='author' rules={[{ required: true, message: 'Please enter books author' }]}>
                <Input />
            </Form.Item>
            <Form.Item
                label='Quote'
                name='quote'
                rules={[{ required: true, message: 'Please enter the most memorable quote from this book' }]}
            >
                <Input.TextArea />
            </Form.Item>
            <Form.Item
                label='Image'
                name='image'
                rules={[{ required: true, message: 'Please drag and drop book related photo' }]}
            >
                <Upload.Dragger>
                    <p>Drag photo here</p>
                    <p>or</p>
                    <p>click here to brows your disc</p>
                </Upload.Dragger>
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    xs: {
                        offset: 10,
                    },
                    sm: {
                        offset: 6,
                    },
                    md: { span: 12, offset: 7 },
                }}
            >
                <Button type='primary' htmlType='submit'>
                    Save
                </Button>
            </Form.Item>
        </Form>
    )
}
