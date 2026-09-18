import { useState } from 'react'

export default function ImagePlaceholder({ label = 'Image', ratio = 'aspect-[4/3]', className = '', src, alt }) {
  const [errored, setErrored] = useState(false)

  if (src && !errored) {
    return (
      <div className={`relative ${ratio} bg-pale border border-navy/10 overflow-hidden ${className}`}>
        <img
          src={src}
          alt={alt || label}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-contain"
          onError={() => setErrored(true)}
        />
      </div>
    )
  }

  return (
    <div
      className={`relative ${ratio} bg-pale border border-navy/10 overflow-hidden flex items-center justify-center group ${className}`}
    >
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-navy/30">
          <rect x="2.5" y="4.5" width="19" height="15" rx="1" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="8" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.3" />
          <path d="M4 17L9 12L13 15.5L16 12.5L20 16.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="eyebrow text-navy/40 text-[0.6rem]">{label}</span>
      </div>
    </div>
  )
}
