import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function RatingDistributionChart({ movies }) {
  if (!movies || movies.length === 0) return null;

  const buckets = new Map();
  movies.forEach((m) => {
    const r = m.vote_average;
    if (r == null) return;
    const key = Math.round(r); // 0–10
    buckets.set(key, (buckets.get(key) || 0) + 1);
  });

  const data = Array.from(buckets.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([rating, count]) => ({ rating, count }));

  return (
    <div className="card chart-card">
      <div className="card-header">
        <h3>Rating Distribution (current page)</h3>
      </div>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data}>
            <XAxis dataKey="rating" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line type="monotone" dataKey="count" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
