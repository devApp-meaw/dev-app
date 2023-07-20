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
import NotificationTest from "../src/screens/NotificationTest";
import MyPets from "../src/screens/MyPets";
import AdoptPet from "../src/screens/AdoptPet";
import { Logout } from "../src/screens/Logout";
import { useSelector } from "react-redux";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import MyPet from "../src/screens/MyPet";
import InterestsOnPet from "../src/screens/InterestsOnPet";
import Chat from "../src/screens/Chat";
import FinalizarAdocao from "../src/screens/FinalizarAdocao";
import ProcessoFinalizado from "../src/screens/ProcessoFinalizado";
import EditPet from "../src/screens/EditPet";
import AnimalUpdateSuccess from "../src/screens/AnimalUpdateSuccess";
import Favorites from "../src/screens/Favorites";
import Pet from "../src/screens/Pet";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigator = () => {
  const user = useSelector((state) => state.user);
  return (
      <Drawer.Navigator
        initialRouteName='FrontPage'
        screenOptions={{
          drawerPosition: "left",
        }}
        drawerContent={(props) => <Logout {...props} />}
      >

      {user.isLogged ? (
        <>
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
          <Drawer.Screen
            name="Favorites"
            component={Favorites}
            options={{
              title: "Favoritos",
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
            name="Chat"
            component={Chat}
            options={{
              title: "Chat",
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
        </>
      )}
    </Drawer.Navigator>
  );
};

const StackNavigator = () => {
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
          title: "Cadastro do animal",
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
        name="AnimalUpdateSuccess"
        component={AnimalUpdateSuccess}
        options={{
          title: "Atualização do animal",
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
      <Stack.Screen
        name="MyPet"
        component={MyPet}
        options={({ route }) => ({
          title: route.params.pet.nome,
          headerStyle: {
            backgroundColor: "#88c9bf",
          },
          headerTintColor: "#434343",
          headerTitleStyle: {
            fontSize: 20,
          },
          headerRight: () => (
            <Ionicons
              style={{ marginRight: 15, color: "#434343" }}
              name="share-social"
              size={24}
              color="black"
            />
          ),
        })}
      />
      <Stack.Screen
        name="Pet"
        component={Pet}
        options={({ route }) => ({
          title: route.params.pet.nome,
          headerStyle: {
            backgroundColor: "#88c9bf",
          },
          headerTintColor: "#434343",
          headerTitleStyle: {
            fontSize: 20,
          },
          headerRight: () => (
            <Ionicons
              style={{ marginRight: 15, color: "#434343" }}
              name="share-social"
              size={24}
              color="black"
            />
          ),
        })}
      />
      <Stack.Screen
        name="InterestsOnPet"
        component={InterestsOnPet}
        options={({ route }) => ({
          title: "Interessados",
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
        })}
      />
      <Stack.Screen
        name="FinalizarAdocao"
        component={FinalizarAdocao}
        options={{
          title: "Finalizar adoção",
          headerStyle: {
            backgroundColor: "#88c9bf",
          },
          headerTintColor: "#434343",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="ProcessoFinalizado"
        component={ProcessoFinalizado}
        options={{
          title: "Finalizar processo",
          headerStyle: {
            backgroundColor: "#88c9bf",
          },
          headerTintColor: "#434343",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="EditPet"
        component={EditPet}
        options={{
          title: "Editar animal",
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
    </Stack.Navigator>
  );
};

export default StackNavigator;
