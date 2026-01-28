
import React from 'react';

interface BrandLogoProps {
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <radialGradient id="dotGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </radialGradient>
        </defs>
        
        {/* Outer Concentric Circles */}
        <circle cx="50" cy="50" r="48" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.6" />
        <circle cx="50" cy="50" r="40" stroke="url(#logoGradient)" strokeWidth="2.5" />
        
        {/* Stylized 'A' / Upward Arrow */}
        <path 
          d="M50 20L25 75L40 75L50 50L60 75L75 75L50 20Z" 
          fill="url(#logoGradient)" 
        />
        <path 
          d="M50 35L38 62L62 62L50 35Z" 
          fill="white" 
        />
        
        {/* Inner Green Dot */}
        <circle cx="50" cy="53" r="5" fill="url(#dotGradient)" />
      </svg>
    </div>
  );
};

export default BrandLogo;
