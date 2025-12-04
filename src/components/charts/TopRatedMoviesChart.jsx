import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function TopRatedMoviesChart({ movies }) {
  if (!movies || movies.length === 0) return null;

  const data = movies.map((m) => ({
    title: m.title,
    rating: m.vote_average,
  }));

  return (
    <div className="card chart-card">
      <div className="card-header">
        <h3>Top Rated Movies (sample)</h3>
      </div>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={data}>
            <XAxis dataKey="title" hide />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Bar dataKey="rating" />
          </BarChart>
        </ResponsiveContainer>
        <div className="chart-xlabels">
          {data.map((d) => (
            <span key={d.title} title={d.title}>
              {d.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
