import React from "react";

import { SafeAreaView } from "react-native";
import FetchAnimals from "./FetchAnimals";

const ListAnimals = ({ navigation }) => {
  const userEmail = "gabrielciriatico@gmail.com";

  return (
    <SafeAreaView>
      <FetchAnimals userEmail={userEmail} />
    </SafeAreaView>
  );
};

export default ListAnimals;
