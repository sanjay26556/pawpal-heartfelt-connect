import React from "react";

interface PawPalIconProps {
  className?: string;
  animate?: boolean;
}

export const PawPalIcon: React.FC<PawPalIconProps> = ({ className = "", animate = false }) => {
  return (
    <div className={`relative ${animate ? "paw-print-animate" : ""} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Heart shape forming the main pad */}
        <path
          d="M50 75c-5-5-20-15-20-30 0-8 6-14 14-14 4 0 6 2 6 2s2-2 6-2c8 0 14 6 14 14 0 15-15 25-20 30z"
          fill="currentColor"
          className="text-love"
        />
        
        {/* Paw pads */}
        <ellipse cx="35" cy="25" rx="6" ry="8" fill="currentColor" className="text-primary" />
        <ellipse cx="50" cy="20" rx="6" ry="8" fill="currentColor" className="text-primary" />
        <ellipse cx="65" cy="25" rx="6" ry="8" fill="currentColor" className="text-primary" />
        <ellipse cx="42" cy="35" rx="4" ry="6" fill="currentColor" className="text-primary" />
        <ellipse cx="58" cy="35" rx="4" ry="6" fill="currentColor" className="text-primary" />
      </svg>
    </div>
  );
};

export const PawIcon: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="12" cy="18" rx="3" ry="4" fill="currentColor" />
      <ellipse cx="7" cy="10" rx="2" ry="3" fill="currentColor" />
      <ellipse cx="12" cy="8" rx="2" ry="3" fill="currentColor" />
      <ellipse cx="17" cy="10" rx="2" ry="3" fill="currentColor" />
      <ellipse cx="9" cy="14" rx="1.5" ry="2" fill="currentColor" />
      <ellipse cx="15" cy="14" rx="1.5" ry="2" fill="currentColor" />
    </svg>
  );
};

export const HeartIcon: React.FC<{ className?: string; filled?: boolean }> = ({ 
  className = "", 
  filled = false 
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={filled ? 0 : 2}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
};