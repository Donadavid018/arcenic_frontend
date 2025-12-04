import React from "react";

export function Layout({ sidebar, header, children }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">{sidebar}</aside>
      <main className="main">
        <header className="topbar">{header}</header>
        <section className="content">{children}</section>
      </main>
    </div>
  );
}
