import React, { useEffect, useState, useCallback } from "react";
import { Layout } from "./components/Layout.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { Topbar } from "./components/Topbar.jsx";
import { Loader } from "./components/Loader.jsx";
import { ErrorBanner } from "./components/ErrorBanner.jsx";
import { MoviesFilters } from "./components/MoviesFilters.jsx";
import { MoviesTable } from "./components/MoviesTable.jsx";
import { Pagination } from "./components/Pagination.jsx";
import { SummaryCards } from "./components/SummaryCards.jsx";
import { GenreBarChart } from "./components/charts/GenreBarChart.jsx";
import { TopRatedMoviesChart } from "./components/charts/TopRatedMoviesChart.jsx";
import { RatingDistributionChart } from "./components/charts/RatingDistributionChart.jsx";
import { fetchMovies, fetchMoviesSummary } from "./api.js";

function buildFilterString(filters) {
  const parts = [];
  if (filters.year) parts.push(`year:${filters.year}`);
  if (filters.language) parts.push(`language:${filters.language}`);
  if (filters.min_rating) parts.push(`min_rating:${filters.min_rating}`);
  if (filters.genre) parts.push(`genre:${filters.genre}`);
  return parts.join(",");
}

export default function App() {
  const [movies, setMovies] = useState([]);
  const [summary, setSummary] = useState(null);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalItems, setTotalItems] = useState(0);

  const [filters, setFilters] = useState({
    year: "",
    language: "",
    min_rating: "",
    genre: "",
  });

  const [sort, setSort] = useState("rating_desc");

  const [loadingMovies, setLoadingMovies] = useState(false);
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [error, setError] = useState("");

  const filterString = buildFilterString(filters);

  const loadData = useCallback(async () => {
    setError("");
    setLoadingMovies(true);
    setLoadingSummary(true);

    try {
      const [moviesRes, summaryRes] = await Promise.all([
        fetchMovies({ page, limit, sort, filterString }),
        fetchMoviesSummary({ page, sort, filterString }),
      ]);

      setMovies(moviesRes.results || []);
      setTotalItems(moviesRes.total_items || 0);
      setSummary(summaryRes);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load data.");
    } finally {
      setLoadingMovies(false);
      setLoadingSummary(false);
    }
  }, [page, limit, sort, filterString]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleChangeFilters = (newFilters) => {
    setFilters(newFilters);
    setPage(1); // reset to first page when filters change
  };

  const handleChangeSort = (newSort) => {
    setSort(newSort);
    setPage(1);
  };

  return (
    <Layout sidebar={<Sidebar />} header={<Topbar />}>
      <ErrorBanner message={error} onRetry={loadData} />

      <MoviesFilters
        filters={filters}
        sort={sort}
        onChangeFilters={handleChangeFilters}
        onChangeSort={handleChangeSort}
      />

      {loadingSummary && !summary ? (
        <Loader />
      ) : (
        <SummaryCards summary={summary} />
      )}

      <div className="charts-grid">
        <GenreBarChart genres={summary?.genres || []} />
        <TopRatedMoviesChart movies={summary?.top_rated || []} />
        <RatingDistributionChart movies={movies} />
      </div>

      <MoviesTable movies={movies} loading={loadingMovies} />

      <div className="bottom-row">
        <Pagination
          page={page}
          limit={limit}
          total={totalItems}
          onChange={setPage}
        />
        <div className="limit-selector">
          <label>
            Rows per page
            <select
              value={limit}
              onChange={(e) => {
                setLimit(Number(e.target.value) || 10);
                setPage(1);
              }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </label>
        </div>
      </div>
    </Layout>
  );
}
