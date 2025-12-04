import React from "react";

export function RatingBadge({ value }) {
  if (value == null) return <span className="rating-badge rating-badge-muted">N/A</span>;

  let cls = "rating-badge ";
  if (value >= 8) cls += "rating-high";
  else if (value >= 6) cls += "rating-medium";
  else cls += "rating-low";

  return <span className={cls}>{value.toFixed(1)}</span>;
}
