import React from 'react'
import './Film.css'
/*Naziv
Godina
Žanr
Režiser
Glumci
Slika (iskoristiti komponentu Slika)
Sve informacije se prosleđuju komponen
*/
export const Film = ({ title, year, ganre, author, actors, children }) => {
    return (
        <div className='movie__wrapper'>
            <h1 className='movie__title'>{title}</h1>
            <h2 className='movie__title'>{author}</h2>
            {children}
            <h3 className='movie__title'>{year}</h3>
            <h3 className='movie__ganre'>{ganre}</h3>
            <p className='movie__actors'>{actors}</p>
        </div>
    )
}
