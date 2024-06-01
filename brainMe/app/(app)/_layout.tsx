import { View, Text } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import { Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  // This hook provides information about the user's authentication state.
  const { isLoaded, isSignedIn } = useUser();

  // Redirect to the welcome screen if the user is not signed in
  if (!isSignedIn) {
    return <Redirect href={"/sign-up"} />;
  }

  // Hide the splash screen when the app is loaded
  useEffect(() => {
    if (isLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isLoaded]);
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="leaderboard" options={{ headerShown: false }} />
      <Tabs.Screen name="profile" options={{ headerShown: false }} />
    </Tabs>
  );
}