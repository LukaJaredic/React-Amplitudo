import logo from './logo.svg'
import './App.css'
import { Lista } from './components/Lista/Lista'
import { LicnaKarta } from './components/LicnaKarta/LicnaKarta'
import { Slika } from './components/Slika/Slika'
import { Knjiga } from './components/Knjiga/Knjiga'
import { Film } from './components/Film/Film'

function App() {
    return (
        <div className='App'>
            <Lista>
                <h1 class='main__heading'>Celebrities:</h1>
                <LicnaKarta name='Ronaldo' surname='de Assis Moreira' dob='21/3/1980' city='Porto Alegre'>
                    <Slika src='images/ronaldinjo.jpg' alt='Young Ronaldiho in black and white sweater' />
                </LicnaKarta>
                <LicnaKarta name='Mikhail' surname='Tal' dob='9/11/1936' city='Riga'>
                    <Slika src='images/tal.jfif' alt='Young tall playing chess' />
                </LicnaKarta>
                <LicnaKarta name='Gautama' surname='Buddha' dob='6th centry BCE' city='Lumbini'>
                    <Slika src='images/buddha.jpg' alt='A stone statue of Buddha meditating' />
                </LicnaKarta>

                <h1 class='main__heading'>Books:</h1>

                <Knjiga
                    title='Power of now'
                    year={2004}
                    author='Eckart Tolle'
                    quote='Emotions arise in the place where your mind and body meet'
                >
                    <Slika src='images/powerOfNow.jfif' alt='The power of now cover' />
                </Knjiga>
                <Knjiga
                    title='The untethered soul'
                    year={2007}
                    author='Michael A. Singer'
                    quote='Only you can take inner freedom away from yourself, or give it to yourself.'
                >
                    <Slika src='images/untetheredSoul.jfif' alt='The untethered soul cover' />
                </Knjiga>
                <Knjiga
                    title='The Brothers Karamazov'
                    year={1879}
                    author='Fyodor Dostoevsky'
                    quote="Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love."
                >
                    <Slika src='images/brothersKaramazov.jfif' alt='brothers karamazov cover' />
                </Knjiga>

                <h1 className='meain__heading'>Movies: </h1>

                <Film
                    title='12 angry men'
                    year={1957}
                    ganre='Drama'
                    author='Reginald Rose'
                    actors='Henry Fonda, Jack Klugman'
                >
                    <Slika src='images/12angryMen.jfif' alt='12 angry men cover' />
                </Film>

                <Film
                    title='Pulp Fiction'
                    year={1994}
                    ganre='Crime/Drama'
                    author=' Quentin Tarantino'
                    actors='Uma Thruman, Samuel L. Jackson'
                >
                    <Slika src='images/pulpFiction.jfif' alt='Pulp Fiction cover' />
                </Film>

                <Film
                    title='Step up'
                    year={2006}
                    ganre='Dance/Musical'
                    author='Anne Fletcher'
                    actors='Channing Tatum, Drew Sigora'
                >
                    <Slika src='images/stepUp.jfif' alt='Step up cover' />
                </Film>
            </Lista>
        </div>
    )
}

export default App
