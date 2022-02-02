import React from 'react'

export const Slika = ({ src, alt }) => {
    return (
        <div className='img-wrapper'>
            <img src={src} alt={alt} />
        </div>
    )
}
