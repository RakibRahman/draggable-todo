import React from "react";
import { Todo } from "../interface/interface";
import SingleTodo from "./SingleTodo";
import { Heading, Flex, Spacer } from "@chakra-ui/react";
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
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <Flex
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            flexDirection="column"
            mt="10"
            w="400px"
            bg="hotpink"
            p="6"
            borderRadius="5px"
            color="white"
            justify="center"
            align="center"
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
        {(provided, snapshot) => (
          <Flex
            className={`todos  ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`}
            flexDirection="column"
            w="400px"
            bg="limegreen"
            mt="10"
            borderRadius="5px"
            p="6"
            color="white"
            justify="center"
            align="center"
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
