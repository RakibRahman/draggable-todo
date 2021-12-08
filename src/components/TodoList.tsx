import React from "react";
import { Todo } from "../interface/interface";
import SingleTodo from "./SingleTodo";
import { Box, Heading, Flex, Spacer } from "@chakra-ui/react";
import { Droppable } from "react-beautiful-dnd";
interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  importantTodos: Todo[];
  setImportantTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<props> = ({
  todos,
  setTodos,
  importantTodos,
  setImportantTodos,
}) => {
  return (
    <Flex w="900px" justify="center" align="center" gridGap="5">
      <Droppable droppableId="todolist">
        {(provided) => (
          <Flex
            flexDirection="column"
            className="todos"
            w="300px"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <Heading> Task List</Heading>
            {todos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={todos}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </Flex>
        )}
      </Droppable>
      <Spacer />
      <Droppable droppableId="importantTodos">
        {(provided) => (
          <Flex
            flexDirection="column"
            w="300px"
            bg="green"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <Heading>Important Task List</Heading>
            {importantTodos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={importantTodos}
                todo={todo}
                key={todo.id}
                setTodos={setImportantTodos}
              />
            ))}
            {provided.placeholder}
          </Flex>
        )}
      </Droppable>
    </Flex>
  );
};

export default TodoList;
