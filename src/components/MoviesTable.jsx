import React from "react";
import { RatingBadge } from "./RatingBadge.jsx";

export function MoviesTable({ movies, loading }) {
  if (loading) {
    return (
      <div className="card">
        <p>Loading movies...</p>
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <div className="card">
        <p>No movies found for the selected filters.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3>Movies list</h3>
      </div>
      <div className="table-wrapper">
        <table className="movies-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Release</th>
              <th>Language</th>
              <th>Rating</th>
              <th>Votes</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((m) => (
              <tr key={m.id}>
                <td>
                  <div className="movie-title-cell">
                    {m.poster_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w92${m.poster_path}`}
                        alt={m.title}
                        className="movie-poster-thumb"
                      />
                    )}
                    <div>
                      <div className="movie-title">{m.title}</div>
                      <div className="movie-overview">
                        {m.overview || "No description available."}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{m.release_date || "-"}</td>
                <td>{m.original_language || "-"}</td>
                <td>
                  <RatingBadge value={m.vote_average} />
                </td>
                <td>{m.vote_count ?? "-"}</td>
                <td>{m.popularity ? m.popularity.toFixed(1) : "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
