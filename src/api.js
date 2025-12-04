const API_BASE_URL = "https://arcnetic-backend.onrender.com/api";

export async function fetchMovies({ page, limit, sort, filterString }) {
  const params = new URLSearchParams();

  if (page) params.set("page", page);
  if (limit) params.set("limit", limit);
  if (sort) params.set("sort", sort);
  if (filterString) params.set("filter", filterString);

  const url = `${API_BASE_URL}/movies/?${params.toString()}`;

  const res = await fetch(url);
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const detail = body.detail || res.statusText;
    throw new Error(`Movies API error: ${detail}`);
  }
  return res.json();
}

export async function fetchMoviesSummary({ page, sort, filterString }) {
  const params = new URLSearchParams();

  if (page) params.set("page", page);
  if (sort) params.set("sort", sort);
  if (filterString) params.set("filter", filterString);

  const url = `${API_BASE_URL}/movies/summary/?${params.toString()}`;

  const res = await fetch(url);
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const detail = body.detail || res.statusText;
    throw new Error(`Summary API error: ${detail}`);
  }
  return res.json();
}
