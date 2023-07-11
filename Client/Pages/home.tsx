import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Main } from "./main";

export const Home = (props: any) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "white",
          fontSize: 30,
          textAlign: "center",
          marginTop: 180,
          fontWeight: "700",
          textShadowColor: "#D9BA61",
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 10,
        }}
      >
        Qual modo de jogo você deseja?
      </Text>
      <View style={styles.containerViewButtons}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Information");
            // <Main matches={1}></Main>;
          }}
          style={styles.buttons}
        >
          <Text style={styles.buttonText}>Partida única</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // <Main matches={3}></Main>;
            props.navigation.navigate("Information");
          }}
          style={styles.buttons}
        >
          <Text style={styles.buttonText}>Melhor de três</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // <Main matches={5}></Main>;
            props.navigation.navigate("Information");
          }}
          style={styles.buttons}
        >
          <Text style={styles.buttonText}>Melhor de cinco</Text>
        </TouchableOpacity>
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

  buttons: {
    width: "88%",
    backgroundColor: "transparent",
    borderRadius: 8,
    alignSelf: "center",
    padding: 20,
    borderColor: "#D9BA61",
    borderWidth: 2,
  },

  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    textShadowColor: "#D9BA61",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },

  containerViewButtons: {
    width: "100%",
    marginTop: 50,
    gap: 50,
  },
});
