import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieDetail } from "../api/movie.requests";
import MovieAdditonalInfo from "../components/MovieAdditionalInfo";
import MovieDetail from "../components/MovieDetail";

export default function MovieContainer() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetail(id)
      .then((movie) => setMovie(movie))
      .catch((error) => console.log(error));
  }, []);

  function renderError() {
    return <h1>There is an Error!</h1>;
  }

  function renderContent() {
    return (
        <>
            <MovieDetail movie={movie} />
            <MovieAdditonalInfo movie={movie} />
        </>
    );
  }

  return movie ? renderContent() : renderError();
}
