import * as React from "react";

import { Pressable, Text, TouchableOpacity } from "react-native";

const SimpleButton = (props) => {
  const { text, stylesButton, stylesText } = props;
  return (
    <Pressable style={stylesButton}>
      <Text style={stylesText}>{text}</Text>
    </Pressable>
  );
};

export default SimpleButton;
