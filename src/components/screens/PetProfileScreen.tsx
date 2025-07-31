import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share, Heart } from "lucide-react";
import { PawIcon } from "../PawPalIcon";
import catProfile from "@/assets/cat-profile.jpg";

export const PetProfileScreen: React.FC = () => {
  const petInfo = {
    name: "Luna",
    breed: "Domestic Shorthair",
    age: "2 years old",
    weight: "8 lbs",
    location: "Downtown Animal Shelter",
    story: "Luna is a gentle soul who was found as a stray kitten. She's blossomed into a loving companion who enjoys quiet moments by the window and gentle pets. She would do best in a calm home where she can build confidence.",
    personality: ["Gentle", "Quiet", "Affectionate", "Independent"],
    health: "Spayed, vaccinated, microchipped",
    images: [catProfile, catProfile, catProfile]
  };

  return (
    <div className="w-full h-full bg-background">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4">
        <button className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div className="flex space-x-3">
          <button className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Share className="w-5 h-5 text-white" />
          </button>
          <button className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Heart className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
      
      {/* Hero image */}
      <div className="h-80 bg-muted relative">
        <img 
          src={petInfo.images[0]} 
          alt={petInfo.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-20"></div>
      </div>
      
      {/* Content */}
      <div className="flex-1 px-4 py-6 -mt-6 relative z-10 bg-background rounded-t-3xl">
        {/* Pet header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">{petInfo.name}</h1>
            <p className="text-muted-foreground">{petInfo.breed} • {petInfo.age}</p>
          </div>
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <PawIcon className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
        
        {/* Quick info */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-card p-4 rounded-xl border border-border/50">
            <p className="text-sm text-muted-foreground">Weight</p>
            <p className="font-semibold text-foreground">{petInfo.weight}</p>
          </div>
          <div className="bg-card p-4 rounded-xl border border-border/50">
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="font-semibold text-foreground text-sm">{petInfo.location}</p>
          </div>
        </div>
        
        {/* Personality traits */}
        <div className="mb-6">
          <h3 className="font-semibold text-foreground mb-3">Personality</h3>
          <div className="flex flex-wrap gap-2">
            {petInfo.personality.map((trait, index) => (
              <span 
                key={index}
                className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
        
        {/* Story */}
        <div className="mb-6">
          <h3 className="font-semibold text-foreground mb-3">Luna's Story</h3>
          <p className="text-muted-foreground leading-relaxed">{petInfo.story}</p>
        </div>
        
        {/* Health info */}
        <div className="mb-8">
          <h3 className="font-semibold text-foreground mb-3">Health</h3>
          <p className="text-success font-medium">✓ {petInfo.health}</p>
        </div>
        
        {/* CTA Button */}
        <Button className="w-full" variant="love" size="gentle">
          Interested in Adopting Luna
        </Button>
      </div>
    </div>
  );
};