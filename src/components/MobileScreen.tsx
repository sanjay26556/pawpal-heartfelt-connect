import React from "react";
import { cn } from "@/lib/utils";

interface MobileScreenProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  darkMode?: boolean;
}

export const MobileScreen: React.FC<MobileScreenProps> = ({ 
  children, 
  title, 
  className = "",
  darkMode = false 
}) => {
  return (
    <div className="flex flex-col items-center p-4">
      {title && (
        <h3 className="text-lg font-semibold mb-4 text-foreground">{title}</h3>
      )}
      <div 
        className={cn(
          "relative w-80 h-[640px] bg-background border-8 border-gray-800 rounded-[2.5rem] shadow-2xl overflow-hidden",
          darkMode && "dark",
          className
        )}
      >
        {/* Phone notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-lg z-10"></div>
        
        {/* Screen content */}
        <div className="w-full h-full overflow-hidden bg-background">
          {children}
        </div>
      </div>
    </div>
  );
};