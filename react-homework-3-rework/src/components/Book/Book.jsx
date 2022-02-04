import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'

export const Book = ({ title, year, author, quote, imgSrc, imgAlt }) => {
    return (
        <Card hoverable style={{ width: 240 }} cover={<img alt={imgAlt} src={imgSrc} />}>
            <Meta
                title={title}
                description={
                    <>
                        <h1>{author}</h1>
                        <h2>{year}.</h2>
                        <p>"{quote}"</p>
                    </>
                }
            />
        </Card>
    )
}
