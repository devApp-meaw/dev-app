import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./src/screens/Login";
import AnimalRegistration from "./src/screens/AnimalRegistration";
import MyStatusBar from "./src/components/MyStatusBar";
import { Provider as PaperProvider } from "react-native-paper";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MyStatusBar backgroundColor='#88c9bf' barStyle='light-content' />
        <Drawer.Navigator
          initialRouteName='Login'
          screenOptions={{
            drawerPosition: "left",
          }}
        >
          <Drawer.Screen
            name='ANIMAL REGISTRATION'
            component={AnimalRegistration}
            options={{
              title: "ANIMAL REGISTRATION",
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
    </PaperProvider>
  );
};

export default App;
