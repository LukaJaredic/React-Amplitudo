import React from 'react'
import './Movie.css'

export const Movie = ({ title, year, ganre, author, actors, children }) => {
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
