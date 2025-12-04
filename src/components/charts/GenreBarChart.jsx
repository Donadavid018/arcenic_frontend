import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function GenreBarChart({ genres }) {
  if (!genres || genres.length === 0) return null;

  return (
    <div className="card chart-card">
      <div className="card-header">
        <h3>Average Rating by Genre</h3>
      </div>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={genres}>
            <XAxis dataKey="genre_name" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Bar dataKey="avg_rating" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
