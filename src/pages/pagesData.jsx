import FavouritePage from "./FavouritePage/FavouritePage";
import Home from "./Home/Home";
import MovieInfo from "./MovieInfo/MovieInfo";

const pagesData = [
  {
    path: "",
    element: <Home/>,
    title: "home"
  },
  {
    path: "movie/:id",
    element: <MovieInfo/>,
    title: "movie-info"
  },
  {
    path: "/favourite",
    element: <FavouritePage/>,
    title: "favourite"
  },
  {
    path: "*",
    element: <h1>Error</h1>,
    title: "error"
  }
];

export default pagesData;