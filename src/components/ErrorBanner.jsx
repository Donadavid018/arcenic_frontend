import React from "react";

export function ErrorBanner({ message, onRetry }) {
  if (!message) return null;

  return (
    <div className="error-banner">
      <span>{message}</span>
      {onRetry && (
        <button className="btn-ghost" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}
