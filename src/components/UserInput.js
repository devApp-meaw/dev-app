import * as React from "react";

import { StyleSheet, TextInput } from "react-native";

const UserInput = (props) => {
  const { label, placeholder, secureTextEntry } = props;
  const { input } = styles;
  const [text, setText] = React.useState("");
  return (
    <TextInput
      label={label}
      secureTextEntry={secureTextEntry}
      value={text}
      placeholder={placeholder}
      onChangeText={(text) => setText(text)}
      style={input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    fontSize: 14,
    borderBottomWidth: 0.8,
    borderBottomColor: "#e6e7e8",
  },
});

export default UserInput;
