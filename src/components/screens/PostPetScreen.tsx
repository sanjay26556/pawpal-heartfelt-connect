import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Camera, MapPin } from "lucide-react";
import { PawIcon } from "../PawPalIcon";

export const PostPetScreen: React.FC = () => {
  return (
    <div className="w-full h-full bg-background">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border bg-card">
        <div className="flex items-center justify-between">
          <ArrowLeft className="w-6 h-6 text-foreground" />
          <h1 className="text-lg font-semibold text-foreground">Post a Pet</h1>
          <span className="text-sm text-muted-foreground">2/4</span>
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="px-4 py-4 bg-card border-b border-border">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step <= 2 ? 'bg-primary' : 'bg-muted'
                }`}
              >
                {step <= 2 ? (
                  <PawIcon className="w-4 h-4 text-primary-foreground" />
                ) : (
                  <span className="text-sm text-muted-foreground">{step}</span>
                )}
              </div>
              {step < 4 && (
                <div 
                  className={`h-1 w-16 mx-2 ${
                    step < 2 ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Form */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-6">
          {/* Photo upload */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Pet Photos
            </label>
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square bg-muted rounded-xl border-2 border-dashed border-border flex items-center justify-center">
                <Camera className="w-8 h-8 text-muted-foreground" />
              </div>
              <div className="aspect-square bg-muted rounded-xl border-2 border-dashed border-border flex items-center justify-center">
                <Camera className="w-8 h-8 text-muted-foreground" />
              </div>
              <div className="aspect-square bg-muted rounded-xl border-2 border-dashed border-border flex items-center justify-center">
                <Camera className="w-8 h-8 text-muted-foreground" />
              </div>
            </div>
          </div>
          
          {/* Basic info */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Pet Name
              </label>
              <Input 
                placeholder="Enter pet's name"
                className="h-12 rounded-xl border-border/50"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Breed
                </label>
                <Input 
                  placeholder="e.g. Golden Retriever"
                  className="h-12 rounded-xl border-border/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Age
                </label>
                <Input 
                  placeholder="e.g. 2 years"
                  className="h-12 rounded-xl border-border/50"
                />
              </div>
            </div>
          </div>
          
          {/* Story */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Pet's Story
            </label>
            <Textarea 
              placeholder="Share this pet's story, personality, and what makes them special..."
              className="min-h-24 rounded-xl border-border/50 resize-none"
              rows={4}
            />
          </div>
          
          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Enter shelter or location"
                className="h-12 rounded-xl border-border/50 pl-11"
              />
            </div>
          </div>
          
          {/* Urgency */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Priority Level
            </label>
            <div className="grid grid-cols-3 gap-3">
              <Button variant="gentle" size="sm" className="h-12">
                Normal
              </Button>
              <Button variant="warning" size="sm" className="h-12">
                Urgent
              </Button>
              <Button variant="rescue" size="sm" className="h-12">
                Critical
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="p-4 bg-card border-t border-border">
        <Button className="w-full" variant="paw" size="gentle">
          Continue
        </Button>
      </div>
    </div>
  );
};