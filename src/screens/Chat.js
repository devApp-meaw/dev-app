import React, { useState, useEffect } from "react";
import {
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { firestore } from "../../firebase";

import { StyleSheet, SafeAreaView } from "react-native";

import { useSelector } from "react-redux";

import { useIsFocused } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";

import { collection, getDocs, query, where } from "firebase/firestore";

const Chat = ({ navigation }) => {
  return (
    <View style={styles.mainContainerStyle}>
      <View style={[styles.ButtonRow, styles.floatingMenuButtonStyle]}>
        <TouchableOpacity
          onPress={() => navigation.navigate("FinalizarAdocao")}
          style={styles.StandardButton}
        >
          <Text style={styles.ButtonText}>FINALIZAR UMA ADOÇÃO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainerStyle: {
    flexDirection: "column",
    flex: 1,
  },
  ButtonRow: {
    marginVertical: 28,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  StandardButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 3,
    width: "80%",
    height: 50,
    shadowColor: "black",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    backgroundColor: "#88c9bf",
  },
  ButtonText: {
    color: "#757575",
  },
  floatingMenuButtonStyle: {
    alignSelf: "center",
    position: "absolute",
    bottom: 35,
  },
});

export default Chat;
