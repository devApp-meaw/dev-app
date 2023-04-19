import * as React from "react";
import { View } from "react-native";

import { StyleSheet, StatusBar, SafeAreaView } from "react-native";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;

const MyStatusBar = (props) => {
  const { statusBar } = styles;
  const { backgroundColor, barStyle } = props;
  return (
    <View style={[statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar
          translucent
          backgroundColor={backgroundColor}
          barStyle={barStyle}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: "#79B45D",
    height: APPBAR_HEIGHT,
  },
});

export default MyStatusBar;
