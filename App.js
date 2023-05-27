import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./src/screens/Login";
import AnimalRegistration from "./src/screens/AnimalRegistration";
import { Provider as PaperProvider } from "react-native-paper";
import RegisterUser from "./src/screens/RegisterUser";
import FrontPage from "./src/screens/FrontPage";
import LoadingPage from "./src/screens/LoadingPage";
import AnimalRegistrationSuccess from "./src/screens/AnimalRegistrationSuccess";
import OpsCadastro from "./src/screens/OpsCadastro";

import { useFonts, Courgette_400Regular } from "@expo-google-fonts/courgette";
import ListAnimals from "./src/screens/ListAnimals";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Drawer.Navigator
      initialRouteName="LoadingPage"
      screenOptions={{
        drawerPosition: "left",
      }}
    >
      <Drawer.Screen
        name="LoadingPage"
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
        name="FrontPage"
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
        name="Login"
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
        name="RegisterUser"
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
        name="AnimalRegistration"
        component={AnimalRegistration}
        options={{
          title: "Cadastro do Animal",
          headerShadowVisible: true,
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "#ffd358",
          },
          headerTintColor: "#434343",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Drawer.Screen
        name="ListAnimals"
        component={ListAnimals}
        options={{
          title: "Lista de Animais",
          headerShadowVisible: true,
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "#ffd358",
          },
          headerTintColor: "#434343",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  let [fontsLoaded] = useFonts({
    Courgette_400Regular,
  });
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen
            name="Root"
            component={Root}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AnimalRegistrationSuccess"
            component={AnimalRegistrationSuccess}
            options={{
              title: "Cadastro do Animal",
              headerStyle: {
                backgroundColor: "#ffd358",
              },
              headerTintColor: "#434343",
              headerTitleStyle: {
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="OpsCadastro"
            component={OpsCadastro}
            options={{
              title: "Cadastro",
              headerStyle: {
                backgroundColor: "#88c9bf",
              },
              headerTintColor: "#434343",
              headerTitleStyle: {
                fontSize: 20,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
