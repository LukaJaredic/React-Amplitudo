import React, { useRef } from 'react'

export const QuestionCard = ({ question, handleCorrectAnswer, handleWrongAnswer, getNextQuestion }) => {
    let rightAnswer = useRef(null)
    let userAnswer = useRef(null)

    const handleAnswer = (event) => {
        rightAnswer.current.style.background = 'green'
        userAnswer.current = event.currentTarget

        if (rightAnswer.current !== userAnswer.current) {
            userAnswer.current.style.background = 'tomato'
        } else {
            handleCorrectAnswer()
        }

        setTimeout(() => {
            rightAnswer.current.style.background = 'white'
            userAnswer.current.style.background = 'white'

            getNextQuestion()
        }, 350)
    }

    return (
        <div>
            <h2>Q: {question.question}</h2>
            <ul>
                {question.answers.map((answer, index) => (
                    <li
                        key={index}
                        ref={question.correct === index ? rightAnswer : null}
                        onClick={(event) => handleAnswer(event)}
                    >
                        {answer}
                    </li>
                ))}
            </ul>
        </div>
    )
}
