import React, { useRef } from "react";
import "./styles.css";
import { Flex, Button, Input } from "@chakra-ui/react";
interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Flex
      justify="center"
      align="center"
      gridGap="10"
      as="form"
      w="90%"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <Input
        type="text"
        placeholder="Enter a Todo"
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        p="10"
        transition="all 0.2s ease"
        w="60%"
        borderRadius="5px"
      />
      <Button
        type="submit"
        p="10"
        w="130px"
        // h="30px"
        border="none"
        bg="#32CD32"
        color="white"
        borderRadius="5px"
        fontSize="18px"
        fontWeight="bold"
        _hover={{
          transform: "scale(1.02)",
        }}
      >
        ADD
      </Button>
    </Flex>
  );
};

export default InputField;
