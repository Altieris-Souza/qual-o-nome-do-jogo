import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Vibration,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../Context/userContext";

export const Information = (props: any) => {
  const { matches, namePlayers }: any = useContext(UserContext);

  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  const handleChangePlayerOne = (name: any) => {
    setPlayerOne(name);
  };

  const handleChangePlayerTwo = (name: any) => {
    setPlayerTwo(name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>De apelido aos patos!</Text>
      <View style={{ alignItems: "center" }}>
        <SafeAreaView style={{ marginTop: 50 }}>
          <View style={{ marginTop: 20, marginBottom: 30 }}>
            <Text style={styles.title}>Jogador 1</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira o apelido do jogador 1"
              placeholderTextColor="white"
              onChangeText={handleChangePlayerOne}
            />
          </View>
          <Text style={styles.title}>Jogador 2</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira o apelido do jogador 2"
            placeholderTextColor="white"
            onChangeText={handleChangePlayerTwo}
          />
        </SafeAreaView>
      </View>
      <TouchableOpacity
        onPress={() => {
          namePlayers(playerOne, playerTwo);
          props.navigation.navigate("Main");
        }}
        style={styles.button}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          Inciar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    alignItems: "center",
    width: "100%",
  },

  button: {
    width: 325,
    backgroundColor: "transparent",
    borderRadius: 8,
    alignSelf: "center",
    padding: 15,
    borderColor: "#D9BA61",
    borderWidth: 2,
    marginTop: 50,
  },

  title: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
    marginLeft: 15,
    textShadowColor: "#D9BA61",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#D9BA61",
    borderRadius: 8,
    width: 325,
    color: "white",
    minHeight: 60,
  },

  text: {
    marginTop: 150,
    color: "white",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "700",
    textShadowColor: "#D9BA61",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
});
