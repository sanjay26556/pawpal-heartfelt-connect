import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Volume2, Eye, Type, Palette } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export const AccessibilityScreen: React.FC = () => {
  const [settings, setSettings] = useState({
    highContrast: false,
    voiceAssist: true,
    reduceMotion: false,
    screenReader: false,
    largeText: false,
    colorBlindMode: false
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const fontSizes = ["Small", "Default", "Large", "Extra Large"];
  const [fontSize, setFontSize] = useState("Default");

  return (
    <div className="w-full h-full bg-background">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border bg-card">
        <div className="flex items-center space-x-3">
          <ArrowLeft className="w-6 h-6 text-foreground" />
          <div>
            <h1 className="text-lg font-semibold text-foreground">Accessibility</h1>
            <p className="text-sm text-muted-foreground">Make Paw Pal work better for you</p>
          </div>
        </div>
      </div>
      
      {/* Settings */}
      <div className="flex-1 overflow-y-auto">
        {/* Vision */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center space-x-3 mb-4">
            <Eye className="w-5 h-5 text-primary" />
            <h2 className="font-semibold text-foreground">Vision</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-foreground">High Contrast Mode</h3>
                <p className="text-sm text-muted-foreground">Increase contrast for better visibility</p>
              </div>
              <Switch 
                checked={settings.highContrast}
                onCheckedChange={() => toggleSetting('highContrast')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-foreground">Reduce Motion</h3>
                <p className="text-sm text-muted-foreground">Minimize animations and transitions</p>
              </div>
              <Switch 
                checked={settings.reduceMotion}
                onCheckedChange={() => toggleSetting('reduceMotion')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-foreground">Color Blind Support</h3>
                <p className="text-sm text-muted-foreground">Adjust colors for color blindness</p>
              </div>
              <Switch 
                checked={settings.colorBlindMode}
                onCheckedChange={() => toggleSetting('colorBlindMode')}
              />
            </div>
          </div>
        </div>
        
        {/* Text Size */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center space-x-3 mb-4">
            <Type className="w-5 h-5 text-primary" />
            <h2 className="font-semibold text-foreground">Text Size</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground mb-3">
              Choose the text size that works best for you
            </p>
            
            {fontSizes.map((size) => (
              <button
                key={size}
                onClick={() => setFontSize(size)}
                className={`w-full p-3 rounded-xl border text-left transition-colors ${
                  fontSize === size 
                    ? 'border-primary bg-primary/10 text-primary' 
                    : 'border-border hover:bg-muted'
                }`}
              >
                <div className={`font-medium ${
                  size === "Small" ? "text-sm" :
                  size === "Large" ? "text-lg" :
                  size === "Extra Large" ? "text-xl" : "text-base"
                }`}>
                  {size} Text Size
                </div>
                <div className={`text-muted-foreground mt-1 ${
                  size === "Small" ? "text-xs" :
                  size === "Large" ? "text-base" :
                  size === "Extra Large" ? "text-lg" : "text-sm"
                }`}>
                  Example text for reading pets' stories
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Audio */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center space-x-3 mb-4">
            <Volume2 className="w-5 h-5 text-primary" />
            <h2 className="font-semibold text-foreground">Audio</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-foreground">Voice Assistance</h3>
                <p className="text-sm text-muted-foreground">Read content aloud</p>
              </div>
              <Switch 
                checked={settings.voiceAssist}
                onCheckedChange={() => toggleSetting('voiceAssist')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-foreground">Screen Reader Support</h3>
                <p className="text-sm text-muted-foreground">Enhanced compatibility with screen readers</p>
              </div>
              <Switch 
                checked={settings.screenReader}
                onCheckedChange={() => toggleSetting('screenReader')}
              />
            </div>
          </div>
        </div>
        
        {/* Preview */}
        <div className="p-4">
          <h2 className="font-semibold text-foreground mb-3">Preview</h2>
          <div className={`bg-card border rounded-xl p-4 ${settings.highContrast ? 'border-foreground bg-background' : ''}`}>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-primary rounded-full"></div>
              <div>
                <h3 className={`font-semibold ${
                  fontSize === "Small" ? "text-sm" :
                  fontSize === "Large" ? "text-lg" :
                  fontSize === "Extra Large" ? "text-xl" : "text-base"
                }`}>
                  Luna the Cat
                </h3>
                <p className={`text-muted-foreground ${
                  fontSize === "Small" ? "text-xs" :
                  fontSize === "Large" ? "text-base" :
                  fontSize === "Extra Large" ? "text-lg" : "text-sm"
                }`}>
                  Available for adoption
                </p>
              </div>
            </div>
            <p className={`text-foreground ${
              fontSize === "Small" ? "text-sm" :
              fontSize === "Large" ? "text-base" :
              fontSize === "Extra Large" ? "text-lg" : "text-sm"
            }`}>
              This sweet girl loves sunny windowsills and gentle pets. She's looking for a quiet home where she can feel safe and loved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};