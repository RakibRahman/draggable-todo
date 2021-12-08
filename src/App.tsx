import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./interface/interface";
import { Box, Text } from "@chakra-ui/react";
import { DragDropContext } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [importantTodos, setImportantTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <DragDropContext onDragEnd={() => {}}>
      <Box className="App">
        <Text as="span" className="heading">
          Taskify
        </Text>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          importantTodos={importantTodos}
          setImportantTodos={setImportantTodos}
        />
      </Box>
    </DragDropContext>
  );
};

export default App;
