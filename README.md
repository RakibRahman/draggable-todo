   <Accordion allowToggle>
          {data.map((item, index) => (
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Flex flex="1" textAlign="left">
                    <Image src={item.img} w="80px" h="80px" />
                    <Text>{item.title}</Text>
                    <Text onClick={() => setSelectedIndex(index)}>😋</Text>
                  </Flex>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{item.text}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>