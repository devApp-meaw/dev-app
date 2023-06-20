import React, { useState, useEffect } from "react";
import {
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
  Modal,
} from "react-native";
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

import { Checkbox, RadioButton } from "react-native-paper";

const FinalizarAdocao = ({ navigation }) => {
  const { uid } = useSelector((state) => state.user.data);

  const [modalVisible, setModalVisible] = useState(false);
  const [animals, setAnimals] = useState(null);
  const [interestsPets, setInterestsPets] = useState(null);
  const [detailedUsers, setDetailedUsers] = useState(null);

  const collectIdsAndDocs = (doc) => {
    return { id: doc.id, ...doc.data() };
  };

  const isFocused = useIsFocused();

  const handleAdoption = async (animalId, userId) => {
    await updateDoc(doc(firestore, "animals", animalId), {
      userId: userId,
      adocao: false,
      interests: [],
    });

    console.log("Animal adotado!");
  };

  const getUser = async (userId) => {
    const snapshot = await firestore
      .collection("users")
      .where("userId", "==", userId)
      .get();
    const user = snapshot.docs.map(collectIdsAndDocs)[0];

    const userNow = {
      id: user.id,
      fullName: user.fullName,
      userName: user.userName,
    };

    return userNow;
  };

  const getPost = async () => {
    const snapshot = await firestore
      .collection("animals")
      .where("userId", "==", uid)
      .get();
    const animals = snapshot.docs.map(collectIdsAndDocs);

    const interestsAnimals = {};
    const usersObject = {};

    for (let animal of animals) {
      let interestsNow = [];

      for (let interest of animal.interests) {
        if (!(interest in usersObject)) {
          let userInfo = await getUser(interest);
          usersObject[userInfo.id] = userInfo;
        }

        interestsNow.push(interest);
      }
      interestsAnimals[animal.id] = interestsNow;
    }

    setDetailedUsers(usersObject);
    setInterestsPets(interestsAnimals);
    setAnimals(animals);
  };

  useEffect(() => {
    getPost();
  }, [isFocused]);

  const [animalsBox, setAnimalsBox] = useState({
    selected: null,
    selectedName: null,
  });
  const [usersBox, setUsersBox] = useState({ selected: null });

  return (
    <SafeAreaView style={styles.mainContainerStyle}>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                LEIA ATENTAMENTE ANTES DE PROSSEGUIR
              </Text>
              <Text style={styles.modalText}>
                Antes de realizar este passo, certifique-se de que o adotante ou
                padrinho tenha cumprido todos os requisitos prévios à adoção.
                Além disso, esteja certo de que ele já está em posse do animal
                em questão.
              </Text>
              <Text style={styles.modalText}>
                Após finalizar este processo, o seu animal será automaticamente
                removido da lista de pets para adoção/apadrinhamento.
              </Text>
              <Text style={styles.modalText}>
                Além disso, é importante ressaltar que as suas informações de
                cadastro serão disponibilizadas para o usuário que está adotando
                ou apadrinhando seu animal, assim como você também terá acesso à
                todas as informações fornecidas por ele(a).
              </Text>
              <Text style={styles.modalText}>
                Ao clicar em "li e concordo", você declara ter lido,
                compreendido e concordado com os termos acima expostos.
              </Text>
            </View>
            <View style={styles.ButtonRow}>
              <TouchableOpacity
                onPress={() => {
                  handleAdoption(animalsBox.selected, usersBox.selected);
                  setModalVisible(!modalVisible);
                  navigation.navigate("ProcessoFinalizado", {
                    pet: animalsBox.selectedName,
                  });
                }}
                style={styles.StandardButton}
              >
                <Text style={styles.ButtonText}>LI E CONCORDO</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ButtonRow}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={styles.StandardButton}
              >
                <Text style={styles.ButtonText}>CANCELAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Text>SELECIONE O(S) ANIMAL(IS)</Text>
        <FlatList
          data={animals}
          renderItem={({ item }) => {
            const animalId = item.id;
            const animalName = item.nome;
            return (
              <View style={styles.CheckboxContainer}>
                <Checkbox.Android
                  style={styles.checkbox}
                  status={
                    animalsBox.selected === animalId ? "checked" : "unchecked"
                  }
                  onPress={() => {
                    let newData = {
                      selected: animalId,
                      selectedName: animalName,
                    };
                    setUsersBox({ selected: null });
                    setAnimalsBox(newData);
                  }}
                />
                <Text style={styles.CheckboxText}>{item.nome}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
          extraData={animals}
        ></FlatList>
      </View>
      {animalsBox.selected ? (
        <View>
          <Text>SELECIONE O USUÁRIO</Text>
          <FlatList
            data={interestsPets[animalsBox.selected]}
            renderItem={({ item }) => {
              return (
                <View style={styles.CheckboxContainer}>
                  <RadioButton.Android
                    style={styles.checkbox}
                    status={
                      usersBox.selected === item ? "checked" : "unchecked"
                    }
                    onPress={() => {
                      let newData = { selected: item };
                      setUsersBox(newData);
                    }}
                  />
                  <Text style={styles.CheckboxText}>
                    {detailedUsers[item].fullName}
                  </Text>
                </View>
              );
            }}
            keyExtractor={(item) => item}
            extraData={interestsPets[animalsBox.selected]}
          ></FlatList>
        </View>
      ) : (
        <View></View>
      )}
      <View style={[styles.ButtonRow, styles.floatingMenuButtonStyle]}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.StandardButton}
        >
          <Text style={styles.ButtonText}>FINALIZAR UMA ADOÇÃO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    marginRight: 6,
  },
  CheckboxContainer: {
    paddingTop: 6,
    width: "30%",
    flexDirection: "row",
  },
  CheckboxText: {
    fontSize: 14,
    marginTop: 6,
  },
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
    bottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default FinalizarAdocao;
