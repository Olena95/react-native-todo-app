import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import EditModal from "../components/EditModal";
import AppCard from "../components/UI/AddCard";
import { THEME } from "../theme";

const TodoScreen = ({ goBack, todo, removeTodo, onSave }) => {
  const [modal, setModal] = useState(false);

  const saveHandler = (title) => {
    onSave(todo.id, title);
    setModal(false);
  };

  return (
    <View>
      <EditModal
        visible={modal}
        onCancel={() => setModal(false)}
        value={todo.title}
        onSave={saveHandler}
      />
      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title="edit" onPress={() => setModal(true)} />
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Back" color={THEME.GREY_COLOR} onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button
            title="Remove"
            color={THEME.DANGER_COLOR}
            onPress={() => removeTodo(todo.id)}
          />
        </View>
      </View>
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    marginBottom: 20,
  },
  button: {
    width: "40%",
  },
  title: {
    fontSize: 20,
  },
});
