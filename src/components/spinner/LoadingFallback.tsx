import React from 'react';
import './LoadingSpinner.css';

export default function LoadingFallback() {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p className="spinner-text">Carregando...</p>
    </div>
  );
}
