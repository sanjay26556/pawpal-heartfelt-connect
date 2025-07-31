import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PawPalIcon } from "../PawPalIcon";
import petsIllustration from "@/assets/pets-illustration.jpg";

export const LoginScreen: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Header with illustration */}
      <div 
        className="h-1/3 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${petsIllustration})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <PawPalIcon className="w-16 h-16 text-primary" />
        </div>
      </div>
      
      {/* Login form */}
      <div className="flex-1 px-8 py-6 bg-background">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Welcome Back</h2>
          <p className="text-muted-foreground">Join the rescue family today</p>
        </div>
        
        <div className="space-y-4 mb-6">
          <Input 
            placeholder="Email" 
            type="email"
            className="h-12 rounded-xl border-border/50"
          />
          <Input 
            placeholder="Password" 
            type="password"
            className="h-12 rounded-xl border-border/50"
          />
        </div>
        
        <Button className="w-full mb-4" variant="paw" size="gentle">
          Sign In
        </Button>
        
        <div className="text-center mb-6">
          <span className="text-muted-foreground text-sm">or continue with</span>
        </div>
        
        <div className="space-y-3 mb-6">
          <Button variant="gentle" className="w-full">
            <div className="w-5 h-5 bg-red-500 rounded mr-3"></div>
            Continue with Google
          </Button>
          <Button variant="gentle" className="w-full">
            <div className="w-5 h-5 bg-blue-600 rounded mr-3"></div>
            Continue with Facebook
          </Button>
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            Don't have an account?{" "}
            <span className="text-primary font-medium">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};