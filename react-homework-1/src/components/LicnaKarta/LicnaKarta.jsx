import React from 'react'
import './LicnaKarta.css'

export const LicnaKarta = ({ name, surname, dob, city, children }) => {
    return (
        <div className='id-card__wrapper'>
            <h1 className='id-card__name'>
                {name} {surname}
            </h1>
            <h2 className='id-card__dob'>Rodjen/a: {dob}</h2>
            <h3 className='id-card__city'>Rodjen/a u: {city}</h3>
            {children}
        </div>
    )
}
