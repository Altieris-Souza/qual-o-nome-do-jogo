import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, Button } from "react-native";

export const Information = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>De apelido aos patos!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    alignItems: "center",
  },

  text: {
    marginTop: 90,
    color: "white",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "700",
    textShadowColor: "#D9BA61",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
});
