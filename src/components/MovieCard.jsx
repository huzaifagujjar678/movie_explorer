import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
    const fallbackPoster = `data:image/svg+xml;utf8,${encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="450" viewBox="0 0 300 450">
            <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#1b2648"/>
                    <stop offset="100%" stop-color="#121b33"/>
                </linearGradient>
            </defs>
            <rect width="300" height="450" fill="url(#g)"/>
            <rect x="24" y="24" width="252" height="402" rx="16" fill="none" stroke="rgba(255,255,255,.2)" stroke-width="2"/>
            <text x="50%" y="47%" dominant-baseline="middle" text-anchor="middle" fill="#dbe4ff" font-size="22" font-family="Arial, sans-serif">No Poster</text>
            <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="#a9b7dd" font-size="14" font-family="Arial, sans-serif">Image unavailable</text>
        </svg>`
    )}`;

    const posterSrc = movie?.Poster && movie.Poster !== 'N/A' ? movie.Poster : fallbackPoster;

    return (
       <div className="movie-card">
                <img
                    alt={movie.Title}
                    src={posterSrc}
                    onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = fallbackPoster;
                    }}
                />
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <Link to={`/movie/${movie.imdbID}`} >Details</Link>
            </div>
    );
} 

export default MovieCard;

