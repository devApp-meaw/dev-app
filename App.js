import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";

import { Provider, useSelector } from "react-redux";
import store from "./src/redux/store";
import StackNavigator from "./navigation/StackNavigator.js";
import MeauNotifications from "./src/notifications/MeauNotifications.js";

import { useFonts, Courgette_400Regular } from "@expo-google-fonts/courgette";

MeauNotifications.initNotifications();

const App = () => {
  let [fontsLoaded] = useFonts({
    Courgette_400Regular,
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
