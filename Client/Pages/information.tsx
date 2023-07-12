import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../Context/userContext";

export const Information = (props: any) => {
  const { matches }: any = useContext(UserContext);

  console.log(matches);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>De apelido aos patos!</Text>
      <View style={styles.container}>
        <SafeAreaView style={{ width: "100%", marginTop: 50 }}>
          <Text style={styles.title}>Jogador 1</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira o apelido do jogador 1"
            placeholderTextColor="white"
          />
          <Text style={styles.title}>Jogador 1</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira o apelido do jogador 2"
            placeholderTextColor="white"
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    alignItems: "center",
  },

  title: {
    color: "white",
    marginLeft: 15,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#D9BA61",
    borderRadius: 10,
    width: 325,
    color: "white",
    minHeight: 50,
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
