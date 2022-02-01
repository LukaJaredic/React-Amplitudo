import React from 'react'

export const Button = ({ text, clickHandler }) => {
    return <button onClick={clickHandler}>{text}</button>
}
