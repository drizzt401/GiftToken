import React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Home = () => {
  return (
    <View>
      <Text>Touch below</Text>
      <Button
        title="Authenticate"
        onPress={() => navigation.navigate("Auth")}
      ></Button>
    </View>
  );
};

export default Home;
