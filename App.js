import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Navbar from "./src/components/Navbar";
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";
export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    // {
    //   id: "1",
    //   title: "test1",
    // },
  ]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    };
    setTodos((prevTodo) => [...prevTodo, newTodo]);
  };

  const removeTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    Alert.alert(
      "Delete element",
      `Are you shure to delete ${todo.title}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setTodoId(null);
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
          },
        },
      ],
      {
        cancelable: false,
      }
    );
  };
  const updateTodo = (id, title) => {
    setTodos((old) =>
      old.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    content = (
      <TodoScreen
        goBack={() => setTodoId(null)}
        todo={selectedTodo}
        removeTodo={removeTodo}
        onSave={updateTodo}
      />
    );
  }

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
