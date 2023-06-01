import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import AnimalRegistrationSuccess from "../src/screens/AnimalRegistrationSuccess";
import OpsCadastro from "../src/screens/OpsCadastro";
import Login from "../src/screens/Login";
import AnimalRegistration from "../src/screens/AnimalRegistration";
import RegisterUser from "../src/screens/RegisterUser";
import FrontPage from "../src/screens/FrontPage";
import LoadingPage from "../src/screens/LoadingPage";
import MyPets from "../src/screens/MyPets";
import AdoptPet from "../src/screens/AdoptPet";
import { useSelector } from "react-redux";

import { useFonts, Courgette_400Regular } from "@expo-google-fonts/courgette";
import { AntDesign } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigator = () => {
  const user = useSelector((state) => state.user);
  return (
    <Drawer.Navigator
      initialRouteName="LoadingPage"
      screenOptions={{
        drawerPosition: "left",
      }}
    >
      {user.isLogged ? (
        <>
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
            name="MyPets"
            component={MyPets}
            options={{
              title: "Meus Pets",
              headerShadowVisible: true,
              headerTitleAlign: "left",
              headerStyle: {
                backgroundColor: "#88c9bf",
              },
              headerTintColor: "#434343",
              headerTitleStyle: {
                fontSize: 20,
              },
              headerRight: () => (
                <AntDesign
                  style={{ marginRight: 15 }}
                  name="search1"
                  size={24}
                  color="black"
                />
              ),
            }}
          />
          <Drawer.Screen
            name="AdoptPet"
            component={AdoptPet}
            options={{
              title: "Adotar",
              headerShadowVisible: true,
              headerTitleAlign: "left",
              headerStyle: {
                backgroundColor: "#ffd358",
              },
              headerTintColor: "#434343",
              headerTitleStyle: {
                fontSize: 20,
              },
              headerRight: () => (
                <AntDesign
                  style={{ marginRight: 15 }}
                  name="search1"
                  size={24}
                  color="black"
                />
              ),
            }}
          />
        </>
      ) : (
        <>
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
        </>
      )}
    </Drawer.Navigator>
  );
};

const StackNavigator = () => {
  let [fontsLoaded] = useFonts({
    Courgette_400Regular,
  });
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
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
  );
};

export default StackNavigator;
