import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import LottieView from "lottie-react-native";

let day = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

export default function Loading(props: any) {
  setTimeout(function () {
    props.navigation.navigate("Home");
  }, 3000);

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 200, height: 200, marginTop: 300 }}
        source={require("../images/logoInicial.webp")}
      ></Image>

      <View>
        <Text
          style={{
            fontSize: 23,
            marginBottom: 250,
            color: "white",
            fontWeight: "700",
            textShadowColor: "#D9BA61",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          QUAL É O NOME DO JOGO?
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontSize: 10, color: "white" }}>
          © [{day}/{month}/{year}] Altieris Souza. Todos os direitos reservados.
        </Text>
      </View>
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
