import React from "react";

export function Topbar() {
  return (
    <div className="topbar-inner">
      <div>
        <h2 className="page-title">Movies & Ratings Overview</h2>
        <p className="page-subtitle">
          Explore movies, filter by year / genre / rating, and analyze ratings.
        </p>
      </div>
      <div className="topbar-actions">
        <button
          className="btn-outlined"
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}
