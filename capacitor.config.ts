import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nextgrid.littlestyle',
  appName: 'LittleStyle',
  webDir: 'out',

  server: {
    androidScheme: 'https'
  },

  android: {
    allowMixedContent: true
  },

  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#ffffff',
      showSpinner: false,
      androidSpinnerStyle: 'large',
      splashFullScreen: true,
      splashImmersive: true
    },

    StatusBar: {
      style: 'DARK',
      backgroundColor: '#ffffff'
    },

    Keyboard: {
      resize: 'body',
      style: 'dark',
      resizeOnFullScreen: true
    }
  }
};

export default config;