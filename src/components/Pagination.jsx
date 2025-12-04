import React from "react";

export function Pagination({ page, total, limit, onChange }) {
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <div className="pagination">
      <button
        className="btn-ghost"
        disabled={!canPrev}
        onClick={() => canPrev && onChange(page - 1)}
      >
        ◀ Prev
      </button>
      <span className="pagination-info">
        Page <strong>{page}</strong> of <strong>{totalPages}</strong>
      </span>
      <button
        className="btn-ghost"
        disabled={!canNext}
        onClick={() => canNext && onChange(page + 1)}
      >
        Next ▶
      </button>
    </div>
  );
}
