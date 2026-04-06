import React from 'react'; // ✅ FIX 1: Missing React import

import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {

    // ✅ FIX 2: The entire ternary was placed outside the return statement
    // ✅ FIX 3: "return" was placed on the wrong branch (the "false" side only)
    // ✅ FIX 4: movies.lenght → movies.length (typo)
    // ✅ FIX 5: The condition was inverted — length === 0 should show empty msg,
    //           not the list. The list should show when length > 0.
    return (
        movies.length === 0 ? (
            // When no movies found, show a message instead of an empty list
            <div className="no-movies">
                <p>No movies found.</p>
            </div>
        ) : (
            <div className="movie-list">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.imdbID} // ✅ BONUS FIX: Missing key prop
                        movie={movie}
                    />
                ))}
            </div>
        )
    );
};

export default MovieList;