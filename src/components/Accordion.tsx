import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Badge,
  Button,
  Box,
  Image,
  Flex,
  Text,
  Input,
} from "@chakra-ui/react";
import {
  DragDropContext,
  DropResult,
  Draggable,
  Droppable,
} from "react-beautiful-dnd";

const AccordionComp = () => {
  const data = [
    {
      id: "sas",
      title: "Accordion 1",
      img: "https://picsum.photos/200/300?random=1",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum magnam ex voluptatibus esse natus aspernatur veritatis odio dolores saepe provident nisi quasi architecto harum reprehenderit, nostrum nam sed iusto consectetur.",
    },
    {
      id: "sse",
      title: "Accordion 2",
      img: "https://picsum.photos/200/300?random=12",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum magnam ex voluptatibus esse natus aspernatur veritatis odio dolores saepe provident nisi quasi architecto harum reprehenderit, nostrum nam sed iusto consectetur.",
    },
    {
      id: "gsw",
      title: "Accordion 3",
      img: "https://picsum.photos/200/300?random=3",

      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum magnam ex voluptatibus esse natus aspernatur veritatis odio dolores saepe provident nisi quasi architecto harum reprehenderit, nostrum nam sed iusto consectetur.",
    },
  ];

  // Drag functionality
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  // saving reorder state of dragged items
  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  // styles for item
  const getItemStyle = (isDragging: any, draggableStyle: any) => ({
    userSelect: "none",
    cursor: "pointer",
    color: isDragging ? "white" : "black",
    background: isDragging ? "#7c499f" : "transparent",
    ...draggableStyle,
  });

  // styles for items container
  const getListStyle = (isDraggingOver: any) => ({
    background: isDraggingOver ? "#E2E8F0" : "#f5f5f5",
    width: "100%",
  });

  const onDragEnd = (result: any) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(
      data,
      result.source.index,
      result.destination.index
    );

    // callDispatch(reorderedItems, null, "items");
  };
  React.useEffect(() => {
    console.log(selectedIndex);
  }, [selectedIndex]);
  return (
    <Box w="600px">
      Accordion
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <Box
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              <Accordion allowToggle w='300px'>
                {data.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <Flex w="100%">
                        <Box
                          h="80px"
                          minW="80px"
                          bg="red"
                          {...provided.dragHandleProps}
                        ></Box>
                        <AccordionItem
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <h2>
                            <AccordionButton
                              onClick={() => setSelectedIndex(index)}
                            >
                              <Flex flex="1" textAlign="left">
                                <Image src={item.img} w="80px" h="80px" />
                                <Text>{item.title}</Text>
                                <Text>😋</Text>
                              </Flex>
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>{item.text}</AccordionPanel>
                        </AccordionItem>
                      </Flex>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Accordion>
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};

export default AccordionComp;
