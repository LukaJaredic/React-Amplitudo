import React, { useRef } from 'react'
import './QuestionCard.css'

export const QuestionCard = ({
    question = { answers: [], correct: -1, question: '' },
    handleCorrectAnswer = () => {},
    handleWrongAnswer = () => {},
    getNextQuestion = () => {},
}) => {
    let correctAnswerRef = useRef(null)
    let userAnswerRef = useRef(null)
    let ulRef = useRef(null) //used to disable clicks between questions

    const handleAnswer = (event) => {
        ulRef.current.style['pointer-events'] = 'none'
        correctAnswerRef.current.style.background = 'green'
        userAnswerRef.current = event.currentTarget

        if (correctAnswerRef.current !== userAnswerRef.current) {
            userAnswerRef.current.style.background = 'tomato'
        } else {
            handleCorrectAnswer()
        }

        setTimeout(() => {
            correctAnswerRef.current.style.background = 'white'
            userAnswerRef.current.style.background = 'white'
            ulRef.current.style['pointer-events'] = 'auto'

            getNextQuestion()
        }, 350)
    }

    return (
        <div className='question-card'>
            <h2 className='question-card__header'>Q: {question.question}</h2>
            <ul ref={ulRef}>
                {question.answers.map((answer, index) => (
                    <li
                        className='question-card__answer'
                        key={question.id + '-' + index}
                        ref={question.correct === index ? correctAnswerRef : null}
                        onClick={(event) => handleAnswer(event)}
                    >
                        {answer}
                    </li>
                ))}
            </ul>
        </div>
    )
}
