import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, Button } from "react-native";

export const Main = (props: any) => {
  const [points, setPoints] = useState(0);

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            color: "white",
            fontSize: 35,
            textAlign: "center",
            fontWeight: "700",
            textShadowColor: "#D9BA61",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Pontos em jogo: {points}
        </Text>
      </View>
      <View
        style={{
          marginTop: 40,
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: 20,
        }}
      >
        <Text style={styles.names}>Alguém</Text>
        <Text style={styles.names}>Altieris</Text>
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

  names: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "700",
    textShadowColor: "#D9BA61",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
});
