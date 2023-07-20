import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { firestore } from "../../firebase";

import { StyleSheet, SafeAreaView } from "react-native";

import { useSelector } from "react-redux";

import { useIsFocused } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";

import {
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import MeauNotifications from "../notifications/MeauNotifications";

const AdoptPet = ({ navigation }) => {
  const { uid } = useSelector((state) => state.user.data);

  const { AdotarButtonView, StandardButton, AdotarButtonText } = styles;

  const [animals, setAnimals] = useState(null);
  const [interests, setInterests] = useState(null);

  const collectIdsAndDocs = (doc) => {
    return { id: doc.id, ...doc.data() };
  };

  const collectIds = (doc) => {
    return doc.id;
  };

  const isFocused = useIsFocused();

  const getInterests = async () => {
    const queryInterests = query(
      collection(firestore, "animals"),
      where("interests", "array-contains", uid)
    );

    onSnapshot(queryInterests, (snapshot) => {
      let interestsNow = snapshot.docs.map(collectIds);
      setInterests(interestsNow);
    });
  };

  const getPost = async () => {
    getInterests();

    const queryAnimals = query(
      collection(firestore, "animals"),
      where("userId", "!=", uid),
      where("adocao", "==", true)
    );
    onSnapshot(queryAnimals, (snapshot) => {
      let animals = snapshot.docs.map(collectIdsAndDocs);
      setAnimals(animals);
    });
  };

  useEffect(() => {
    getPost();
  }, [isFocused]);

  const handleInterestPet = async (animal) => {

    animalId = animal.id;
    ownerId = animal.userId;
    
    currentUser = await firestore.collection("users").doc(uid).get();

    console.log(currentUser);

    try {
      await updateDoc(doc(firestore, "animals", animalId), {
        interests: arrayUnion(uid),
      });
    } catch (ex) {
      console.log("Erro ao adicionar interesse!");
      return;
    }

    await firestore.collection("chat").add({
      owner: ownerId,
      interested: uid,
      pet: animalId,
      createdAt: new Date(),
      messages: [],
    });

    console.log("Interesse adicionado");

    MeauNotifications.sendPushNotificationToUser(
      ownerId, data={
        title: "Novo interesse em " + animal.nome, 
        body: "Usuario " + currentUser.nome + " esta interessado no seu pet!",
        data: { animal: animal.id }
      });
  };

  const handleUninterestPet = async (animalId) => {
    await updateDoc(doc(firestore, "animals", animalId), {
      interests: arrayRemove(uid),
    });

    const queryInterests = query(
      collection(firestore, "chat"),
      where("interested", "==", uid),
      where("pet", "==", animalId)
    );

    interestsSnapshot = await getDocs(queryInterests);

    interestsSnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });

    console.log("Interesse removido");
  };

  return (
    <SafeAreaView>
      <FlatList
        data={animals}
        renderItem={({ item }) => {
          const animal   = item;
          const animalId = item.id;
          const ownerId = item.userId;
          const petImage =
            item.especie == "cachorro"
              ? require("../../assets/default_dog.jpg")
              : require("../../assets/default_cat.jpg");

          return (
            <View style={styles.PetView}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Pet", { pet: item })}
              >
                <View style={styles.NameView}>
                  <Text style={styles.NameText}> {item.nome} </Text>
                  {interests.includes(animalId) ? (
                    <>
                      <TouchableOpacity
                        style={styles.HeartIcon}
                        onPress={() => {
                          {
                            handleUninterestPet(animalId);
                          }
                        }}
                      >
                        <AntDesign name="heart" size={24} color="black" />
                      </TouchableOpacity>
                    </>
                  ) : (
                    <>
                      <TouchableOpacity
                        style={styles.HeartIcon}
                        onPress={() => {
                          handleInterestPet(animal);
                        }}
                      >
                        <AntDesign name="hearto" size={24} color="black" />
                      </TouchableOpacity>
                    </>
                  )}
                </View>
                <View>
                  <Image style={styles.petImageStyle} source={petImage}></Image>
                </View>
                <View style={styles.DetailsView}>
                  <Text style={styles.DetailsText}>
                    {item.interests.length} INTERESSADOS
                  </Text>
                  <Text style={styles.DetailsText}>APADRINHAMENTO | AJUDA</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        extraData={animals}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  PetView: {
    width: "90%",
    alignSelf: "center",
    marginTop: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 4,
  },

  NameView: {
    flexDirection: "row",
    height: 35,
    alignItems: "center",
    borderTopLeftRadius: 4,
    borderTopEndRadius: 4,
    backgroundColor: "#fee29b",
  },

  NameText: {
    paddingLeft: 8,
    fontSize: 16,
    color: "#434343",
  },

  petImageStyle: {
    width: "100%",
    height: 183,
  },

  DetailsView: {
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 4,
    borderBottomEndRadius: 4,
  },

  DetailsText: {
    textAlign: "center",
    color: "#757575",
  },

  HeartIcon: {
    marginLeft: "auto",
    marginRight: 10,
  },
});

export default AdoptPet;
