import React from 'react';
import Layout from 'react-masonry-list';
import { Button, Card } from 'react-bootstrap';

const FavouritePage = () => {

    const [favouriteMovies, setFavouriteMovies] = React.useState([]);

    React.useEffect(() => {
        const fv = localStorage.getItem("favouriteMovies");
        if(fv === null) return;
        setFavouriteMovies(JSON.parse(fv));
    }, []);
    console.log(favouriteMovies);

    const remove = (id) => {
        const fv = favouriteMovies.filter(fav => fav.id !== id);
        localStorage.setItem("favouriteMovies", JSON.stringify(fv));
        setFavouriteMovies(fv);
    }

    if(favouriteMovies.length === 0){
        return <h1 style={{textAlign: "center"}}>You dont have favourite movies</h1>
    }
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <Layout 
                minWidth={100}
                items={favouriteMovies.map(movie => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{cursor: "pointer"}} onClick={() => window.location.replace(`/movie/${movie.id}`)} variant="top" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <Button variant="danger" onClick={() =>remove(movie.id)}>Remove</Button>
                        </Card.Body>
                    </Card>
                ))}
            >
            </Layout>
         </div>
    );
}
 
export default FavouritePage;