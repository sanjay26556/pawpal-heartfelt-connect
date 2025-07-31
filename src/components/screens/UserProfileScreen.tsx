import React from "react";
import { Button } from "@/components/ui/button";
import { Settings, Share, Edit } from "lucide-react";
import { PawIcon } from "../PawPalIcon";
import catProfile from "@/assets/cat-profile.jpg";

export const UserProfileScreen: React.FC = () => {
  const user = {
    name: "Sarah Martinez",
    username: "@sarahrescues",
    bio: "Animal lover • Foster mom • Rescue advocate",
    avatar: catProfile,
    stats: {
      posts: 24,
      adoptions: 7,
      saves: 156
    },
    badges: [
      { name: "Paw Hero", icon: "🦸", color: "bg-love" },
      { name: "Foster Friend", icon: "🏠", color: "bg-success" },
      { name: "Cat Whisperer", icon: "🐱", color: "bg-accent" }
    ]
  };

  const posts = [
    { id: 1, image: catProfile, type: "adoption" },
    { id: 2, image: catProfile, type: "story" },
    { id: 3, image: catProfile, type: "adoption" },
    { id: 4, image: catProfile, type: "foster" },
    { id: 5, image: catProfile, type: "adoption" },
    { id: 6, image: catProfile, type: "story" }
  ];

  return (
    <div className="w-full h-full bg-background">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border bg-card">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-foreground">Profile</h1>
          <div className="flex items-center space-x-3">
            <Share className="w-6 h-6 text-muted-foreground" />
            <Settings className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
      
      {/* Profile info */}
      <div className="p-4 bg-card border-b border-border">
        <div className="flex items-start space-x-4 mb-4">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img 
              src={user.avatar} 
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h2 className="text-xl font-bold text-foreground">{user.name}</h2>
            <p className="text-muted-foreground mb-2">{user.username}</p>
            <p className="text-sm text-foreground">{user.bio}</p>
          </div>
          
          <Button variant="gentle" size="sm">
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
        </div>
        
        {/* Stats */}
        <div className="flex space-x-8 mb-4">
          <div className="text-center">
            <p className="text-xl font-bold text-foreground">{user.stats.posts}</p>
            <p className="text-sm text-muted-foreground">Posts</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-foreground">{user.stats.adoptions}</p>
            <p className="text-sm text-muted-foreground">Adoptions</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-foreground">{user.stats.saves}</p>
            <p className="text-sm text-muted-foreground">Saves</p>
          </div>
        </div>
        
        {/* Badges */}
        <div>
          <h3 className="font-semibold text-foreground mb-3">Achievements</h3>
          <div className="flex space-x-3">
            {user.badges.map((badge, index) => (
              <div key={index} className={`${badge.color} rounded-xl p-3 flex items-center space-x-2`}>
                <span className="text-lg">{badge.icon}</span>
                <span className="text-xs font-medium text-white">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="px-4 py-3 bg-card border-b border-border">
        <div className="flex space-x-6">
          <button className="text-sm font-medium text-primary border-b-2 border-primary pb-2">
            Posts
          </button>
          <button className="text-sm font-medium text-muted-foreground pb-2">
            Liked
          </button>
          <button className="text-sm font-medium text-muted-foreground pb-2">
            Saved
          </button>
          <button className="text-sm font-medium text-muted-foreground pb-2">
            Settings
          </button>
        </div>
      </div>
      
      {/* Posts grid */}
      <div className="flex-1 overflow-y-auto p-1">
        <div className="grid grid-cols-3 gap-1">
          {posts.map((post) => (
            <div key={post.id} className="relative aspect-square bg-muted">
              <img 
                src={post.image} 
                alt="Post"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                {post.type === 'adoption' && (
                  <div className="w-6 h-6 bg-love rounded-full flex items-center justify-center">
                    <PawIcon className="w-3 h-3 text-white" />
                  </div>
                )}
                {post.type === 'story' && (
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <span className="text-xs text-white">📖</span>
                  </div>
                )}
                {post.type === 'foster' && (
                  <div className="w-6 h-6 bg-warning rounded-full flex items-center justify-center">
                    <span className="text-xs text-white">🏠</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};