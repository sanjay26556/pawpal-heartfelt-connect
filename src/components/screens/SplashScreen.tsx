import React from "react";
import { PawPalIcon } from "../PawPalIcon";
import splashHero from "@/assets/splash-hero.jpg";

export const SplashScreen: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${splashHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8">
        {/* Logo */}
        <div className="mb-6">
          <PawPalIcon className="w-20 h-20 text-white" animate />
        </div>
        
        {/* App name */}
        <h1 className="text-4xl font-bold text-white mb-2 tracking-wide">
          Paw Pal
        </h1>
        
        {/* Tagline */}
        <p className="text-lg text-white/90 font-medium">
          Connect. Care. Rescue.
        </p>
        
        {/* Loading indicator */}
        <div className="mt-12 flex space-x-2">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
};