export const findMovieByName = async (movieName) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&page=1`;
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzI1N2E5Mzg5MDA1NzRlNGQ1NWEyZjAwYTMwOGQ3OSIsInN1YiI6IjY0OTIxOWQ3YzNjODkxMDBjYWRjMTZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OgOmUmG6FzhZ-Oede-XTKR0vOmcgUp-Ny2V6rBq7ACk`,
      accept: "application/json",
    },
  };
  const response = await fetch(url, requestOptions);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const responseJSON = await response.json();

  return responseJSON.results.slice(0, 4);
};

export const getMostPopularMovies = async (page) => {
  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzI1N2E5Mzg5MDA1NzRlNGQ1NWEyZjAwYTMwOGQ3OSIsInN1YiI6IjY0OTIxOWQ3YzNjODkxMDBjYWRjMTZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OgOmUmG6FzhZ-Oede-XTKR0vOmcgUp-Ny2V6rBq7ACk`,
      accept: "application/json",
    },
  };
  const response = await fetch(url, requestOptions);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const responseJSON = await response.json();
  return responseJSON;
};

export const getAllGenres = async () => {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzI1N2E5Mzg5MDA1NzRlNGQ1NWEyZjAwYTMwOGQ3OSIsInN1YiI6IjY0OTIxOWQ3YzNjODkxMDBjYWRjMTZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OgOmUmG6FzhZ-Oede-XTKR0vOmcgUp-Ny2V6rBq7ACk`,
      accept: "application/json",
    },
  };

  const response = await fetch(url, requestOptions);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const responseJSON = await response.json();
  return responseJSON;
};

export const getMovieById = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}language=en-US}`;
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzI1N2E5Mzg5MDA1NzRlNGQ1NWEyZjAwYTMwOGQ3OSIsInN1YiI6IjY0OTIxOWQ3YzNjODkxMDBjYWRjMTZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OgOmUmG6FzhZ-Oede-XTKR0vOmcgUp-Ny2V6rBq7ACk`,
      accept: "application/json",
    },
  };
  const response = await fetch(url, requestOptions);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const responseJSON = await response.json();
  return responseJSON;
};

export const getMovieRecomendation = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`;
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzI1N2E5Mzg5MDA1NzRlNGQ1NWEyZjAwYTMwOGQ3OSIsInN1YiI6IjY0OTIxOWQ3YzNjODkxMDBjYWRjMTZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OgOmUmG6FzhZ-Oede-XTKR0vOmcgUp-Ny2V6rBq7ACk`,
      accept: "application/json",
    },
  };
  const response = await fetch(url, requestOptions);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const responseJSON = await response.json();
  return responseJSON;
};
