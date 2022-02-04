import { Col, Row } from 'antd'
import React from 'react'

export const List = ({ children }) => {
    return (
        <Row justify='space-around' align='middle' gutter={[16, 32]}>
            {children.map((child) => (
                <Col span={{ xs: 24, sm: 12, md: 8 }} key={child.key}>
                    {child}
                </Col>
            ))}
        </Row>
    )
}
