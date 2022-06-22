import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";

export default function Post() {
  const [user, setUser] = useState({
    name: "",
    gender: "",
    email: "",
    status: "",
  });

  const [loading, setLoading] = useState(false);

  const onChangeName = (value) => {
    setUser({ ...user, name: value });
  };

  const onChangeGender = (value) => {
    setUser({ ...user, gender: value });
  };

  const onChangeEmail = (value) => {
    setUser({ ...user, email: value });
  };

  const onChangeStatus = (value) => {
    setUser({ ...user, status: value });
  };

  const saveData = () => {
    setLoading(true);
    var myHeaders = new Headers();

    myHeaders.append(
      "Authorization",
      "Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263"
    );

    myHeaders.append("Content-Type", "application/json");

    fetch("https://gorest.co.in/public-api/users", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        name: user.name,
        gender: user.gender,
        email: user.email,
        status: user.status,
      }),
    })
      .then((response) => {
        setLoading(false);
        response.text();
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={"Name"}
        onChangeText={(value) => onChangeName(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Gender"}
        onChangeText={(value) => onChangeGender(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Email"}
        onChangeText={(value) => onChangeEmail(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Status"}
        onChangeText={(value) => onChangeStatus(value)}
        style={styles.input}
      />

      <TouchableOpacity onPress={saveData}>
        <View style={{ backgroundColor: "blue", padding: 10 }}>
          <Text style={{ color: "white", textAlign: "center" }}>
            {loading ? "Menyimpan..." : "Simpan"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    margin: 15,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
  },
});
