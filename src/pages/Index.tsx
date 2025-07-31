import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MobileScreen } from "@/components/MobileScreen";
import { SplashScreen } from "@/components/screens/SplashScreen";
import { LoginScreen } from "@/components/screens/LoginScreen";
import { HomeFeedScreen } from "@/components/screens/HomeFeedScreen";
import { PetProfileScreen } from "@/components/screens/PetProfileScreen";
import { PostPetScreen } from "@/components/screens/PostPetScreen";
import { CommunityStoriesScreen } from "@/components/screens/CommunityStoriesScreen";
import { MapScreen } from "@/components/screens/MapScreen";
import { UserProfileScreen } from "@/components/screens/UserProfileScreen";
import { BadgeSystemScreen } from "@/components/screens/BadgeSystemScreen";
import { AccessibilityScreen } from "@/components/screens/AccessibilityScreen";
import { PawPalIcon } from "@/components/PawPalIcon";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedScreen, setSelectedScreen] = useState("overview");

  const screens = [
    { id: "splash", name: "Splash Screen", component: SplashScreen },
    { id: "login", name: "Login / Sign-Up", component: LoginScreen },
    { id: "home", name: "Home Feed", component: HomeFeedScreen },
    { id: "profile", name: "Pet Profile", component: PetProfileScreen },
    { id: "post", name: "Post a Pet", component: PostPetScreen },
    { id: "stories", name: "Community Stories", component: CommunityStoriesScreen },
    { id: "map", name: "Nearby Shelters", component: MapScreen },
    { id: "user", name: "User Profile", component: UserProfileScreen },
    { id: "badges", name: "Badge System", component: BadgeSystemScreen },
    { id: "accessibility", name: "Accessibility", component: AccessibilityScreen },
  ];

  const renderOverview = () => (
    <div className="max-w-7xl mx-auto p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-6">
          <PawPalIcon className="w-24 h-24 text-primary" animate />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Paw Pal UI Kit</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Complete mobile app design for rescued animal social platform
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Button 
            variant={darkMode ? "secondary" : "default"} 
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
      </div>

      {/* Design System Preview */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-6">Design System</h2>
        
        {/* Colors */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-foreground mb-4">Color Palette</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">Primary</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-love rounded-lg mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">Love</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rescue rounded-lg mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">Rescue</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success rounded-lg mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">Success</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning rounded-lg mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">Warning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">Accent</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-foreground mb-4">Button Variants</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="default">Default</Button>
            <Button variant="love">Love</Button>
            <Button variant="rescue">Rescue</Button>
            <Button variant="success">Success</Button>
            <Button variant="paw" size="paw">🐾</Button>
            <Button variant="heart" size="heart">❤️</Button>
            <Button variant="gentle">Gentle</Button>
          </div>
        </div>
      </div>

      {/* Screen Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {screens.map((screen) => (
          <div key={screen.id} className="text-center">
            <div className="relative group cursor-pointer" onClick={() => setSelectedScreen(screen.id)}>
              <MobileScreen darkMode={darkMode} className="transform group-hover:scale-105 transition-transform">
                <screen.component />
              </MobileScreen>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-[2.5rem] flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                  View Larger
                </div>
              </div>
            </div>
            <h3 className="text-lg font-medium text-foreground mt-4">{screen.name}</h3>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-xl border border-border">
            <div className="w-12 h-12 bg-love rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">❤️</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Emotional Design</h3>
            <p className="text-muted-foreground">Warm colors and gentle animations create emotional connections between users and rescued animals.</p>
          </div>
          
          <div className="bg-card p-6 rounded-xl border border-border">
            <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">♿</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Accessibility First</h3>
            <p className="text-muted-foreground">Built with comprehensive accessibility features including high contrast, voice assist, and adjustable text sizes.</p>
          </div>
          
          <div className="bg-card p-6 rounded-xl border border-border">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Gamification</h3>
            <p className="text-muted-foreground">Achievement badges and progress tracking encourage community engagement and rescue activities.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const SelectedComponent = screens.find(s => s.id === selectedScreen)?.component;

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground">
        {selectedScreen === "overview" ? (
          renderOverview()
        ) : (
          <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <div className="mb-6">
              <Button 
                variant="gentle" 
                onClick={() => setSelectedScreen("overview")}
                className="mb-4"
              >
                ← Back to Overview
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4"
              >
                {darkMode ? "Light" : "Dark"} Mode
              </Button>
            </div>
            
            {SelectedComponent && (
              <MobileScreen 
                title={screens.find(s => s.id === selectedScreen)?.name}
                darkMode={darkMode}
                className="scale-150"
              >
                <SelectedComponent />
              </MobileScreen>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;