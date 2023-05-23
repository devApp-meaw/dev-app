import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { firestore } from "../../firebase";

import { StyleSheet, SafeAreaView } from "react-native";

const FetchAnimals = (props) => {
  const { AdotarButtonView, StandardButton, AdotarButtonText } = styles;

  const userEmail = props.userEmail;
  const [animals, setAnimals] = useState(null);

  const collectIdsAndDocs = (doc) => {
    return { id: doc.id, ...doc.data() };
  };

  const getPost = async () => {
    const snapshot = await firestore.collection("animals").get();
    const animals = snapshot.docs.map(collectIdsAndDocs);
    setAnimals(animals);
  };

  useEffect(() => {
    getPost();
  }, []);

  const handleAdoptAnimal = (id) => {
    firestore
      .collection("animals")
      .doc(id)
      .update({ email: userEmail })
      .then(() => {
        console.log("Animal alterado");
        getPost();
      });
  };

  const handlePutAdoption = (id) => {
    firestore
      .collection("animals")
      .doc(id)
      .update({ email: "" })
      .then(() => {
        console.log("Animal alterado");
        getPost();
      });
  };

  return (
    <SafeAreaView>
      <View>
        <Text>E-mail atual: {userEmail}</Text>
      </View>
      <View>
        <Text>Meus animais:</Text>
        <FlatList
          data={animals}
          renderItem={({ item }) => {
            const animalId = item.id;
            if (item.email == userEmail) {
              return (
                <View>
                  <Text> {item.nome} </Text>
                  <View style={AdotarButtonView}>
                    <TouchableOpacity
                      onPress={() => handlePutAdoption(animalId)}
                      style={StandardButton}
                    >
                      <Text style={AdotarButtonText}>BOTAR PARA A ADOÇÃO</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }
          }}
          keyExtractor={(item) => item.id}
          extraData={animals}
        />
      </View>
      <View>
        <Text>Animais alheios:</Text>
        <FlatList
          data={animals}
          renderItem={({ item }) => {
            const animalId = item.id;
            if (item.email != userEmail) {
              return (
                <View>
                  <Text> {item.nome} </Text>
                  <View style={AdotarButtonView}>
                    <TouchableOpacity
                      onPress={() => handleAdoptAnimal(animalId)}
                      style={StandardButton}
                    >
                      <Text style={AdotarButtonText}>ADOTAR</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }
          }}
          keyExtractor={(item) => item.id}
          extraData={animals}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  StandardButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 320,
    height: 50,
    shadowColor: "black",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    backgroundColor: "#ffd358",
  },
  AdotarButtonView: {
    marginTop: 22,
    gap: 16,
    alignItems: "center",
    paddingBottom: 34,
  },
  AdotarButtonText: {
    fontSize: 12,
    color: "#434343",
  },
});

export default FetchAnimals;
