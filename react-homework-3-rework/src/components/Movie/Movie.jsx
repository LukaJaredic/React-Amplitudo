import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'

export const Movie = ({ title, year, ganre, author, actors, imgSrc, imgAlt }) => {
    return (
        <Card hoverable style={{ width: 240 }} cover={<img alt={imgAlt} src={imgSrc} />}>
            <Meta
                title={title}
                description={
                    <>
                        <h1>{author}</h1>
                        <h2>{year}.</h2>
                        <h3>{ganre}</h3>
                        <p>Actors: {actors}</p>
                    </>
                }
            />
        </Card>
    )
}
// {
//     id: 6,
//     title: '12 angry men',
//     year: 1957,
//     ganre: 'Drama',
//     author: 'Reginald Rose',
//     actors: 'Henry Fonda, Jack Klugman',
//     imgSrc: '/images/12angryMen.jfif',
//     imgAlt: 'black and white movie poster',
// },
