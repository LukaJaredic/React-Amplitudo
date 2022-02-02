import React from 'react'
import './Book.css'

export const Book = ({ title, year, author, quote, children }) => {
    return (
        <div className='book__wrapper'>
            <h1 className='book__title'>{title}</h1>
            <h2 className='book__year'>{year}</h2>
            <h2 className='book__author'>{author}</h2>
            {children}
            <h3 className='book__quote'>"{quote}"</h3>
        </div>
    )
}
