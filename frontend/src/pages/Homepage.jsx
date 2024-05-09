import {useState, useEffect} from 'react';
import Layout from '../components/Layout/layout';
import Heading from '../components/Heading/heading';
import MovieList from '../components/MovieList/movieList';
import UserSelection from '../components/UserSelection/userSelection';
import { Spinner } from 'flowbite-react';

const Homepage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visualizzazione, setVisualizzazione] = useState('');
    const [genere, setGenere] = useState('');

    const fetchMovies = () => {
        setLoading(true);
        return fetch('http://localhost:8000/movies')
          .then(response => response.json())
          .then(data => {
            
            setMovies(data);
            setLoading(false);
          });
      }

      const filterByGenre = (movies, selectedGenres) => {
        setLoading(true);
    // Se non ci sono generi selezionati, restituisci tutti i film senza filtri
    if (!selectedGenres || selectedGenres.length === 0) {
        setLoading(false);
        return;
    


    }

    // Filtra i film in base ai generi selezionati
    const filteredMovies =  movies.filter(movie => selectedGenres.includes(movie.genre));
    setMovies(filteredMovies);
    setLoading(false);
    // console.log(filteredMovies, 'filteredMovies');
    

    
}
    
    const filteringViewType = () => {
        setLoading(true);
        //  let filteredMovies = [...movies]; 
        if(visualizzazione === "Rating"){
            const highToLowRatedMovies = movies.slice().sort((a, b) => b.rating - a.rating);
            setMovies(highToLowRatedMovies);
            setLoading(false);
            // console.log(highToLowRatedMovies, 'highToLowRatedMovies');
        } else if(visualizzazione === "Più recenti") {
            const mostRecent = movies.slice().sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
            setMovies(mostRecent);
            setLoading(false);
            // console.log(mostRecent, 'mostRecent');
        }
    //     if (Array.isArray(genere) && genere.length > 0) { // Verifica se genere è un array di stringhe e non è vuoto
    //     filteredMovies = filteredMovies.filter(movie => genere.includes(movie.genre)); // Filtra i film in base al genere
    //     console.log(filteredMovies, 'filteredMovies');
    // }
    // setMovies(filteredMovies); // Imposta i film filtrati
    // setLoading(false);
        // if (genere) {
        //     filteredMovies = filteredMovies.filter(movie => movie.genres.includes(genere));
        // }
        // setMovies(filteredMovies);
        // setLoading(false);
        // let filteredMovies = [...movies]; 
        // if (Array.isArray(genere)) { // Verifica se genere è un array di stringhe
        //     filteredMovies = filteredMovies.filter(movie => genere.includes(movie.genre)); // Filtra i film in base al genere
        //     setMovies([...filteredMovies]);
        // setLoading(false);
        // } else if (typeof genere === 'string') { // Se genere è una stringa, aggiungila direttamente al filtro
        //     filteredMovies = filteredMovies.filter(movie => movie.genre === genere);
        //     setMovies([...filteredMovies]);
        // setLoading(false);
        // }
        
        
    }

      useEffect(() => {
        fetchMovies();
      }, []);

      useEffect(() => {
            filteringViewType();
      }, [visualizzazione,]);
    useEffect(() => {filterByGenre(genere)}, [genere]); 

    return(
        <Layout>
        <Heading />
        <UserSelection setVisualizzazione={setVisualizzazione} setGenere={setGenere}/>
        {movies && !loading ? (
        <MovieList loading={loading} visualizzazione={visualizzazione} movies={movies} />
        ) : <Spinner size="xl" />}
      </Layout>
    )
}

export default Homepage;