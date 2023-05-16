// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyD2-7f6TwxN44Es6xeU3H_5FKtGHFCcEvg",
  authDomain: "meow-auth-c73ed.firebaseapp.com",
  projectId: "meow-auth-c73ed",
  storageBucket: "meow-auth-c73ed.appspot.com",
  messagingSenderId: "388750871006",
  appId: "1:388750871006:web:bbb12c81f154c46902b54f",
};

// Your web app's Firebase configuration
let app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

const createUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email } = user;
    const { fullName, age, state, city, address, telephone, userName } =
      additionalData;

    try {
      userRef.set({
        fullName,
        email,
        age,
        state,
        city,
        address,
        telephone,
        userName,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log("Error in creating user", error);
    }
  }
};

const AddAnimal = async (form_animal) => {
  try {
    const {
      nome,
      especie,
      sexo,
      porte,
      idade,
      brincalhao,
      timido,
      calmo,
      guarda,
      amoroso,
      preguicoso,
      vacinado,
      vermifugado,
      castrado,
      doente,
      doencas,
      termo_apadrinhamento,
      alimentacao,
      saude,
      objetos,
      visitas,
      acompanhamento_pos,
      sobre,
    } = form_animal;

    await firestore.collection("animals").add({
      nome: nome,
      especie: especie,
      sexo: sexo,
      porte: porte,
      idade: idade,
      temperamento: {
        brincalhao: brincalhao,
        timido: timido,
        calmo: calmo,
        guarda: guarda,
        amoroso: amoroso,
        preguicoso: preguicoso,
      },
      saude: {
        vacinado: vacinado,
        vermifugado: vermifugado,
        castrado: castrado,
        doente: doente,
      },
      doencas: doencas,
      exigencias: {
        termo_apadrinhamento: termo_apadrinhamento,
        auxilio_financeiro: {
          alimentacao: alimentacao,
          saude: saude,
          objetos: objetos,
        },
        visitas: visitas,
        acompanhamento_pos: acompanhamento_pos,
      },
      sobre: sobre,
    });
    console.log("Animal adicionado.");
  } catch (error) {
    console.log(error);
  }
};

export { auth, firestore, firebase, createUserDocument, AddAnimal };
