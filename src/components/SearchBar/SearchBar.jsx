import * as React from 'react';
import { Form } from 'react-bootstrap';
import './searchBar.css';
import { findMovieByName, getMovieImage } from '../../http/movieHttp';
import MovieSerchComponent from './MovieSerchComponent';

const SearchBar = () => {
    const [movieSearch, setMovieSearch] = React.useState("");
    const [movies, setMovies] = React.useState([]);
    const [httpError, setHttpError] = React.useState("");

    let imagesUrl = [];

    React.useEffect(() => {
        setMovies([]);
        imagesUrl = [];
        if (movieSearch === "") {
            return;
        }
        findMovieByName(movieSearch).then(moviesResponse => {
            setMovies(moviesResponse);
        }).catch(error => {
            setHttpError(error.message);
        });
    }, [movieSearch]);

    const reset = () => {
        setMovieSearch("");
        setMovies([]);
    }
    return (
        <Form className="mt-1" onBlur={reset} style={{width: "18vw"}}>
            <div className='relative d-flex'>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={movieSearch}
                    onChange={e => setMovieSearch(e.target.value)}
                    width="400px"
                />
            </div>
            <div className='main-form'>
            {movies.length > 0 && <div className='mt-2 w-full bg-white border border-dark'>
                {movies.map((movie) => (
                    <MovieSerchComponent movie={movie} key={movie.id}/>
                ))}
            </div>}
            </div>
        </Form>
    );
}

export default SearchBar;