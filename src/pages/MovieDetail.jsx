import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./MovieDetail.css"; // import CSS
import defaultImg from './error.png'

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovieDetail = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://www.omdbapi.com/?apikey=f8bbc645&i=${id}`);
      const data = await res.json();
      if (data.Response === "False") setError(data.Error);
      else {
        setMovie(data);
        setError(null);
      }
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch movie details");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetail();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="wrap">
      <div className="hero">
        <div className="heroOverlay" />
        <Link to="/" className="back">← Back</Link>
        <div className="heroContent">
          <img
  src={movie.Poster !== "N/A" ? movie.Poster : defaultImg}
            alt={movie.Title}
            className="poster"
          />
          <div>
            <h1 className="title">{movie.Title}</h1>
            <p className="meta">{movie.Year} · {movie.Runtime} · {movie.Rated}</p>
          </div>
        </div>
      </div>

      <div className="body">
        <div className="ratingRow">
          <span className="star">★</span>
          <span className="ratingNum">{movie.imdbRating}</span>
          <span className="ratingMax">/10</span>
        </div>

        <div className="genreRow">
          {movie.Genre.split(", ").map((g) => (
            <span key={g} className="genre">{g}</span>
          ))}
        </div>

        <p className="plot">{movie.Plot}</p>
        <div className="divider" />

        <div className="grid">
          {[
            ["Director",  movie.Director],
            ["Actors",    movie.Actors],
            ["Language",  movie.Language],
            ["Country",   movie.Country],
            ["Awards",    movie.Awards],
            ["Box Office",movie.BoxOffice],
          ].map(([label, value]) => (
            <div key={label} className="field">
              <span className="fieldLabel">{label}</span>
              <span className="fieldValue">{value || "N/A"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;