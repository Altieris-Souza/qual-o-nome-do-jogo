import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Loading from "./Pages/loading";
import { Home } from "./Pages/home";
import { Main } from "./Pages/main";
import { Information } from "./Pages/information";
import { UserProvider } from "./Context/userContext";
import { Winner } from "./Pages/winner";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <UserProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Loading"
            component={Loading}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Information"
            component={Information}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Winner"
            component={Winner}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </UserProvider>
      {/* <StatusBar style="auto" /> */}
    </NavigationContainer>
  );
}
