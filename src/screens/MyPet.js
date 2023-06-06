import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { firestore } from "../../firebase";

import { StyleSheet, SafeAreaView } from "react-native";

import { useSelector } from "react-redux";

import { useIsFocused } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const MyPet = ({ route, navigation }) => {
  const { pet } = route.params;

  const { uid } = useSelector((state) => state.user.data);

  console.log(uid);

  const { AdotarButtonView, StandardButton, AdotarButtonText } = styles;

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const collectIdsAndDocs = (doc) => {
    return { id: doc.id, ...doc.data() };
  };

  const getPost = async () => {
    const snapshot = await firestore
      .collection("users")
      .where("userId", "==", uid)
      .get();
    const user = snapshot.docs.map(collectIdsAndDocs);
    setUser(user[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    getPost();
  }, []);

  var petImage =
    pet.especie == "cachorro"
      ? require("../../assets/dog.jpg")
      : require("../../assets/cat.jpg");

  if (typeof pet.imageBase64 !== "undefined") {
    if (pet.imageBase64 !== "") {
      petImage = { uri: pet.imageBase64 };
    }
  }

  const {
    acompanhamento_pos,
    auxilio_financeiro,
    termo_apadrinhamento,
    visitas,
  } = pet.exigencias;

  let exigenciasList = [];
  let precisaList = [];

  if (acompanhamento_pos) {
    if (acompanhamento_pos == "1mes") {
      exigenciasList.push("acompanhamento pós-adoção de 1 mês");
    }

    if (acompanhamento_pos == "3meses") {
      exigenciasList.push("acompanhamento pós-adoção de 3 meses");
    }

    if (acompanhamento_pos == "6meses") {
      exigenciasList.push("acompanhamento pós-adoção de 6 meses");
    }
  }

  if (termo_apadrinhamento) {
    exigenciasList.push("termo de apadrinhamento");
  }

  if (visitas) {
    exigenciasList.push("visitas");
  }

  if (auxilio_financeiro) {
    if (auxilio_financeiro.alimentacao) {
      precisaList.push("auxílio financeiro");
    }

    if (auxilio_financeiro.objetos) {
      precisaList.push("objetos");
    }

    if (auxilio_financeiro.saude) {
      precisaList.push("gastos com saúde");
    }
  }

  const temperamento = pet.temperamento;
  let temperamentoList = [];

  if (temperamento) {
    if (temperamento.amoroso) {
      if (pet.sexo == "macho") {
        temperamentoList.push("amoroso");
      } else {
        temperamentoList.push("amorosa");
      }
    }

    if (temperamento.brincalhao) {
      if (pet.sexo == "macho") {
        temperamentoList.push("brincalhão");
      } else {
        temperamentoList.push("brincalhona");
      }
    }

    if (temperamento.calmo) {
      if (pet.sexo == "macho") {
        temperamentoList.push("calmo");
      } else {
        temperamentoList.push("calma");
      }
    }

    if (temperamento.guarda) {
      temperamentoList.push("guarda");
    }

    if (temperamento.preguicoso) {
      if (pet.sexo == "macho") {
        temperamentoList.push("preguiçoso");
      } else {
        temperamentoList.push("preguiçosa");
      }
    }

    if (temperamento.timido) {
      if (pet.sexo == "macho") {
        temperamentoList.push("tímido");
      } else {
        temperamentoList.push("tímida");
      }
    }
  }

  let exigenciasText = exigenciasList.join(", ");
  let precisaText = precisaList.join(", ");
  let temperamentoText = temperamentoList.join(", ");

  exigenciasText =
    exigenciasText.charAt(0).toUpperCase() + exigenciasText.slice(1) + ".";
  precisaText =
    precisaText.charAt(0).toUpperCase() + precisaText.slice(1) + ".";
  temperamentoText =
    temperamentoText.charAt(0).toUpperCase() + temperamentoText.slice(1) + ".";

  const petInfo = {
    nome: pet.nome,
    sexo: pet.sexo == "macho" ? "Macho" : "Fêmea",
    porte: pet.porte.charAt(0).toUpperCase() + pet.porte.slice(1),
    idade: pet.idade.charAt(0).toUpperCase() + pet.idade.slice(1),
    castrado: pet.saude.castrado ? "Sim" : "Não",
    vermifugado: pet.saude.vermifugado ? "Sim" : "Não",
    vacinado: pet.saude.vacinado ? "Sim" : "Não",
    doencas: pet.doencas,
    temperamento: temperamentoText,
    precisa: precisaText,
    exigencias: exigenciasText,
    sobre: pet.sobre,
  };

  return (
    <>
      {!isLoading ? (
        <SafeAreaView>
          <ImageBackground style={styles.petImageStyle} source={petImage}>
            <View style={styles.BackgroundImageView}>
              <View style={styles.ButtonOnImage}>
                <TouchableOpacity>
                  <View style={styles.EditIconView}>
                    <MaterialIcons
                      style={styles.EditIcon}
                      name="edit"
                      size={24}
                      color="black"
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.container}>
            <View>
              <Text style={styles.PetNameText}>{petInfo.nome}</Text>
            </View>
            <View style={styles.DescriptionRowView}>
              <View style={styles.DescriptionView}>
                <Text style={styles.DescriptionTitleText}>SEXO</Text>
                <Text style={styles.DescriptionText}>{petInfo.sexo}</Text>
              </View>
              <View style={styles.DescriptionView}>
                <Text style={styles.DescriptionTitleText}>PORTE</Text>
                <Text style={styles.DescriptionText}>{petInfo.porte}</Text>
              </View>
              <View style={styles.DescriptionView}>
                <Text style={styles.DescriptionTitleText}>IDADE</Text>
                <Text style={styles.DescriptionText}>{petInfo.idade}</Text>
              </View>
            </View>
            <View style={styles.DescriptionRowView}>
              <View style={styles.DescriptionView}>
                <Text style={styles.DescriptionTitleText}>LOCALIZAÇÃO</Text>
                <Text style={styles.DescriptionText}>{user.address}</Text>
              </View>
            </View>
            <View style={styles.FlatLine} />
            <View style={styles.DescriptionRowView}>
              <View style={styles.DescriptionView}>
                <Text style={styles.DescriptionTitleText}>CASTRADO</Text>
                <Text style={styles.DescriptionText}>{petInfo.castrado}</Text>
              </View>
              <View style={styles.DescriptionView}>
                <Text style={styles.DescriptionTitleText}>VERMIFUGADO</Text>
                <Text style={styles.DescriptionText}>
                  {petInfo.vermifugado}
                </Text>
              </View>
            </View>
            <View style={styles.DescriptionRowView}>
              <View style={styles.DescriptionView}>
                <Text style={styles.DescriptionTitleText}>VACINADO</Text>
                <Text style={styles.DescriptionText}>{petInfo.vacinado}</Text>
              </View>
              <View style={styles.DescriptionView}>
                <Text style={styles.DescriptionTitleText}>DOENÇAS</Text>
                <Text style={styles.DescriptionText}>{petInfo.doencas}</Text>
              </View>
            </View>
            <View style={styles.FlatLine} />
            <View style={styles.DescriptionRowView}>
              <View style={styles.DescriptionView}>
                <Text style={styles.DescriptionTitleText}>TEMPERAMENTO</Text>
                <Text style={styles.DescriptionText}>
                  {petInfo.temperamento}
                </Text>
              </View>
            </View>
            <View style={styles.FlatLine} />
            <View style={styles.DescriptionRowView}>
              <View style={styles.DescriptionView}>
                <Text style={styles.DescriptionTitleText}>
                  {pet.nome} PRECISA DE
                </Text>
                <Text style={styles.DescriptionText}>{petInfo.precisa}</Text>
              </View>
            </View>
            <View style={styles.FlatLine} />
            <View style={styles.DescriptionRowView}>
              <View style={styles.DescriptionView}>
                <Text style={styles.DescriptionTitleText}>
                  EXIGÊNCIAS DO DOADOR
                </Text>
                <Text style={styles.DescriptionText}>{petInfo.exigencias}</Text>
              </View>
            </View>
            <View style={styles.FlatLine} />
            <View style={styles.DescriptionRowView}>
              <View style={styles.DescriptionView}>
                <Text style={styles.DescriptionTitleText}>
                  MAIS SOBRE {pet.nome}
                </Text>
                <Text style={styles.DescriptionText}>{petInfo.sobre}</Text>
              </View>
            </View>
            <View style={styles.ButtonRow}>
              <TouchableOpacity style={styles.StandardButton}>
                <Text style={styles.ButtonText}>VER INTERESSADOS</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.StandardButton}>
                <Text style={styles.ButtonText}>REMOVER PET</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      ) : (
        <View></View>
      )}
    </>
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
    height: 200,
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
  EditIconView: {
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fafafa",
    height: 60,
    width: 60,
    shadowColor: "#434343",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },

  EditIcon: {
    color: "#434343",
  },

  BackgroundImageView: {
    height: 225,
  },

  ButtonOnImage: {
    alignSelf: "flex-end",
    flex: 1,
    justifyContent: "flex-end",
    paddingRight: 24,
  },

  PetNameText: {
    fontSize: 16,
    color: "#434343",
    marginBottom: 8,
  },
  DescriptionTitleText: {
    textTransform: "uppercase",
    color: "#589b9b",
  },
  DescriptionText: {
    color: "#757575",
    fontSize: 14,
  },
  DescriptionView: {
    gap: 4,
  },
  DescriptionRowView: {
    flexDirection: "row",
    gap: "50%",
    marginVertical: 8,
  },
  ButtonRow: {
    marginVertical: 28,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    margin: 16,
  },
  StandardButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 3,
    width: "45%",
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
  FlatLine: {
    backgroundColor: "#e0e0e0",
    height: 0.8,
  },
});

export default MyPet;
