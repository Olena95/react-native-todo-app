import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../theme";
import AppTextBold from "./UI/AppTextBold";
const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <AppTextBold style={styles.text}> {title}</AppTextBold>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: THEME.MAIN_COLOR,
    paddingBottom: 10,
  },
  text: { color: "white", fontSize: 20 },
});
