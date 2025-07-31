import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.8825566586be444f8439661a57cbf731',
  appName: 'pawpal-heartfelt-connect',
  webDir: 'dist',
  server: {
    url: 'https://88255665-86be-444f-8439-661a57cbf731.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#fffbeb',
      showSpinner: false
    }
  }
};

export default config;