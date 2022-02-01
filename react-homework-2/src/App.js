import './App.css'
import { useState } from 'react'
import { Button } from './components/Button/Button'
import { Clock } from './components/Clock/Clock'
import { QuestionCard } from './components/QuestionCard/QuestionCard'
import questions from './questions'

function App() {
    const [quizStarted, setQuizStarted] = useState(false)
    const [quizEnded, setQuizEnded] = useState(false)
    const [correct, setCorrect] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [clock, setClock] = useState(<Clock time={10} timeRanOutHandler={timeRanOut} />)

    const nextQuestion = () => {
        if (currentQuestion !== 10) setCurrentQuestion((prev) => prev + 1)
        else setQuizEnded(true)
    }

    //Cannot be an arrow f because arrow fs cannot be used in an earlier line of code then the line where u declare them
    function timeRanOut() {
        setQuizEnded(true)
        setClock(null)
    }

    const restart = () => {
        setQuizStarted((prev) => !prev)
        setQuizEnded(false)
        setCorrect(0)
        setCurrentQuestion(0)
        setClock(<Clock time={10} timeRanOutHandler={timeRanOut} />)
        setQuizStarted(true)
    }

    return (
        <div className='App'>
            <h1>Quiz</h1>
            {quizStarted ? clock : <Button text={'Start'} clickHandler={() => setQuizStarted(true)} />}

            {quizStarted && !quizEnded ? (
                <QuestionCard
                    question={questions[currentQuestion]}
                    handleCorrectAnswer={() => setCorrect((prev) => prev + 1)}
                    getNextQuestion={nextQuestion}
                />
            ) : (
                <></>
            )}

            {quizEnded ? (
                <>
                    <h2>Correct answers: {correct} / 10</h2>
                    <Button text={'new game'} clickHandler={restart} />
                </>
            ) : (
                <></>
            )}
        </div>
    )
}

export default App
