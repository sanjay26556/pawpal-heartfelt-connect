import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Award, Heart } from "lucide-react";
import { PawIcon } from "../PawPalIcon";

export const BadgeSystemScreen: React.FC = () => {
  const badgeCategories = [
    {
      title: "Rescue Badges",
      badges: [
        {
          name: "Rescue Rookie",
          icon: "🐾",
          description: "Posted your first rescue pet",
          earned: true,
          progress: 1,
          total: 1,
          color: "bg-success"
        },
        {
          name: "Paw Hero",
          icon: "🦸",
          description: "Helped 10 pets find homes",
          earned: true,
          progress: 10,
          total: 10,
          color: "bg-love"
        },
        {
          name: "Super Saver",
          icon: "⭐",
          description: "Rescued 25 animals",
          earned: false,
          progress: 18,
          total: 25,
          color: "bg-warning"
        }
      ]
    },
    {
      title: "Community Badges",
      badges: [
        {
          name: "Foster Friend",
          icon: "🏠",
          description: "Fostered 5 animals",
          earned: true,
          progress: 5,
          total: 5,
          color: "bg-primary"
        },
        {
          name: "Story Teller",
          icon: "📖",
          description: "Shared 20 success stories",
          earned: false,
          progress: 12,
          total: 20,
          color: "bg-accent"
        },
        {
          name: "Community Champion",
          icon: "👑",
          description: "1000+ community interactions",
          earned: false,
          progress: 456,
          total: 1000,
          color: "bg-rescue"
        }
      ]
    },
    {
      title: "Special Badges",
      badges: [
        {
          name: "Cat Whisperer",
          icon: "🐱",
          description: "Specialized in cat rescues",
          earned: true,
          progress: 1,
          total: 1,
          color: "bg-muted"
        },
        {
          name: "Dog Guardian",
          icon: "🐶",
          description: "Specialized in dog rescues",
          earned: false,
          progress: 3,
          total: 10,
          color: "bg-muted"
        },
        {
          name: "Angel Wings",
          icon: "😇",
          description: "Helped senior animals",
          earned: false,
          progress: 2,
          total: 5,
          color: "bg-muted"
        }
      ]
    }
  ];

  return (
    <div className="w-full h-full bg-background">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border bg-card">
        <div className="flex items-center space-x-3">
          <ArrowLeft className="w-6 h-6 text-foreground" />
          <div>
            <h1 className="text-lg font-semibold text-foreground">Achievement Badges</h1>
            <p className="text-sm text-muted-foreground">Track your rescue journey</p>
          </div>
        </div>
      </div>
      
      {/* Progress overview */}
      <div className="p-4 bg-card border-b border-border">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <Star className="w-8 h-8 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-foreground">Level 7 Rescuer</h2>
            <p className="text-sm text-muted-foreground mb-2">4 of 12 badges earned</p>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '33%' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Badge categories */}
      <div className="flex-1 overflow-y-auto">
        {badgeCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="p-4 border-b border-border">
            <h3 className="font-semibold text-foreground mb-4">{category.title}</h3>
            
            <div className="space-y-3">
              {category.badges.map((badge, badgeIndex) => (
                <div 
                  key={badgeIndex}
                  className={`p-4 rounded-xl border ${
                    badge.earned 
                      ? 'bg-card border-border shadow-sm' 
                      : 'bg-muted/50 border-border/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        badge.earned ? badge.color : 'bg-muted'
                      }`}
                    >
                      <span className="text-lg">{badge.icon}</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className={`font-semibold ${
                          badge.earned ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {badge.name}
                        </h4>
                        {badge.earned && (
                          <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center">
                            <span className="text-xs text-white">✓</span>
                          </div>
                        )}
                      </div>
                      
                      <p className={`text-sm mb-2 ${
                        badge.earned ? 'text-muted-foreground' : 'text-muted-foreground/70'
                      }`}>
                        {badge.description}
                      </p>
                      
                      {!badge.earned && (
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-muted-foreground">
                              Progress: {badge.progress}/{badge.total}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {Math.round((badge.progress / badge.total) * 100)}%
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-1.5">
                            <div 
                              className="bg-primary h-1.5 rounded-full transition-all"
                              style={{ width: `${(badge.progress / badge.total) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* Motivational section */}
        <div className="p-4">
          <div className="bg-accent/20 rounded-xl p-4 text-center">
            <PawIcon className="w-12 h-12 text-accent mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Keep Going!</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Every action you take helps save more animals. You're making a real difference!
            </p>
            <Button variant="gentle" size="sm">
              Share Your Progress
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};