import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";
const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={todos}
        renderItem={({ item }) => (
          <Todo todo={item} onRemove={removeTodo} onOpenTodo={openTodo} />
        )}
      />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
