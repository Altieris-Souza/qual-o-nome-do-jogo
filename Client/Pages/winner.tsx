import React, { useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { UserContext } from "../Context/userContext";

export const Winner = (props: any) => {
  const { players }: any = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={{ color: "white", marginTop: 100 }}>
        Altieris Souza Teste Teste teste
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    alignItems: "center",
  },
});
