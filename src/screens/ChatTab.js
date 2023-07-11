import React, {
  useEffect,
  useCallback,
  useState,
  useLayoutEffect,
} from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { firestore } from "../../firebase";

import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

import { useSelector } from "react-redux";

import { Avatar } from "react-native-elements";

import { useIsFocused } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";

import { collection, getDocs, query, where } from "firebase/firestore";

import { GiftedChat } from "react-native-gifted-chat";

const ChatTab = ({ route, navigation }) => {
  const { chatTab } = route.params;

  const { uid } = useSelector((state) => state.user.data);

  const [messages, setMessages] = useState([]);

  let chatId;

  const collectIdsAndDocs = (doc) => {
    return { id: doc.id, ...doc.data() };
  };

  const collectMessages = (doc) => {
    let messages = doc.data()["messages"];
    messages = messages.map((obj, i) => ({
      ...obj,
      createdAt: obj["createdAt"].toDate(),
    }));
    return { id: doc.id, messages: messages };
  };

  const getMessages = async () => {
    const chatTabData = await firestore
      .collection("chat")
      .doc(chatTab.id)
      .get();

    let messagesNow = chatTabData.data()["messages"];
    messagesNow = messagesNow.map((obj, i) => ({
      ...obj,
      createdAt: obj["createdAt"].toDate(),
    }));
    messagesNow.sort((a, b) => b.createdAt - a.createdAt);

    setMessages(messagesNow);
  };

  useEffect(() => {
    getMessages();
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    for (let message of messages) {
      updateDoc(doc(firestore, "chat", chatTab.id), {
        messages: arrayUnion(message),
      }).then((res) => {
        console.log("Foi");
      });
    }
  }, []);

  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: uid,
        name: "teste",
      }}
    />
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

export default ChatTab;
