import { Text, StyleSheet } from "react-native";

const AppText = ({ children, style }) => {
  return <Text style={{ ...styles.default, ...style }}>{children}</Text>;
};
export default AppText;

const styles = StyleSheet.create({
  default: {
    fontFamily: "roboto-regular",
  },
});
