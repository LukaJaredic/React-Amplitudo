import React from 'react'
import './Button.css'

export const Button = ({ text, clickHandler }) => {
    return <button onClick={clickHandler}>{text}</button>
}
