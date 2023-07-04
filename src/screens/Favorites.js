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

const Favorites = ({ navigation }) => {
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
      where("interests", "array-contains", uid)
    );
    queryAnimalsSnapshot = await getDocs(queryAnimals);

    const animals = queryAnimalsSnapshot.docs.map(collectIdsAndDocs);

    setAnimals(animals);
  };

  useEffect(() => {
    getPost();
  }, [isFocused]);

  const handleUninterestPet = async (animalId) => {
    await updateDoc(doc(firestore, "animals", animalId), {
      interests: arrayRemove(uid),
    });

    console.log("Interesse removido");
  };

  return (
    <SafeAreaView>
      <FlatList
        data={animals}
        renderItem={({ item }) => {
          const animalInfo = {
            sexo: item.sexo === "macho" ? "Macho" : "Fêmea",
            endereco: item.endereco ? item.endereco : "Sem endereço",
            idade: item.idade,
            porte: item.porte === "medio" ? "Médio" : item.porte,
          };
          const animalId = item.id;
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
                  <TouchableOpacity
                    style={styles.HeartIcon}
                    onPress={() => handleUninterestPet(animalId)}
                  >
                    <AntDesign name="heart" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                <View>
                  <Image style={styles.petImageStyle} source={petImage}></Image>
                </View>
                <View style={styles.DetailsView}>
                  <View style={styles.Row}>
                    <Text style={styles.DetailsText}>{animalInfo.sexo}</Text>
                    <Text style={styles.DetailsText}>{animalInfo.idade}</Text>
                    <Text style={styles.DetailsText}>{animalInfo.porte}</Text>
                  </View>
                  <Text style={styles.DetailsText}>{animalInfo.endereco}</Text>
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
    backgroundColor: "#88c9bf",
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
    textTransform: "uppercase",
  },

  HeartIcon: {
    marginLeft: "auto",
    marginRight: 10,
  },

  Row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    display: "flex",
    marginBottom: 4,
  },
});

export default Favorites;
