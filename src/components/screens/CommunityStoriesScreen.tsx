import React from "react";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "../PawPalIcon";
import { MessageCircle, ArrowLeft } from "lucide-react";
import successStory from "@/assets/success-story.jpg";
import catProfile from "@/assets/cat-profile.jpg";

export const CommunityStoriesScreen: React.FC = () => {
  const stories = [
    {
      id: 1,
      title: "Luna Found Her Forever Home! 🏠",
      beforeImage: catProfile,
      afterImage: successStory,
      story: "After 6 months at the shelter, Luna finally found her perfect family. She now spends her days playing in a sunny garden and cuddling with her new little human sister.",
      author: "Sarah M.",
      timeAgo: "2 hours ago",
      reactions: { heart: 234, cry: 45, smile: 167 },
      comments: 23
    },
    {
      id: 2,
      title: "Max's Incredible Recovery 💪",
      beforeImage: catProfile,
      afterImage: successStory,
      story: "From a scared rescue to a confident therapy dog - Max's journey has been amazing to witness. He now helps children at the local hospital.",
      author: "Happy Tails Rescue",
      timeAgo: "1 day ago",
      reactions: { heart: 445, cry: 78, smile: 234 },
      comments: 67
    }
  ];

  return (
    <div className="w-full h-full bg-background">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border bg-card">
        <div className="flex items-center space-x-3">
          <ArrowLeft className="w-6 h-6 text-foreground" />
          <h1 className="text-lg font-semibold text-foreground">Success Stories</h1>
        </div>
      </div>
      
      {/* Stories feed */}
      <div className="flex-1 overflow-y-auto">
        {stories.map((story) => (
          <div key={story.id} className="bg-card border-b border-border p-4">
            {/* Story header */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-foreground mb-1">
                {story.title}
              </h2>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  by {story.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {story.timeAgo}
                </p>
              </div>
            </div>
            
            {/* Before/After images */}
            <div className="mb-4">
              <div className="flex space-x-3">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-2 text-center">Before</p>
                  <div className="aspect-square bg-muted rounded-xl overflow-hidden">
                    <img 
                      src={story.beforeImage} 
                      alt="Before"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-2 text-center">After</p>
                  <div className="aspect-square bg-muted rounded-xl overflow-hidden">
                    <img 
                      src={story.afterImage} 
                      alt="After"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Story text */}
            <p className="text-foreground text-sm mb-4 leading-relaxed">
              {story.story}
            </p>
            
            {/* Reactions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1">
                  <span className="text-xl">❤️</span>
                  <span className="text-sm text-muted-foreground">{story.reactions.heart}</span>
                </button>
                <button className="flex items-center space-x-1">
                  <span className="text-xl">😭</span>
                  <span className="text-sm text-muted-foreground">{story.reactions.cry}</span>
                </button>
                <button className="flex items-center space-x-1">
                  <span className="text-xl">😺</span>
                  <span className="text-sm text-muted-foreground">{story.reactions.smile}</span>
                </button>
              </div>
              
              <button className="flex items-center space-x-1">
                <MessageCircle className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{story.comments}</span>
              </button>
            </div>
          </div>
        ))}
        
        {/* Load more */}
        <div className="p-4">
          <Button variant="gentle" className="w-full">
            Load More Stories
          </Button>
        </div>
      </div>
    </div>
  );
};