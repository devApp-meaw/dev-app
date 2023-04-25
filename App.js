import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./src/screens/Login";
import AnimalRegistration from "./src/screens/AnimalRegistration";
import { Provider as PaperProvider } from "react-native-paper";
import RegisterUser from "./src/screens/RegisterUser";
import FrontPage from "./src/screens/FrontPage";
import LoadingPage from "./src/screens/LoadingPage";
import { useFonts, Courgette_400Regular } from "@expo-google-fonts/courgette";

const Drawer = createDrawerNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    Courgette_400Regular,
  });
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='LoadingPage'
          screenOptions={{
            drawerPosition: "left",
          }}
        >
          <Drawer.Screen
            name='LoadingPage'
            component={LoadingPage}
            options={{
              title: "Loading",
              headerShown: false,
              headerTitle: "",
              headerShadowVisible: false,
              headerTitleAlign: "left",
              headerStyle: {
                backgroundColor: "#FAFAFA",
              },
              headerTintColor: "#88c9bf",
              headerTitleStyle: {
                fontSize: 20,
              },
            }}
          />
          <Drawer.Screen
            name='FrontPage'
            component={FrontPage}
            options={{
              title: "Início",
              headerTitle: "",
              headerShadowVisible: false,
              headerTitleAlign: "left",
              headerStyle: {
                backgroundColor: "#FAFAFA",
              },
              headerTintColor: "#88c9bf",
              headerTitleStyle: {
                fontSize: 20,
              },
            }}
          />
          <Drawer.Screen
            name='Login'
            component={Login}
            options={{
              title: "Login",
              headerShadowVisible: true,
              headerTitleAlign: "left",
              headerStyle: {
                backgroundColor: "#cfe9e5",
              },
              headerTintColor: "#434343",
              headerTitleStyle: {
                fontSize: 20,
              },
            }}
          />
          <Drawer.Screen
            name='RegisterUser'
            component={RegisterUser}
            options={{
              title: "Cadastro Pessoal",
              headerShadowVisible: true,
              headerTitleAlign: "left",
              headerStyle: {
                backgroundColor: "#cfe9e5",
              },
              headerTintColor: "#434343",
              headerTitleStyle: {
                fontSize: 20,
              },
            }}
          />
          <Drawer.Screen
            name='AnimalRegistration'
            component={AnimalRegistration}
            options={{
              title: "Cadastro de Animal",
              headerShadowVisible: true,
              headerTitleAlign: "left",
              headerStyle: {
                backgroundColor: "#cfe9e5",
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
