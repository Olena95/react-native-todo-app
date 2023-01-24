import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Alert,
} from "react-native";
import { THEME } from "../theme";

const EditModal = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value);

  const save = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        "Error",
        `Minimal length title 3 symbols. Now it is ${
          title.trim().length
        } symbols`
      );
    } else {
      onSave(title);
    }
  };
  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          placeholder="Enter title..."
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
          value={title}
          onChangeText={setTitle}
        />
        <View style={styles.buttons}>
          <Button
            title="Cancel"
            onPress={onCancel}
            color={THEME.DANGER_COLOR}
          />
          <Button title="Save" onPress={save} />
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;

const styles = StyleSheet.create({
  wrap: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.GREY_COLOR,
    borderBottomWidth: 2,
    width: "80%",
  },
  buttons: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
