import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { firestore } from "../../firebase";

import { StyleSheet, SafeAreaView } from "react-native";

import { useSelector } from "react-redux";

const FilterPets = (props) => {
  const { uid } = useSelector((state) => state.user.data);

  console.log(uid);

  const { AdotarButtonView, StandardButton, AdotarButtonText } = styles;

  const [animals, setAnimals] = useState(null);

  const collectIdsAndDocs = (doc) => {
    return { id: doc.id, ...doc.data() };
  };

  const getPost = async () => {
    const snapshot = await firestore
      .collection("animals")
      .where("userId", "==", uid)
      .get();
    const animals = snapshot.docs.map(collectIdsAndDocs);
    setAnimals(animals);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={animals}
        renderItem={({ item }) => {
          const animalId = item.id;
          const especie = item.especie == "cachorro" ? "dog" : "cat";
          const petImage =
            item.especie == "cachorro"
              ? require("../../assets/dog.jpg")
              : require("../../assets/cat.jpg");

          return (
            <View style={styles.PetView}>
              <View style={styles.NameView}>
                <Text> {item.nome} </Text>
              </View>
              <View>
                <Image style={styles.petImageStyle} source={petImage}></Image>
              </View>
              <View style={styles.DetailsView}>
                <Text>X NOVOS INTERESSADOS</Text>
                <Text>APADRINHAMENTO | AJUDA</Text>
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
    width: 380,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },

  NameView: {
    borderTopLeftRadius: 4,
    borderTopEndRadius: 4,
    backgroundColor: "#cfe9e5",
  },

  petImageStyle: {
    width: "100%",
    height: 183,
  },

  DetailsView: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: 4,
    borderBottomEndRadius: 4,
  },
});

export default FilterPets;
