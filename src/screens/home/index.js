import React from "react";
import { Button, View, Text } from "react-native";
import styles from "./styles";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Touch</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Auth")}
      ></Button>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Auth")}
      ></Button>
    </View>
  );
};

export default Home;
