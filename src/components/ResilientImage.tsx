import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  className = 'h-full w-full object-cover',
  fallbackTitle = 'Clinica de Estética',
  loading = 'lazy',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center"
        style={{
          background:
            'linear-gradient(145deg, hsl(35 32% 93%) 0%, hsl(330 60% 92%) 55%, hsl(44 50% 90%) 100%)',
        }}
      >
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full border"
          style={{
            borderColor: 'hsl(var(--gold) / 0.4)',
            color: 'hsl(var(--gold-deep))',
          }}
        >
          <Sparkles className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <span className="font-display text-lg font-medium text-[hsl(var(--fg-ink))]">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
