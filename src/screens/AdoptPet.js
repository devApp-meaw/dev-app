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
} from "firebase/firestore";
import MeauNotifications from "../notifications/MeauNotifications";

const AdoptPet = ({ navigation }) => {
  const { uid } = useSelector((state) => state.user.data);

  const { AdotarButtonView, StandardButton, AdotarButtonText } = styles;

  const [animals, setAnimals] = useState(null);

  const collectIdsAndDocs = (doc) => {
    return { id: doc.id, ...doc.data() };
  };

  const isFocused = useIsFocused();

  const getPost = async () => {
    const queryAnimals = query(
      collection(firestore, "animals"),
      where("userId", "!=", uid),
      where("adocao", "==", true)
    );
    queryAnimalsSnapshot = await getDocs(queryAnimals);

    const animals = queryAnimalsSnapshot.docs.map(collectIdsAndDocs);

    setAnimals(animals);
  };

  useEffect(() => {
    getPost();
  }, [isFocused]);

  const handleInterestPet = async (animal) => {
    console.log("Interessou, ne?");

    animalId = animal.id;
    animalOwner = animal.userId;

    await updateDoc(doc(firestore, "animals", animalId), {
      interests: arrayUnion(uid),
    });

    console.log("Interesse adicionado");

    MeauNotifications.sendPushNotificationToUser(
      animalOwner, data={
        title:"Novo interesse em " + animal.nome, 
        body:"Usuario <TODO> esta interessado no seu pet!",
      });
  };

  return (
    <SafeAreaView>
      <FlatList
        data={animals}
        renderItem={({ item }) => {
          const animal   = item;
          const animalId = item.id;
          const petImage =
            item.especie == "cachorro"
              ? require("../../assets/default_dog.jpg")
              : require("../../assets/default_cat.jpg");

          return (
            <View style={styles.PetView}>
              <View style={styles.NameView}>
                <Text style={styles.NameText}> {item.nome} </Text>
                <TouchableOpacity
                  style={styles.HeartIcon}
                  onPress={() => handleInterestPet(animal)}
                >
                  <AntDesign name="hearto" size={24} color="black" />
                </TouchableOpacity>
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
