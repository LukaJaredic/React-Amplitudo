import './App.css'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LogIn } from './pages/LogIn/LogIn'
import 'antd/dist/antd.css'
import { ProtectedRoute } from './pages/ProtectedRoute/ProtectedRoute'
import { IDCard } from './components/IDCard/IDCard'
import { books, celebrities, movies } from './data'
import { List } from './components/List/List'
import { Welcome } from './pages/Dashboard/components/Welcome/Welcome'
import { Book } from './components/Book/Book'
import { Movie } from './components/Movie/Movie'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='login' element={<LogIn />} />

                <Route
                    path='dashboard'
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                >
                    <Route path='' element={<Welcome />} />
                    <Route
                        path='celebrities'
                        element={
                            <List>
                                {celebrities.map((celebrity) => (
                                    <IDCard
                                        name={celebrity.name}
                                        surname={celebrity.surname}
                                        dob={celebrity.dob}
                                        city={celebrity.city}
                                        imgSrc={celebrity.imgSrc}
                                        imgAlt={celebrity.imgAlt}
                                        key={celebrity.id}
                                    />
                                ))}
                            </List>
                        }
                    />
                    <Route
                        path='books'
                        element={
                            <List>
                                {books.map((book) => (
                                    <Book
                                        key={book.id}
                                        title={book.title}
                                        author={book.author}
                                        year={book.year}
                                        quote={book.quote}
                                        imgSrc={book.imgSrc}
                                        imgAlt={book.imgAlt}
                                    />
                                ))}
                            </List>
                        }
                    ></Route>
                    <Route
                        path='movies'
                        element={
                            <List>
                                {movies.map((movie) => (
                                    <Movie
                                        key={movie.id}
                                        title={movie.title}
                                        author={movie.author}
                                        year={movie.year}
                                        actors={movie.actors}
                                        imgSrc={movie.imgSrc}
                                        imgAlt={movie.imgAlt}
                                    />
                                ))}
                            </List>
                        }
                    ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
