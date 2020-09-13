import React, { useState } from "react";
import Carousel from "react-items-carousel";
import { Link } from "react-router-dom";
import { getMoviePoster } from "../utils/api";

export default function MoviesCarousel({ movies }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }} className="movies-carousel">
      <Carousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        leftChevron={<button>{"<"}</button>}
        rightChevron={<button>{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img src={getMoviePoster(movie.poster_path)} />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
