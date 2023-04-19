import * as React from "react";
import { View } from "react-native";

import { StyleSheet, TextInput, Pressable, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SocialLoginButton = (props) => {
  const { SocialText, LoginButtonView, SocialIcon } = styles;
  const { name, text, stylesButton } = props;
  return (
    <Pressable style={stylesButton}>
      <View style={LoginButtonView}>
        <Icon name={name} style={SocialIcon} />
        <Text style={SocialText}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  SocialText: {
    fontSize: 12,
    color: "white",
  },
  SocialIcon: {
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

export default SocialLoginButton;
