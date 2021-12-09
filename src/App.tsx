import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./interface/interface";
import { Box, Text } from "@chakra-ui/react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

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

  const onDragEnd = (result: DropResult) => {
    console.log(result);

    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add;
    let active = todos;
    let important = importantTodos;

    //source logic
    if (source.droppableId === "TodosList") {
      add = active[source.index]; //select dragged item
      active.splice(source.index, 1); // remove it from the list
    } else {
      add = important[source.index];
      important.splice(source.index, 1);
    }

    //destination logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add); //adding item
    } else {
      important.splice(destination.index, 0, add);
    }

    setImportantTodos(important);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box className="App">
        <Text as="span" className="heading">
          Todo
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
