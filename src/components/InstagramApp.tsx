import React, { useState } from "react";
import { Home, Search, PlusSquare, Heart, User, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { HomeFeedScreen } from "@/components/screens/HomeFeedScreen";
import { CommunityStoriesScreen } from "@/components/screens/CommunityStoriesScreen";
import { PostPetScreen } from "@/components/screens/PostPetScreen";
import { MapScreen } from "@/components/screens/MapScreen";
import { UserProfileScreen } from "@/components/screens/UserProfileScreen";

const InstagramApp = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", icon: Home, label: "Home", component: HomeFeedScreen },
    { id: "stories", icon: Search, label: "Stories", component: CommunityStoriesScreen },
    { id: "post", icon: PlusSquare, label: "Post", component: PostPetScreen },
    { id: "map", icon: MapPin, label: "Map", component: MapScreen },
    { id: "profile", icon: User, label: "Profile", component: UserProfileScreen },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || HomeFeedScreen;

  return (
    <div className="flex flex-col h-screen max-w-sm mx-auto bg-background border-x border-border">
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <ActiveComponent />
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-border bg-background/95 backdrop-blur-sm">
        <div className="flex items-center justify-around px-2 py-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex flex-col items-center p-3 rounded-xl transition-all duration-200",
                  isActive 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <Icon 
                  className={cn(
                    "w-6 h-6 transition-all duration-200",
                    isActive && "scale-110"
                  )} 
                  fill={isActive ? "currentColor" : "none"}
                />
                <span className={cn(
                  "text-xs mt-1 font-medium transition-all duration-200",
                  isActive ? "opacity-100" : "opacity-70"
                )}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InstagramApp;