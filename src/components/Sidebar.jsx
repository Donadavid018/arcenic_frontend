import React from "react";

export function Sidebar() {
  return (
    <div>
      <h1 className="logo">Movies<span>&</span>Ratings</h1>
      <nav className="nav">
        <p className="nav-section-title">Views</p>
        <button className="nav-link nav-link-active">Movies Dashboard</button>
      </nav>
      <div className="sidebar-footer">
        <p>Powered by Django API</p>
      </div>
    </div>
  );
}
