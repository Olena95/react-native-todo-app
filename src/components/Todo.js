import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import AppText from "./UI/AppText";
const Todo = ({ todo, onRemove, onOpenTodo }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onOpenTodo(todo.id)}
      onLongPress={() => onRemove(todo.id)}
    >
      <View style={styles.todo}>
        <AppText>{todo.title}</AppText>
      </View>
    </TouchableOpacity>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
});
