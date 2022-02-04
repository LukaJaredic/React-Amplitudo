import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'

export const IDCard = ({ name, surname, city, dob, imgSrc, imgAlt }) => {
    console.log(imgSrc)
    return (
        <Card hoverable style={{ width: 240 }} cover={<img alt={imgAlt} src={imgSrc} />}>
            <Meta title={name + ' ' + surname} description={`Rodjen/a ${dob} u ${city}`} />
        </Card>
    )
}
