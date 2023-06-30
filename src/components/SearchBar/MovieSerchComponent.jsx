import React from 'react';
import { getMovieImage } from '../../http/movieHttp';

const MovieSerchComponent = ({movie}) => {

    // const [image, setImage] = React.useState();

    // React.useEffect(() => {
    //     getMovieImage(movie.poster_path).then(imageUlr => {
    //         ima
    //     })
    // }, [])

    const image = React.useMemo(() => {
        return `https://image.tmdb.org/t/p/original${movie.poster_path}`;
    }, [movie.poster_path]);

    return (
        <div>
            <div
                className='serched-element'
                onMouseDown={() =>  window.location.href=`/movie/${movie.id}`}
            >
                <img src={image} alt="image" width={60} height={80} />
                <div>
                    <p className='m-1'>{movie.title}</p>
                    <p className='m-1'>score: {movie.vote_average}</p>
                </div>
            </div>
            <hr />
        </div>
    );
}
 
export default MovieSerchComponent;