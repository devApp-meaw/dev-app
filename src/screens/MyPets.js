import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { firestore } from "../../firebase";

import { StyleSheet, SafeAreaView } from "react-native";

import { useSelector } from "react-redux";

import { useIsFocused } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

const MyPets = ({ navigation }) => {
  const { uid } = useSelector((state) => state.user.data);

  console.log(uid);

  const { AdotarButtonView, StandardButton, AdotarButtonText } = styles;

  const [animals, setAnimals] = useState(null);

  const collectIdsAndDocs = (doc) => {
    return { id: doc.id, ...doc.data() };
  };

  const isFocused = useIsFocused();

  const getPost = async () => {
    const snapshot = await firestore
      .collection("animals")
      .where("userId", "==", uid)
      .get();
    const animals = snapshot.docs.map(collectIdsAndDocs);
    setAnimals(animals);
  };

  useEffect(() => {
    console.log("oiesds");
    getPost();
  }, [isFocused]);

  return (
    <SafeAreaView>
      <FlatList
        data={animals}
        renderItem={({ item }) => {
          const animalId = item.id;
          const especie = item.especie == "cachorro" ? "dog" : "cat";
          var petImage =
            item.especie == "cachorro"
              ? require("../../assets/dog.jpg")
              : require("../../assets/cat.jpg");

          if (typeof item.imageBase64 !== 'undefined') {
            petImage = { uri: item.imageBase64 };
          }

          return (
            <View style={styles.PetView}>
              <View style={styles.NameView}>
                <Text style={styles.NameText}> {item.nome} </Text>
                <Ionicons
                  style={styles.NotificationIcon}
                  name="alert-circle"
                  size={24}
                  color="black"
                />
              </View>
              <View>
                <Image style={styles.petImageStyle} source={petImage}></Image>
              </View>
              <View style={styles.DetailsView}>
                <Text style={styles.DetailsText}>X NOVOS INTERESSADOS</Text>
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
    backgroundColor: "#cfe9e5",
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

  NotificationIcon: {
    marginLeft: "auto",
    marginRight: 10,
  },
});

export default MyPets;
