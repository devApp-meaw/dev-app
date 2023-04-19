import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  TextInput,
  Pressable,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function HomeScreen({ navigation }) {
  const [textOne, setTextOne] = React.useState("");
  const [textTwo, setTextTwo] = React.useState("");
  return (
    <View>
      <View style={styles.inputArea}>
        <TextInput
          label="usuario"
          value={textOne}
          placeholder="Nome de usuário"
          onChangeText={(textOne) => setTextOne(textOne)}
          style={styles.input}
        />
        <TextInput
          secureTextEntry={true}
          label="senha"
          value={textTwo}
          placeholder="Senha"
          onChangeText={(textTwo) => setTextTwo(textTwo)}
          style={styles.input}
        />
      </View>
      <View style={styles.EntrarView}>
        <Pressable style={styles.EntrarButton}>
          <Text style={styles.EntrarButtonText}>{"ENTRAR"}</Text>
        </Pressable>
      </View>
      <View style={styles.LogarRedesView}>
        <Pressable style={styles.FacebookEntrarButton}>
          <View style={styles.LoginButtonView}>
            <Icon name="facebook" style={styles.FacebookIcon} />
            <Text style={styles.FacebookButton}>{"ENTRAR COM FACEBOOK"}</Text>
          </View>
        </Pressable>
        <Pressable style={styles.GoogleEntrarButton}>
          <View style={styles.LoginButtonView}>
            <Icon name="google" style={styles.GoogleIcon} />
            <Text style={styles.GoogleButton}>{"ENTRAR COM GOOGLE"}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

export default function App() {
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
          component={HomeScreen}
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
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: "#79B45D",
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: "#33373B",
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    fontSize: 14,
    borderBottomWidth: 0.8,
    borderBottomColor: "#e6e7e8",
  },
  inputArea: {
    marginTop: 64,
    flexDirection: "column",
    gap: 20,
  },
  EntrarButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 320,
    height: 50,
    backgroundColor: "#88c9bf",
    shadowColor: "black",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  EntrarButtonText: {
    fontSize: 12,
    color: "#434343",
  },
  EntrarView: {
    marginTop: 52,
    alignItems: "center",
  },
  LogarRedesView: {
    marginTop: 72,
    alignItems: "center",
    gap: 10,
  },
  GoogleButton: {
    fontSize: 12,
    color: "white",
  },
  FacebookButton: {
    fontSize: 12,
    color: "white",
  },
  GoogleEntrarButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 320,
    height: 50,
    backgroundColor: "#f15f5c",
    shadowColor: "black",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  FacebookEntrarButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 320,
    height: 50,
    backgroundColor: "#4267B2",
    shadowColor: "black",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  FacebookIcon: {
    color: "white",
    fontSize: 18,
  },
  GoogleIcon: {
    color: "white",
    fontSize: 18,
  },
  LoginButtonView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },
});
