import React, { useState } from 'react'
import { getMoviePoster } from '../utils/api';

export default function MovieDetail({ movie }) {
    
    const { poster_path, overview, title } = movie;
    const [wishlisted, setWishlisted] = useState(false);

    function addToWishlist(title) {
        setWishlisted(true)
        alert(`${title} was added to the wishlist.`)
    }

    return (
      <div className="movie-detail-container card">
        <div className="d-flex align-center">
          <div className="movie-poster">
            <img src={getMoviePoster(poster_path)} />
          </div>
          <div className="movie-description">
            <h1>{title}</h1>
            <p>{overview}</p>
            <div className="wishlist-container">
                <button className="btn" disabled={wishlisted} onClick={() => addToWishlist(title)}>Add to wishlist</button>
            </div>
          </div>
        </div>
      </div>
    );
}