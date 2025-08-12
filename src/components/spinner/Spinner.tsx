// components/spinner/Spinner.tsx
'use client';

import React from 'react';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface SpinnerProps {
  size?: Size;
  className?: string; // para customizar cor/tailwind extras
  label?: string; // texto para leitores de tela (default: "Carregando")
  inline?: boolean; // se true o spinner fica inline; se false, é inline-flex (padrão)
}

const sizeMap: Record<Size, string> = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-12 w-12',
};

export default function Spinner({
  size = 'md',
  className = '',
  label = 'Carregando',
  inline = true,
}: SpinnerProps) {
  const baseClass = inline ? 'inline-flex items-center' : 'flex items-center justify-center';
  const svgSize = sizeMap[size];

  return (
    <span role="status" aria-live="polite" className={`${baseClass} ${className}`}>
      <svg
        className={`${svgSize} animate-spin motion-reduce:animate-none`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>

      {/* Texto apenas para leitores de tela */}
      <span className="sr-only">{label}…</span>
    </span>
  );
}
