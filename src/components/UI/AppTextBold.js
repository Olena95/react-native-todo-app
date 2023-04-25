import { Text, StyleSheet } from "react-native";

const AppTextBold = ({ children, style }) => {
  return <Text style={{ ...styles.default, ...style }}>{children}</Text>;
};
export default AppTextBold;

const styles = StyleSheet.create({
  default: {
    fontFamily: "roboto-bold",
  },
});
