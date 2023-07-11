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
  const { uid } = useSelector((state) => state.user.data);

  const [chatTabs, setChatTabs] = useState([]);

  const collectIdsAndDocs = (doc) => {
    return { id: doc.id, ...doc.data() };
  };

  const isFocused = useIsFocused();

  const getChatTabs = async () => {
    const queryInterestedChatTabs = query(
      collection(firestore, "chat"),
      where("interested", "==", uid)
    );

    queryInterestedChatTabsSnapshot = await getDocs(queryInterestedChatTabs);

    const interestedChatTabs =
      queryInterestedChatTabsSnapshot.docs.map(collectIdsAndDocs);

    const queryOwnerChatTabs = query(
      collection(firestore, "chat"),
      where("owner", "==", uid)
    );

    queryOwnerChatTabsSnapshot = await getDocs(queryOwnerChatTabs);

    const ownerChatTabs =
      queryOwnerChatTabsSnapshot.docs.map(collectIdsAndDocs);

    const allChatTabs = interestedChatTabs.concat(ownerChatTabs);

    let user;
    let pet;

    for (let chatTab of allChatTabs) {
      user = await firestore.collection("users").doc(chatTab["owner"]).get();
      pet = await firestore.collection("animals").doc(chatTab["pet"]).get();
      chatTab["userName"] = user.data()["fullName"];
      chatTab["petName"] = pet.data()["nome"];
    }

    console.log(allChatTabs);

    setChatTabs(allChatTabs);
  };

  useEffect(() => {
    getChatTabs();
  }, [isFocused]);

  return (
    <View style={styles.mainContainerStyle}>
      <FlatList
        data={chatTabs}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ChatTab", { chatTab: item })}
              style={styles.ChatTabView}
            >
              <Text style={styles.ChatTabText}>
                {item.userName} | {item.petName}
              </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
        extraData={chatTabs}
      />
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
  ChatTabView: {
    alignSelf: "center",
    marginVertical: 5,
  },
  ChatTabText: {
    color: "#589b9b",
    fontSize: 30,
  },
});

export default Chat;
