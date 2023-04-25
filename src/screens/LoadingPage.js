import * as React from "react";
import { View, Image, ImageBackground } from "react-native";

import { StyleSheet } from "react-native";

const LoadingPage = () => {
  const { container, ImageLayout, LogoView, LogoImage } = styles;
  return (
    <View style={container}>
      <ImageBackground
        style={ImageLayout}
        source={require("../../assets/Meau_malha.png")}
      >
        <View style={LogoView}>
          <Image
            style={LogoImage}
            source={require("../../assets/Meau_marca.png")}
          ></Image>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#88c9bf",
  },
  LogoImage: {
    width: 276,
    height: 100,
  },
  ImageLayout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  LogoView: {
    alignItems: "center",
  },
});

export default LoadingPage;
