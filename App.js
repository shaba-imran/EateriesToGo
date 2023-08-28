import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { ThemeProvider } from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme/index";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { Navigator } from "./src/infrastructure/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyC7TUuEWoPAy0n1-YU29dOojyvH2k5eKW8",
  authDomain: "eateriestogo-390210.firebaseapp.com",
  projectId: "eateriestogo-390210",
  storageBucket: "eateriestogo-390210.appspot.com",
  messagingSenderId: "525855757087",
  appId: "1:525855757087:web:71d2afe1de1326b948962a",
};

const app = initializeApp(firebaseConfig);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState();

  useEffect(() => {}, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigator />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
