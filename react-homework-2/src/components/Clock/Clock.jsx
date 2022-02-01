import React, { useEffect, useRef, useState } from 'react'

export const Clock = ({ time, timeRanOutHandler }) => {
    const [timeLeft, setTimeLeft] = useState(time)
    const timeIntervalRef = useRef(null)

    useEffect(() => {
        timeIntervalRef.current = setInterval(() => {
            if (timeLeft === 0) {
                timeRanOutHandler()
                return clearInterval(timeIntervalRef.current)
            }
            setTimeLeft((prev) => prev - 1)
        }, 1000)

        return () => clearInterval(timeIntervalRef.current)
    })
    return (
        <div>
            <p>Time left:</p>
            <span>{Math.floor(timeLeft / 60)}</span> : <span>{timeLeft % 60}</span>
        </div>
    )
}
