import React from "react";
import { RatingBadge } from "./RatingBadge.jsx";

export function SummaryCards({ summary }) {
  if (!summary) return null;

  return (
    <div className="summary-grid">
      <div className="card summary-card">
        <p className="summary-label">Total Movies</p>
        <p className="summary-value">{summary.total_movies}</p>
      </div>
      <div className="card summary-card">
        <p className="summary-label">Average Rating</p>
        <p className="summary-value">
          <RatingBadge value={summary.overall_avg_rating} />
        </p>
      </div>
      <div className="card summary-card">
        <p className="summary-label">Genres</p>
        <p className="summary-value">{summary.genres.length}</p>
      </div>
      <div className="card summary-card">
        <p className="summary-label">Top Rated Sample</p>
        <p className="summary-value">{summary.top_rated.length} movies</p>
      </div>
    </div>
  );
}
