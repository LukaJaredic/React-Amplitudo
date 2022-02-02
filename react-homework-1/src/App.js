import './App.css'
import { List } from './components/List/List'
import { IDCard } from './components/IDCard/IDCard'
import { Slika } from './components/Image/Image'
import { Book } from './components/Book/Book'
import { Movie } from './components/Movie/Movie'

function App() {
    const celebrities = [
        {
            name: 'Ronaldo',
            surname: 'de Assis Moreira',
            dob: '21/3/1980',
            city: 'Porto Alegre',
            imgSrc: 'images/ronaldinjo.jpg',
            imgAlt: 'Ronaldinho in sweater',
        },
        {
            name: 'Mikhail',
            surname: 'Tal',
            dob: '9/11/1936',
            city: 'Riga',
            imgSrc: 'images/tal.jfif',
            imgAlt: 'Tal playing chess',
        },
        {
            name: 'Gautama',
            surname: 'Buddha',
            dob: '6th centry BCE',
            city: 'Lumbini',
            imgSrc: 'images/buddha.jpg',
            imgAlt: 'Stone statue of Buddha',
        },
    ]
    const books = [
        {
            title: 'Power of now',
            year: 2004,
            author: 'Eckart Tolle',
            quote: 'Emotions arise in the place where your mind and body meet',
            imgSrc: 'images/powerOfNow.jfif',
            imgAlt: 'lightblue book cover',
        },
        {
            title: 'The untethered soul',
            year: 2007,
            author: 'Michael A. Singer',
            quote: 'Only you can take inner freedom away from yourself, or give it to yourself.',
            imgSrc: 'images/untetheredSoul.jfif',
            imgAlt: 'Lightblue book cover with a horse on it',
        },
        {
            title: 'The Brothers Karamazov',
            year: 1879,
            author: 'Fyodor Dostoevsky',
            quote: "Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love.",
            imgSrc: 'images/brothersKaramazov.jfif',
            imgAlt: 'Book cover with 2 men on it',
        },
    ]
    const movies = [
        {
            title: '12 angry men',
            year: 1957,
            ganre: 'Drama',
            author: 'Reginald Rose',
            actors: 'Henry Fonda, Jack Klugman',
            imgSrc: 'images/12angryMen.jfif',
            imgAlt: 'black and white movie poster',
        },
        {
            title: 'Pulp Fiction',
            year: 1994,
            ganre: 'Crime/Drama',
            author: ' Quentin Tarantino',
            actors: 'Uma Thruman, Samuel L. Jackson',
            imgSrc: 'images/pulpFiction.jfif',
            imgAlt: 'Colorful movie poster',
        },
        {
            title: 'Step up',
            year: 2006,
            ganre: 'Dance/Musical',
            author: 'Anne Fletcher',
            actors: 'Channing Tatum, Drew Sigora',
            imgSrc: 'images/stepUp.jfif',
            imgAlt: 'Movie poster of a man and a woman dancing',
        },
    ]

    const celebrityList = celebrities.map((celebrity) => {
        return (
            <IDCard name={celebrity.name} surname={celebrity.surname} dob={celebrity.dob} city={celebrity.city}>
                <Slika src={celebrity.imgSrc} alt={celebrity.imgAlt} />
            </IDCard>
        )
    })
    const bookList = books.map((book) => {
        return (
            <Book title={book.title} year={book.year} author={book.author} quote={book.quote}>
                <Slika src={book.imgSrc} alt={book.imgAlt} />
            </Book>
        )
    })

    const movieList = movies.map((movie) => {
        return (
            <Movie
                title={movie.title}
                year={movie.year}
                ganre={movie.ganre}
                author={movie.author}
                actors={movie.actors}
            >
                <Slika src={movie.imgSrc} alt={movie.imgAlt} />
            </Movie>
        )
    })
    return (
        <div className='App'>
            <List>
                <h1 class='main__heading'>Celebrities:</h1>
                {celebrityList}
                <h1 class='main__heading'>Books:</h1>
                {bookList}
                <h1 className='meain__heading'>Movies: </h1>
                {movieList}
            </List>
        </div>
    )
}

export default App
