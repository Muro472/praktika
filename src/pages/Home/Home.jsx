import React from 'react';
import PopularMovieList from './PopularMovieList';

const Home = () => {
    return (
        <div>
            <PopularMovieList page={1}/>
        </div>
    );
}
 
export default Home;