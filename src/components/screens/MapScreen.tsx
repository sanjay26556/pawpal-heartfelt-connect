import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Filter, MapPin } from "lucide-react";
import { PawIcon } from "../PawPalIcon";

export const MapScreen: React.FC = () => {
  const shelters = [
    {
      id: 1,
      name: "Happy Tails Rescue",
      distance: "0.8 miles",
      type: "Shelter",
      status: "Open",
      pets: 23,
      x: "30%",
      y: "40%"
    },
    {
      id: 2,
      name: "Downtown Animal Center",
      distance: "1.2 miles",
      type: "Municipal",
      status: "Open",
      pets: 45,
      x: "60%",
      y: "25%"
    },
    {
      id: 3,
      name: "Adoption Event - PetSmart",
      distance: "2.1 miles",
      type: "Event",
      status: "Today 10AM-4PM",
      pets: 12,
      x: "75%",
      y: "60%"
    }
  ];

  return (
    <div className="w-full h-full bg-background">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border bg-card">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ArrowLeft className="w-6 h-6 text-foreground" />
            <h1 className="text-lg font-semibold text-foreground">Nearby Shelters</h1>
          </div>
          <Filter className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
      
      {/* Map container */}
      <div className="flex-1 relative bg-muted">
        {/* Mock map background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/30">
          {/* Grid pattern to simulate map */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 grid-rows-12 h-full">
              {Array.from({ length: 96 }).map((_, i) => (
                <div key={i} className="border border-muted-foreground"></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Map pins */}
        {shelters.map((shelter) => (
          <div
            key={shelter.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: shelter.x, top: shelter.y }}
          >
            <div className="relative group">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg animate-gentle-bounce">
                <PawIcon className="w-4 h-4 text-primary-foreground" />
              </div>
              
              {/* Popup card */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-48 bg-card rounded-lg shadow-xl p-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {shelter.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-2">
                  {shelter.distance} • {shelter.type}
                </p>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    shelter.status === 'Open' 
                      ? 'bg-success/20 text-success' 
                      : 'bg-warning/20 text-warning'
                  }`}>
                    {shelter.status}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {shelter.pets} pets
                  </span>
                </div>
                <Button variant="gentle" size="sm" className="w-full text-xs">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
        
        {/* User location */}
        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-love rounded-full border-2 border-white shadow-lg">
            <div className="w-8 h-8 bg-love/30 rounded-full absolute -top-2 -left-2 animate-ping"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom sheet */}
      <div className="bg-card border-t border-border rounded-t-3xl p-4 max-h-48 overflow-y-auto">
        <div className="w-12 h-1 bg-muted rounded-full mx-auto mb-4"></div>
        
        <h3 className="font-semibold text-foreground mb-3">Nearby Locations</h3>
        
        <div className="space-y-3">
          {shelters.map((shelter) => (
            <div key={shelter.id} className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <PawIcon className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">{shelter.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {shelter.distance} • {shelter.pets} pets available
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <MapPin className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};