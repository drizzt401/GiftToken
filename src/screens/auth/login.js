import React from "react";
import { Button, View, Text } from "react-native";

const Auth = navigation => {
  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Authenticate"
        onPress={() => navigation.navigate("Auth")}
      ></Button>
    </View>
  );
};

export default Auth;
