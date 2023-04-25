import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import EditModal from "../components/EditModal";
import AppCard from "../components/UI/AppCard";
import AppTextBold from "../components/UI/AppTextBold";
import { THEME } from "../theme";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import AppButton from "../components/UI/AppButton";
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
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <AppButton onPress={() => setModal(true)}>
          <AntDesign name="edit" size={20} color="#fff" />
        </AppButton>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton color={THEME.GREY_COLOR} onPress={goBack}>
            <Ionicons name="chevron-back-outline" size={24} color="#fff" />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton
            color={THEME.DANGER_COLOR}
            onPress={() => removeTodo(todo.id)}
          >
            <FontAwesome name="remove" size={24} color="#fff" />
          </AppButton>
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
