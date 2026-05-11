import { tokenStore } from "@/services/token.storage";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { authService } from "../services/auth.service";

const home = ({ setIsLoggedIn }: { setIsLoggedIn: (value: boolean) => void }) => {
  async function handleLogout() {
    try {
      await authService.logout();
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Logout error", error);
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello from home</Text>
      <Pressable
        onPress={handleLogout}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "#9ACD32",
          borderRadius: 10,
        }}
      >
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({});
