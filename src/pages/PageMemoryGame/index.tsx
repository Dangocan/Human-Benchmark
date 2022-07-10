import { AspectRatio, Button, Center, Flex, IconButton, Text } from '@chakra-ui/react';
// import React, { useState } from 'react';
import { TbDroplet, TbFlame, TbLeaf, TbPlayerPlay, TbSun } from 'react-icons/tb';

function PageMemoryGame() {
  // const [counter, setCounter] = useState<Number>(0);

  return (
    <Center
      flexDirection="column"
      justifyContent="space-around"
      border="1px solid red"
      h="100%"
      w="100%"
    >
      <Text fontSize="2xl" color="green">
        {/*`Acertou ${counter} de xx`*/}
      </Text>
      <AspectRatio ratio={1} w="40%" maxW="600px" minW="100px">
        <Flex wrap="wrap" justifyContent="space-around">
          <IconButton
            w="45%"
            h="45%"
            m="2%"
            variant="outline"
            _hover={{ backgroundColor: 'red', color: 'backgroundSecondary' }}
            color="red"
            borderWidth="2px"
            borderColor="red"
            aria-label="Send email"
            icon={<TbFlame size="45%" />}
          />
          <IconButton
            w="45%"
            h="45%"
            m="2%"
            variant="outline"
            _hover={{ backgroundColor: 'green', color: 'backgroundSecondary' }}
            color="green"
            borderWidth="2px"
            borderColor="green"
            aria-label="Send email"
            icon={<TbLeaf size="45%" />}
          />
          <IconButton
            w="45%"
            h="45%"
            m="2%"
            variant="outline"
            _hover={{ backgroundColor: 'blue', color: 'backgroundSecondary' }}
            color="blue"
            borderWidth="2px"
            borderColor="blue"
            aria-label="Send email"
            icon={<TbDroplet size="45%" />}
          />
          <IconButton
            w="45%"
            h="45%"
            m="2%"
            variant="outline"
            _hover={{ backgroundColor: 'yellow', color: 'backgroundSecondary' }}
            color="yellow"
            borderWidth="2px"
            borderColor="yellow"
            aria-label="Send email"
            icon={<TbSun size="45%" />}
          />
        </Flex>
      </AspectRatio>
      <AspectRatio ratio={16 / 9} w="10%" minW="68px">
        <Button
          _hover={{ backgroundColor: 'red', color: 'backgroundSecondary' }}
          color="red"
          bgColor="transparent"
          borderWidth="2px"
          borderColor="red"
          aria-label="Play button"
          leftIcon={<TbPlayerPlay />}
        >
          Play
        </Button>
      </AspectRatio>
    </Center>
  );
}

export default PageMemoryGame;
