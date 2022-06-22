//import liraries
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

// create a component
const Get = ({ navigation }) => {
  const [user, setUser] = useState();

  const getUserData = async () => {
    try {
      let response = await fetch("https://gorest.co.in/public-api/users");
      let json = await response.json();
      setUser(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  useState(() => {
    getUserData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Detail", {
            item: item,
          })
        }
      >
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            padding: 5,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={user}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

//make this component available to the app
export default Get;
