import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";

import { Provider, useSelector } from "react-redux";
import store from "./src/redux/store";
import StackNavigator from "./navigation/StackNavigator.js";

const App = () => {
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