import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Keyboard } from "react-native";
import { Entypo } from "@expo/vector-icons";

const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressAddTodo = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
      Keyboard.dismiss();
    } else {
      Alert.alert("Todo title can`t be empty");
    }
  };
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder="add todo..."
        onChangeText={(text) => setValue(text)}
        autoCorrect={false}
      />
      <Entypo.Button onPress={pressAddTodo} name="add-to-list">
        Add
      </Entypo.Button>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "75%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },
});
