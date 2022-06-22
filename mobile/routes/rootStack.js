import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
const Stack = createStackNavigator();

import Post from "../components/Post";
import Get from "../components/Get";
import Detail from "../components/Detail";

const rootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "blue",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Get"
        component={Get}
        options={({ navigation, route }) => ({
          title: "CRUD Data User",
          headerRight: () => (
            <Ionicons
              name={"ios-add-circle"}
              size={25}
              color={"white"}
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate("Post")}
            />
          ),
        })}
      />
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default rootStack;
