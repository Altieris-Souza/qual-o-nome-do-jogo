import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { UserContext } from "../Context/userContext";

export const Main = (props: any) => {
  const [points, setPoints] = useState(1);

  const [valendo, setValendo] = useState(6);

  const { players }: any = useContext(UserContext);

  const [pointsPlayerOne, setPointsOne] = useState(0);
  const [pointsPlayerTwo, setPointsTwo] = useState(0);
  const [opacityTest, setOpacityTest] = useState(0.5);

  if (pointsPlayerOne >= 12 || pointsPlayerTwo >= 12) {
    props.navigation.navigate("Winner");

    setPointsOne(0);
    setPointsTwo(0);
    setOpacityTest(0.5);
  }

  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleConfirm = () => {
    handleCloseModal();
  };

  const handleCancel = () => {
    handleCloseModal();
  };

  const handleOverlayPress = () => {
    handleCloseModal();
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 80 }}>
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
          marginTop: 70,
          display: "flex",
          width: "75%",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          gap: 20,
        }}
      >
        <Text style={styles.names}>{players.player1}</Text>
        <Text style={styles.names}>{players.player2}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
          marginTop: 50,
          alignItems: "center",
        }}
      >
        <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <TouchableOpacity
            onPress={() => {
              if (pointsPlayerOne > 0) {
                setPointsOne(pointsPlayerOne - 1);
              }
            }}
          >
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={require("../images/copas.png")}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.numbers}>{pointsPlayerOne}</Text>
        </View>
        <Image
          style={{
            width: 60,
            height: 60,
            position: "absolute",
            left: "40%",
          }}
          source={require("../images/logoInicial.webp")}
        ></Image>
        <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <Text style={styles.numbers}>{pointsPlayerTwo}</Text>
          <TouchableOpacity
            onPress={() => {
              if (pointsPlayerTwo > 0) {
                setPointsTwo(pointsPlayerTwo - 1);
              }
            }}
          >
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../images/copas.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            setPoints(3);
            setOpacityTest(0.9);
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
            Qual é o nome do jogo?
          </Text>
        </TouchableOpacity>
        <View style={{ display: "flex", flexDirection: "row", gap: 18 }}>
          <TouchableOpacity
            onPress={() => {
              if (points > 1) {
                setPoints(6);
              }
            }}
            style={{
              width: 90,
              backgroundColor: "transparent",
              borderRadius: 8,
              alignSelf: "center",
              padding: 15,
              borderColor: "#D9BA61",
              borderWidth: 2,
              marginTop: 20,
              opacity: opacityTest,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "700",
                fontSize: 20,
              }}
            >
              +6
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (points > 1) {
                setPoints(9);
              }
            }}
            style={{
              width: 90,
              backgroundColor: "transparent",
              borderRadius: 8,
              alignSelf: "center",
              padding: 15,
              borderColor: "#D9BA61",
              borderWidth: 2,
              marginTop: 20,
              opacity: opacityTest,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "700",
                fontSize: 20,
              }}
            >
              +9
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (points > 1) {
                setPoints(12);
              }
            }}
            style={{
              width: 90,
              backgroundColor: "transparent",
              borderRadius: 8,
              alignSelf: "center",
              padding: 15,
              borderColor: "#D9BA61",
              borderWidth: 2,
              marginTop: 20,
              opacity: opacityTest,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "700",
                fontSize: 20,
              }}
            >
              +12
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: "75%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 40,
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={{
            backgroundColor: "blue",
            borderRadius: 8,
            alignSelf: "center",
            padding: 15,
            borderColor: "#D9BA61",
            borderWidth: 2,
            marginTop: 20,
            width: 110,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "700",
              fontSize: 20,
            }}
            onPress={() => {
              setPointsOne(pointsPlayerOne + points);
              setPoints(1);
              setOpacityTest(0.5);
            }}
          >
            Nós
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            backgroundColor: "red",
            borderRadius: 8,
            alignSelf: "center",
            padding: 15,
            borderColor: "#D9BA61",
            borderWidth: 2,
            marginTop: 20,
            width: 110,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "700",
              fontSize: 20,
            }}
            onPress={() => {
              setPointsTwo(pointsPlayerTwo + points);
              setPoints(1);
              if (pointsPlayerTwo >= 12) {
                props.navigation.navigate("Winner");

                setPointsTwo(0);
              }
            }}
          >
            Eles
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 50 }}>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "700",
            textShadowColor: "#D9BA61",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
          onPress={() => {
            handleOpenModal();
          }}
        >
          Zerar pontos
        </Text>
      </View>

      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.modalContainer}
          onPress={handleOverlayPress}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Deseja zerar os pontos?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => {
                  handleConfirm();
                  setPointsOne(0);
                  setPointsTwo(0);
                  setPoints(1);
                  setOpacityTest(0.5);
                }}
                style={styles.confirmButton}
              >
                <Text style={styles.buttonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleCancel}
                style={styles.cancelButton}
              >
                <Text style={styles.buttonText}>Não</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    alignItems: "center",
  },

  numbers: {
    color: "white",
    fontSize: 50,
    fontWeight: "700",
  },

  button: {
    width: 310,
    backgroundColor: "transparent",
    borderRadius: 8,
    alignSelf: "center",
    padding: 15,
    borderColor: "#D9BA61",
    borderWidth: 2,
    marginTop: 80,
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

  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    borderColor: "#D9BA61",
    borderWidth: 1,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 0,
  },
  confirmButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    borderColor: "#D9BA61",
    borderWidth: 1,
  },
  cancelButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    borderColor: "#D9BA61",
    borderWidth: 1,
  },
});
