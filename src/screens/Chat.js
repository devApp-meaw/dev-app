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

const _widthImage = Dimensions.get("screen").width * 0.2;

const Chat = ({ navigation }) => {
  const {
    mainContainerStyle,
    ChatTabView,
    ChatTabText,
    ButtonRow,
    floatingMenuButtonStyle,
    ButtonText,
    StandardButton,
  } = styles;

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
      console.log(chatTab);
      if (chatTab["owner"] == uid) {
        user = await firestore
          .collection("users")
          .doc(chatTab["interested"])
          .get();
      } else {
        user = await firestore.collection("users").doc(chatTab["owner"]).get();
      }
      pet = await firestore.collection("animals").doc(chatTab["pet"]).get();
      chatTab["userName"] = user.data()["fullName"];
      chatTab["userImageBase64"] = user.data()["imageBase64"];
      chatTab["petName"] = pet.data()["nome"];
      chatTab["chatCreatedAt"] = chatTab["createdAt"];
      chatTab["lastMessage"] = chatTab["messages"].slice(-1);
    }

    setChatTabs(allChatTabs);
  };

  useEffect(() => {
    getChatTabs();
  }, [isFocused]);

  return (
    <View style={mainContainerStyle}>
      <FlatList
        data={chatTabs}
        renderItem={({ item }) => {
          let chatDate;
          let textMessage;

          if (item.lastMessage.length == 0) {
            chatDate = item.chatCreatedAt;
            textMessage = "";
          } else {
            chatDate = item.lastMessage[0].createdAt;
            textMessage = item.lastMessage[0].text;
            console.log(item.lastMessage);
          }

          chatDate = chatDate.toDate();
          const hour = chatDate.getHours();
          const minute = chatDate.getMinutes();
          chatDate = `${hour < 10 ? "0" : ""}${hour}:${
            minute < 10 ? "0" : ""
          }${minute}`;

          let userImage = require("../../assets/default_user.png");

          if (typeof item.userImageBase64 !== "undefined") {
            if (item.userImageBase64 !== "") {
              userImage = { uri: item.userImageBase64 };
              console.log(item.userName);
            }
          }

          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ChatTab", { chatTab: item })}
              style={ChatTabView}
            >
              <View style={styles.chatRow}>
                <Image style={styles.userImageStyle} source={userImage}></Image>
                <View>
                  <Text style={ChatTabText}>
                    {item.userName} | {item.petName}
                  </Text>
                  <Text>{textMessage}</Text>
                </View>
                <Text>{chatDate}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
        extraData={chatTabs}
      />
      <View style={[ButtonRow, floatingMenuButtonStyle]}>
        <TouchableOpacity
          onPress={() => navigation.navigate("FinalizarAdocao")}
          style={StandardButton}
        >
          <Text style={ButtonText}>FINALIZAR UMA ADOÇÃO</Text>
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
    marginVertical: 5,
  },
  ChatTabText: {
    color: "#589b9b",
    fontSize: 20,
  },
  userImageStyle: {
    width: _widthImage,
    height: _widthImage,
    borderRadius: 100,
    marginBottom: 10,
  },
  chatRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 15,
  },
});

export default Chat;
