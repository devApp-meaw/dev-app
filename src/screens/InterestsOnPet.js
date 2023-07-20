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

import { collection, getDocs, query, where, updateDoc, doc, arrayRemove, deleteDoc} from "firebase/firestore";

const _widthImage = Dimensions.get("screen").width * 0.35;

const InterestsOnPet = ({ route, navigation }) => {
  var { interests, pet } = route.params;
  const { uid } = useSelector((state) => state.user.data);
  const collectIdsAndDocs = (doc) => {
    return { id: doc.id, ...doc.data() };
  };

  const [users, setUsers] = useState(null);

  const isFocused = useIsFocused();

  const openChat = async (animalId, interestedUser) => {
    const queryChats = query(
      collection(firestore, "chat"),
      where("interested", "==", interestedUser),
      where("pet", "==", animalId),
      where("owner", "==", uid)
    );
    
    chatsSnapchots = await getDocs(queryChats);

    var count = 0;
    chatsSnapchots.forEach((doc) => {
      count+=1;
    });
    console.log(count);

    if (count == 0) {
      await firestore.collection("chat").add({
        owner: uid,
        interested: interestedUser,
        pet: animalId,
        createdAt: new Date(),
        messages: [],
      });
    }

    navigation.navigate("Chat");
  };

  const ignoreInterest = async (intereseted, animalId) => {
    await updateDoc(doc(firestore, "animals", animalId), {
      interests: arrayRemove(intereseted),
    });

    const queryInterests = query(
      collection(firestore, "chat"),
      where("interested", "==", intereseted),
      where("pet", "==", animalId)
    );

    interestsSnapshot = await getDocs(queryInterests);

    interestsSnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });

    console.log("Interesse removido");

    navigation.navigate("MyPets");
  };

  const getUser = async (id) => {
    const UserSnapshot = await firestore
      .collection("users")
      .where("userId", "==", id)
      .get();
    const user = UserSnapshot.docs.map(collectIdsAndDocs)[0];

    return user;
  };

  const getPost = async () => {
    let detailedUsers = [];

    for (const interestedUser of interests) {
      let detailedUser = await getUser(interestedUser);
      detailedUsers.push(detailedUser);
    }

    setUsers(detailedUsers);
  };

  useEffect(() => {
    getPost();
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.mainContainerStyle}>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          let userImage;
          if (item.imageBase64) {
            userImage = { uri: item.imageBase64 };
          } else {
            userImage = require("../../assets/default_dog.jpg");
          }

          return (
            <View style={styles.UserView}>
              <Image style={styles.userImageStyle} source={userImage}></Image>
              <Text>{item.fullName}</Text>
              <Text>{item.age} anos</Text>
              
              <View style={styles.SmallButtonRow}>
                  <TouchableOpacity
                    onPress={() => openChat(pet.id, item.id)}
                    style={styles.StandardButton}
                  >
                  <Text style={styles.ButtonText}>ABRIR CHAT</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.SmallButtonRow}>
                <TouchableOpacity
                  onPress={() => ignoreInterest(item.id, pet.id)}
                  style={styles.StandardButton}
                >
                  <Text style={styles.ButtonText}>IGNORAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        key={"_"}
        numColumns={2}
        extraData={users}
      ></FlatList>
      <View style={styles.ButtonRow}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Chat")}
          style={styles.StandardButton}
        >
          <Text style={styles.ButtonText}>IR PARA O CHAT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainerStyle: {
    flexDirection: "column",
    flex: 1,
  },
  UserView: {
    width: "50%",
    alignSelf: "center",
    marginTop: 16,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  userImageStyle: {
    width: _widthImage,
    height: _widthImage,
    borderRadius: 100,
    marginBottom: 10,
  },
  ButtonRow: {
    marginVertical: 28,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  SmallButtonRow: {
    marginVertical: 5,
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
    color: "#505050",
  },
});

export default InterestsOnPet;
