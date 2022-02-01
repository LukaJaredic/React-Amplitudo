import React, { useRef } from 'react'
import './QuestionCard.css'

export const QuestionCard = ({
    question = { answers: [], correct: -1, question: '' },
    handleCorrectAnswer = () => {},
    handleWrongAnswer = () => {},
    getNextQuestion = () => {},
}) => {
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
        <div className='question-card'>
            <h2 className='question-card__header'>Q: {question.question}</h2>
            <ul>
                {question.answers.map((answer, index) => (
                    <li
                        className='question-card__answer'
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
