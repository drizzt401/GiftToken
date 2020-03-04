import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

import styles from "./styles";

const Auth = ({ navigation }) => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
    loading: false,
    error: false
  });

  const { email, password, loading, error } = details;
  console.log("Hi", details);

  const onEmailChange = e => {
    setDetails({ email: e.target.value });
  };
  const onPasswordChange = e => {
    setDetails({ password: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    try {
      setDetails({ loading: true });
      fetch("https://hidden-island-59990.herokuapp.com/api/v1/auth/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password
        })
      }).then(response => response.json());
    } catch (error) {
      setDetails({ error: true });
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>

      <TextInput
        onChangeText={onEmailChange}
        placeholder="email"
        style={styles.input}
      />
      <TextInput
        onChangeText={onPasswordChange}
        placeholder="password"
        secureTextEntry
        style={styles.input}
      />
      {loading ? (
        "Hold on..."
      ) : (
        <Button
          title={"Login"}
          style={styles.input}
          onPress={() => onSubmit()}
        />
      )}

      <Text>Don't have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text>Register here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Auth;
