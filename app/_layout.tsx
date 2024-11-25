import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { Stack } from "expo-router";

export default function RootLayout() {

  const [loaded, error] = useFonts({
    'Bungee-Regular': require('../assets/fonts/Bungee-Regular.ttf'),
    'Waveahaus-Thin' : require("../assets/fonts/Wavehaus-28Thin.otf"),
    'Waveahaus-Light' : require("../assets/fonts/Wavehaus-42Light.otf"),
    'Waveahaus-Book' : require("../assets/fonts/Wavehaus-66Book.otf"),
    'Waveahaus-SemiBold' : require("../assets/fonts/Wavehaus-95SemiBold.otf"),
    'Waveahaus-Bold' : require("../assets/fonts/Wavehaus-128Bold.otf"),
    'Waveahaus-ExtraBold' : require("../assets/fonts/Wavehaus-158ExtraBold.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return (
    <Stack>
      {/* Define routes here */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
    </Stack>
  )
}
