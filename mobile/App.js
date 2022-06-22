import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./routes/rootStack";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
