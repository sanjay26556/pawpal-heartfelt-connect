import React from "react";
import { Button } from "@/components/ui/button";
import { HeartIcon, PawIcon } from "../PawPalIcon";
import { MessageCircle, Repeat, Search, Plus } from "lucide-react";
import catProfile from "@/assets/cat-profile.jpg";

export const HomeFeedScreen: React.FC = () => {
  const posts = [
    {
      id: 1,
      petName: "Luna",
      image: catProfile,
      story: "Sweet 2-year-old cat looking for her forever home! She loves cuddles and sunny windowsills. 🐱",
      hashtags: ["#AdoptMe", "#RescueStory", "#CatsOfInstagram"],
      likes: 234,
      location: "Downtown Shelter",
      urgent: false
    },
    {
      id: 2,
      petName: "Max",
      image: catProfile,
      story: "This brave boy overcame so much and is ready to love again. Could you be his hero? 🦸‍♂️",
      hashtags: ["#RescueStory", "#AdoptMe", "#DogsOfInstagram"],
      likes: 189,
      location: "Happy Tails Rescue",
      urgent: true
    }
  ];

  return (
    <div className="w-full h-full bg-background">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border bg-card">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">Paw Pal</h1>
          <div className="flex items-center space-x-3">
            <Search className="w-6 h-6 text-muted-foreground" />
            <Plus className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
        
        {/* Filter tabs */}
        <div className="flex space-x-4 mt-3">
          <Button variant="paw" size="sm" className="rounded-full">
            Adoptable
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full">
            Nearby
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full">
            Success Stories
          </Button>
        </div>
      </div>
      
      {/* Feed */}
      <div className="flex-1 overflow-y-auto">
        {posts.map((post) => (
          <div key={post.id} className="bg-card border-b border-border">
            {/* Post header */}
            <div className="px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <PawIcon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{post.petName}</h3>
                  <p className="text-sm text-muted-foreground">{post.location}</p>
                </div>
              </div>
              {post.urgent && (
                <span className="bg-rescue text-rescue-foreground text-xs font-medium px-2 py-1 rounded-full">
                  Urgent
                </span>
              )}
            </div>
            
            {/* Post image */}
            <div className="aspect-square bg-muted">
              <img 
                src={post.image} 
                alt={post.petName}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Post actions */}
            <div className="px-4 py-3">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1">
                    <HeartIcon className="w-6 h-6 text-love heart-beat" />
                    <span className="text-sm font-medium">{post.likes}</span>
                  </button>
                  <button>
                    <MessageCircle className="w-6 h-6 text-muted-foreground" />
                  </button>
                  <button>
                    <Repeat className="w-6 h-6 text-muted-foreground" />
                  </button>
                </div>
                <Button variant="love" size="sm" className="rounded-full">
                  Interested
                </Button>
              </div>
              
              {/* Post content */}
              <p className="text-foreground text-sm mb-2">{post.story}</p>
              <div className="flex flex-wrap gap-1">
                {post.hashtags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-primary text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};