import React from "react";

const GENRES = ["Action", "Adventure", "Animation", "Comedy", "Drama", "Horror", "Romance", "Science Fiction", "Thriller"];
const YEARS = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i);

export function MoviesFilters({ filters, sort, onChangeFilters, onChangeSort }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChangeFilters({
      ...filters,
      [name]: value || "",
    });
  };

  return (
    <div className="filters-card">
      <div className="filters-row">
        <div className="filters-group">
          <label>
            Year
            <select
              name="year"
              value={filters.year || ""}
              onChange={handleInputChange}
            >
              <option value="">Any</option>
              {YEARS.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </label>

          <label>
            Language (ISO)
            <input
              name="language"
              value={filters.language || ""}
              onChange={handleInputChange}
              placeholder="en, hi, fr..."
            />
          </label>

          <label>
            Min Rating
            <input
              name="min_rating"
              type="number"
              step="0.1"
              min="0"
              max="10"
              value={filters.min_rating || ""}
              onChange={handleInputChange}
              placeholder="e.g. 7.5"
            />
          </label>

          <label>
            Genre
            <select
              name="genre"
              value={filters.genre || ""}
              onChange={handleInputChange}
            >
              <option value="">Any</option>
              {GENRES.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="filters-group">
          <label>
            Sort by
            <select
              value={sort}
              onChange={(e) => onChangeSort(e.target.value)}
            >
              <option value="">Default (TMDB)</option>
              <option value="rating_desc">Rating ↓</option>
              <option value="rating_asc">Rating ↑</option>
              <option value="popularity_desc">Popularity ↓</option>
              <option value="title_asc">Title A–Z</option>
              <option value="year_desc">Year ↓</option>
              <option value="year_asc">Year ↑</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}
