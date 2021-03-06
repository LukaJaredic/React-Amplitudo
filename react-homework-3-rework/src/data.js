const celebrities = [
    {
        id: 1,
        name: 'Ronaldo',
        surname: 'de Assis Moreira',
        dob: '21/3/1980',
        city: 'Porto Alegre',
        imgSrc: '/images/ronaldinjo.jpg',
        imgAlt: 'Ronaldinho in sweater',
    },
    {
        id: 2,
        name: 'Mikhail',
        surname: 'Tal',
        dob: '9/11/1936',
        city: 'Riga',
        imgSrc: '/images/tal.jfif',
        imgAlt: 'Tal playing chess',
    },
    {
        id: 3,
        name: 'Gautama',
        surname: 'Buddha',
        dob: '6th centry BCE',
        city: 'Lumbini',
        imgSrc: '/images/buddha.jpg',
        imgAlt: 'Stone statue of Buddha',
    },
]
const books = [
    {
        id: 4,
        title: 'Power of now',
        year: 2004,
        author: 'Eckart Tolle',
        quote: 'Emotions arise in the place where your mind and body meet',
        imgSrc: '/images/powerOfNow.jfif',
        imgAlt: 'lightblue book cover',
    },
    {
        id: 5,
        title: 'The untethered soul',
        year: 2007,
        author: 'Michael A. Singer',
        quote: 'Only you can take inner freedom away from yourself, or give it to yourself.',
        imgSrc: '/images/untetheredSoul.jfif',
        imgAlt: 'Lightblue book cover with a horse on it',
    },
    {
        id: 9,
        title: 'The Brothers Karamazov',
        year: 1879,
        author: 'Fyodor Dostoevsky',
        quote: "Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love.",
        imgSrc: '/images/brothersKaramazov.jfif',
        imgAlt: 'Book cover with 2 men on it',
    },
]
const movies = [
    {
        id: 6,
        title: '12 angry men',
        year: 1957,
        ganre: 'Drama',
        author: 'Reginald Rose',
        actors: 'Henry Fonda, Jack Klugman',
        imgSrc: '/images/12angryMen.jfif',
        imgAlt: 'black and white movie poster',
    },
    {
        id: 7,
        title: 'Pulp Fiction',
        year: 1994,
        ganre: 'Crime/Drama',
        author: ' Quentin Tarantino',
        actors: 'Uma Thruman, Samuel L. Jackson',
        imgSrc: '/images/pulpFiction.jfif',
        imgAlt: 'Colorful movie poster',
    },
    {
        id: 8,
        title: 'Step up',
        year: 2006,
        ganre: 'Dance/Musical',
        author: 'Anne Fletcher',
        actors: 'Channing Tatum, Drew Sigora',
        imgSrc: '/images/stepUp.jfif',
        imgAlt: 'Movie poster of a man and a woman dancing',
    },
]

const data = { celebrities: celebrities, movies: movies, books: books }

export default data
