import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Alert,
  CheckBox,
} from "react-native";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { Checkbox, RadioButton } from "react-native-paper";
import { useSelector } from "react-redux";
import { setSpecies } from "../../redux/animalRegistrationSlice";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";

const FormSpecies = () => {
  const [especieButton, setEspecieButton] = useState(null);

  const { Row, TextField, CheckboxContainer, CheckboxText, Title } = styles;
  const dispatch = useDispatch();
  const handleSpecies = (specie) => {
    setEspecieButton(specie);
    dispatch(setSpecies(specie));
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      dog: "",
      cat: "",
    },
    mode: "onChange",
  });
  const onSubmit = (data) => console.log(data);

  return (
    <View style={TextField}>
      <View style={Row}>
        <Text style={Title}>ESPÉCIE</Text>
      </View>
      <View style={Row}>
        <View style={CheckboxContainer}>
          <Controller
            name='dog'
            defaultValue=''
            control={control}
            rules={{
              required: true,
            }}
            render={({ onBlur, onChange, value }) => (
              <RadioButton.Android
                style={styles.checkbox}
                value={value}
                status={especieButton === "cachorro" ? "checked" : "unchecked"}
                onPress={onChange}
              />
            )}
          />
          {errors.dog && <Text>This is required.</Text>}
          <Text style={CheckboxText}>Cachorro</Text>
        </View>
        <Text> {especieButton}</Text>
        <View style={CheckboxContainer}>
          <Controller
            name='cat'
            control={control}
            rules={{
              required: true,
            }}
            render={({ onBlur, onChange, value }) => (
              <RadioButton.Android
                style={styles.checkbox}
                value={value}
                status={especieButton === "gato" ? "checked" : "unchecked"}
                onPress={onChange}
              />
            )}
          />
          {errors.cat && <Text>This is required.</Text>}
          <Text style={CheckboxText}>Gato</Text>
          <Button title='Submit' onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  TextField: {
    marginHorizontal: 25,
    marginBottom: 20,
  },
  TextRow: {
    width: "100%",
  },
  Row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    display: "flex",
    marginBottom: 2,
  },
  Col: {
    width: "30%",
    flexDirection: "row",
    padding: 20,
    margin: 10,
  },
  ButtonStyle: {
    backgroundColor: "#ffd358",
    padding: 5,
  },
  CheckboxContainer: {
    paddingTop: 6,
    width: "30%",
    flexDirection: "row",
  },
  LargeCheckboxContainer: {
    paddingTop: 6,
    width: "100%",
    flexDirection: "row",
  },
  CheckboxText: {
    fontSize: 14,
    marginTop: 6,
  },
  Title: {
    color: "#f7a800",
  },
  BigTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 10,
  },
  OffsetRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    display: "flex",
    marginLeft: 45,
  },
  Disabled: {
    color: "#bdbdbd",
  },
  ButtonSection: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
  },
  Images: {
    backgroundColor: "#f1f2f2",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
    width: 312,
    height: 128,
    elevation: 20,
    shadowColor: "#171717",
    marginTop: 12,
    marginRight: 45,
    marginBottom: 25,
  },
  ImageUploadBox: {
    marginTop: 18,
    color: "#757575",
    backgroundColor: "#e6e7e7",
    height: 128,
    borderRadius: 2,
    alignItems: "center",
    textAlignVertical: "center",
    paddingTop: 42,
    shadowColor: "black",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  ImageUploadIcon: {
    color: "#757575",
    fontSize: 22,
  },
  ImageUploadText: {
    fontSize: 14,
    color: "#757575",
  },
  inputArea: {
    marginTop: 64,
    flexDirection: "column",
    gap: 20,
  },
  checkbox: {
    marginRight: 6,
  },
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
  HeaderTextView: { marginTop: 8, marginBottom: 24 },
  InputText: {
    height: 40,
    margin: 12,
    padding: 10,
    fontSize: 14,
    borderBottomWidth: 0.8,
    borderBottomColor: "#e6e7e8",
  },
  ImageUploadView: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
});

export default FormSpecies;
