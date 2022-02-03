import './App.css'
import { useState } from 'react'
import { Button } from './components/Button/Button'
import { Clock } from './components/Clock/Clock'
import { QuestionCard } from './components/QuestionCard/QuestionCard'
import questions from './questions'

function App() {
    const [quizStarted, setQuizStarted] = useState(false)
    const [quizEnded, setQuizEnded] = useState(false)
    const [questionList, setQuestionList] = useState([])
    const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0)

    const [correct, setCorrect] = useState(0)
    const [time, setTime] = useState(60)
    const [message, setMessage] = useState('')

    const startQuiz = () => {
        const newQuestions = []

        while (newQuestions.length < 10) {
            let randIndex = Math.floor(Math.random() * questions.length)
            let newQuestion = questions[randIndex]
            if (!newQuestions.includes(newQuestion)) newQuestions.push(newQuestion)
        }
        setQuestionList(newQuestions)
        setTime((prev) => prev - prev) //needed to trigger useEffect in Clock
        setTimeout(() => {
            setTime((prev) => prev + 60)
            setQuizStarted(true)
        })
    }
    const nextQuestion = () => {
        if (currentQuestionIndex < 9) setcurrentQuestionIndex((prev) => prev + 1)
        else {
            setQuizEnded(true)
        }
    }

    //Cannot be an arrow f because arrow fs cannot be used in an earlier line of code then the line where u declare them
    function timeRanOut() {
        setQuizEnded(true)
    }

    const restart = () => {
        setMessage(' is starting in 2 seconds...')
        setTimeout(() => {
            setMessage('')
            setQuizStarted(false)
            setQuizEnded(false)
            setCorrect(0)
            setcurrentQuestionIndex(0)
            startQuiz()
        }, 2000)
    }

    return (
        <div className='App'>
            <h1>Quiz</h1>

            {quizStarted && !quizEnded ? (
                <>
                    <Clock time={time} timeRanOutHandler={timeRanOut} />
                    <QuestionCard
                        question={questionList[currentQuestionIndex]}
                        handleCorrectAnswer={() => setCorrect((prev) => prev + 1)}
                        getNextQuestion={nextQuestion}
                    />
                </>
            ) : message.length === 0 ? (
                <Button text={'Start'} clickHandler={restart} />
            ) : (
                ''
            )}

            {quizEnded && message.length === 0 ? (
                <>
                    <h1>Quiz finished</h1>
                    <h2>Correct answers: {correct} / 10</h2>
                    <h3>Click start to start again</h3>
                </>
            ) : (
                <></>
            )}

            {message.length > 0 ? (
                <div className='message'>
                    <h2>{message}</h2>
                </div>
            ) : (
                <></>
            )}
            <div className='background-1'></div>
            <div className='background-2'></div>
        </div>
    )
}

export default App
