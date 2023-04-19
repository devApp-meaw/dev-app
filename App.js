import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./src/screens/Login";
import MyStatusBar from "./src/components/MyStatusBar";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MyStatusBar backgroundColor="#88c9bf" barStyle="light-content" />
      <Drawer.Navigator
        initialRouteName="Login"
        screenOptions={{
          drawerPosition: "left",
        }}
      >
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            headerShadowVisible: true,
            headerTitleAlign: "left",
            headerStyle: {
              backgroundColor: "#cfe9e5",
              height: 56,
            },
            headerTintColor: "#434343",
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
