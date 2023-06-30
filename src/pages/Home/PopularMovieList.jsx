import React, { useEffect } from 'react';
import { getAllGenres, getMostPopularMovies } from '../../http/movieHttp';
import Layout from 'react-masonry-list';
import { Button, Card } from 'react-bootstrap';
import Pagination from '../../components/Pagination/Pagination';
import { MoonLoader } from 'react-spinners';

const PopularMovieList = () => {

    const [page, setPage] = React.useState(1);
    const [lastPage, setLastPage] = React.useState(500);
    const [loading, setLoading] = React.useState(true);
    const [movies, setMovies] = React.useState([]);
    const [genres, setGenres] = React.useState([]);

    useEffect(() => {
        getMostPopularMovies(page).then(moviesResponse => {
            setMovies(moviesResponse.results);
            getAllGenres().then(genresResponse => {
                setGenres(genresResponse.genres);
            })
        }).then(() => {
            setLoading(false);  
        });
    }, [page])

    const changePage = (number) => {
        setPage(number);
        setLoading(true);
        window.scrollTo(0, 0)
    }

    return (
        <div>
            {loading
            ?   <MoonLoader
                    style={{display: "flex", justifyContent: "center"}}
                    color={"#000000"}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            :<div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Layout 
                        minWidth={100}
                        items={movies.map(movie => (
                            <Card style={{ width: '18rem' }}>
                                <Card.Img style={{cursor: "pointer"}} onClick={() => window.location.replace(`/movie/${movie.id}`)} variant="top" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    {genres.length > 0 && <Card.Text>
                                        Genres: {movie.genre_ids.map(id => (
                                            <p>{genres.find(genre => genre.id === id).name}</p>
                                        ))}
                                    </Card.Text>}
                                    <Button variant="primary" onClick={() => window.location.replace(`/movie/${movie.id}`)}>See details</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    >
                    </Layout>
                </div>
                <Pagination curentPage={page} lastPage={lastPage} setActivePage={changePage}/>
            </div>}
        </div>
    );
}
 
export default PopularMovieList;