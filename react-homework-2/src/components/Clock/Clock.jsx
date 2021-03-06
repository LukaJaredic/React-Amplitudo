import React, { useEffect, useRef, useState } from 'react'
import './Clock.css'

export const Clock = ({ time, timeRanOutHandler }) => {
    const [timeLeft, setTimeLeft] = useState(time)
    const timeIntervalRef = useRef(null)
    const wrapperRef = useRef(null)

    useEffect(() => {
        timeIntervalRef.current = setInterval(() => {
            setTimeLeft((prev) => prev - 1)
        }, 1000)
        return () => clearInterval(timeIntervalRef.current)
    }, [time])

    useEffect(() => {
        if (timeLeft <= 0) {
            clearInterval(timeIntervalRef.current)
            timeRanOutHandler()
        }

        if (timeLeft <= 26) {
            wrapperRef.current.style.color = 'tomato'
            if (timeLeft % 2 === 0) {
                wrapperRef.current.style.transform = 'scale(1.1)'
            } else {
                wrapperRef.current.style.transform = 'scale(1)'
            }
        } else {
            wrapperRef.current.style.color = 'inherit'
        }
    }, [timeLeft])

    return (
        <div className='clock'>
            <p className='clock__heading'>Time left:</p>
            <div className='time-wrapper' ref={wrapperRef}>
                <span className='time'>
                    {Math.floor(timeLeft / 60) < 10 ? '0' + Math.floor(timeLeft / 60) : Math.floor(timeLeft / 60)}
                </span>{' '}
                : <span className='time'>{timeLeft % 60 < 10 ? '0' + (timeLeft % 60) : timeLeft % 60}</span>
            </div>
        </div>
    )
}
