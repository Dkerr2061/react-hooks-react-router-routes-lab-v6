import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movieInfo, setMovieInfo] = useState({genres: []})
  const param = useParams();
  const movieId = param.id
  
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then(res=> res.json())
      .then(movieData => setMovieInfo(movieData))
  }, [movieId])

  

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>{movieInfo.title}</h1>
        <p>{movieInfo.time}</p>
          {movieInfo.genres.map(movie => {
            return <span key={movie}>{movie}</span>
          })}
      </main>
    </>
  );
};

export default Movie;
