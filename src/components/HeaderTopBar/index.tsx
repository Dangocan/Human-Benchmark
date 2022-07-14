import { Center, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

function HeaderTopBar() {
  return (
    <Flex
      bg="backgroundPrimary"
      borderBottom="2px solid"
      borderColor="backgroundSecondary"
      boxShadow="rgba(33, 35, 38, 0.1) 0px 10px 10px -10px"
      justifyContent="left"
      h="50px"
      w="100%"
    >
      <Center w="300px">
        <Image
          alt="Brainstamp logo"
          boxSize="40px"
          objectFit="cover"
          src="../../../resources/logo-header.png"
          mr="10px"
        />
        <Text color="primary" fontSize="1.2rem" fontFamily="cursive">
          Brainstamp
        </Text>
      </Center>
    </Flex>
  );
}

export default HeaderTopBar;
