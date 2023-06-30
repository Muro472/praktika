import * as React from 'react';
import "./movieInfo.css"
import { useParams } from 'react-router-dom';
import { getMovieById, getMovieRecomendation } from '../../http/movieHttp';
import { Button } from 'react-bootstrap';

const MovieInfo = () => {
    const movieId = useParams();
    const [movie, setMovie] = React.useState();
    const [movieRecomendations, setMovierecomendations] = React.useState([]);
    const [buttonText, setButtonText] = React.useState();
    const [buttonType, setButtonType] = React.useState();

    React.useEffect(() => {
        if(movieId.id === undefined){
            console.log("invalid id");
            return;
        }
        getMovieById(movieId.id).then(movie => {
            setMovie(movie);
        }).catch((error) => {
            console.log(error.message);
        });
        
        getMovieRecomendation(movieId.id).then(recomendations => {
            console.log(recomendations);
            setMovierecomendations(recomendations.results.slice(0, 5));
        });
        checkIfFavourite();
    }, [])

    const saveToFavourite = () => {
        let favourite =  localStorage.getItem("favouriteMovies");
        if(favourite === null) favourite = [];
        else favourite = JSON.parse(favourite);
        favourite.push(movie);
        localStorage.setItem("favouriteMovies", JSON.stringify(favourite));
        setButtonText("Remove to favourite");
        setButtonType("danger");
        console.log(favourite);
    }

    const checkIfFavourite = () => {
        let favourite =  localStorage.getItem("favouriteMovies");
        if(favourite === null){
            setButtonText("Add to favourite");
            setButtonType("success");
            return;
        }
        else favourite = JSON.parse(favourite);
        if(favourite.find(fav => fav?.id === movie?.id)){
            setButtonText("Remove to favourite");
            setButtonType("danger");
        } else{
            setButtonText("Add to favourite");
            setButtonType("success");
        }
    }

    const removeFromFavourite = () => {
        let favourite =  localStorage.getItem("favouriteMovies");
        if(favourite === null) return;
        else favourite = JSON.parse(favourite);
        favourite = favourite.filter(fav => fav?.id !== movie?.id);
        localStorage.setItem("favouriteMovies", JSON.stringify(favourite));
        setButtonText("Add to favourite");
        setButtonType("success");
        console.log(favourite);
    }
    return (
        <div className='movie-info-div'>
            <div className='movie-info-card'>
                <div className='anime-info'>
                    <h1 style={{color: "white", marginLeft: "2vw"}}>{movie?.title}</h1>
                    <hr style={{color: "white"}}/>
                    <div className='div-stats'>
                        <h3 style={{color: "white"}}>Stats</h3>
                        <div className='stats-info'>
                            <div className='stat'>
                                <p style={{margin: 0}}>{movie?.vote_average}</p>
                                <hr style={{margin: 0}}/>
                                <h5 style={{margin: 0}}>Score</h5>
                            </div>
                            <div className='stat'>
                                <p style={{margin: 0}}>{movie?.popularity}</p>
                                <hr style={{margin: 0}}/>
                                <h5 style={{margin: 0}}>Popularity</h5>
                            </div>
                        </div>
                    </div>
                    <hr style={{color: "white"}}/>
                    <div>
                        <h3 style={{textAlign: "center", color: "white"}}>Description</h3> 
                        <p style={{color: "white"}}> &emsp;&emsp; {movie?.overview}</p> 
                    </div>  
                    <hr style={{color: "white"}}/>
                    <div>
                        <h6 style={{color: "white", textAlign: "center"}}>Info</h6>
                        <div style={{display: 'flex'}}>
                            <div style={{width: "40%"}}>
                                <p className='info-text'><b>Status:</b> <em>{movie?.status}</em></p>
                                <p className='info-text'><b>Budget:</b> <em>{movie?.budget === 0 ? "unknown" : movie?.episodes}</em></p>
                            </div>
                            <div>
                                <p className='info-text'><b>Studio:</b> <em>{movie?.production_companies[0]?.name}</em></p>
                                <p className='info-text'><b>Genres:</b> ` <em>{movie?.genres.map(genre => genre.name + " ")}</em>`</p>
                            </div>
                        </div>
                    </div>
                    <hr style={{color: "white"}}/>
                    <div>
                        <h6 style={{color: "white", textAlign: "center"}}>Recomendations</h6>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <div>
                                {movieRecomendations.map(recom => 
                                    <img 
                                        src={`https://image.tmdb.org/t/p/original${recom?.poster_path}`} 
                                        alt="image" 
                                        style={{width: "10vw", margin: "10px", cursor: "pointer"}} 
                                        onClick={() => window.location.replace(`/movie/${recom.id}`)}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='image-div'>
                    <div style={{textAlign: "center"}}>
                        <img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt="image" /> 
                    </div>
                    <hr style={{color: "white"}} />
                    <div style={{display: 'flex', justifyContent: "center"}}>
                        <Button  variant={buttonType} onClick={() => buttonType === "danger"? removeFromFavourite() : saveToFavourite() }>{buttonText}</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default MovieInfo;