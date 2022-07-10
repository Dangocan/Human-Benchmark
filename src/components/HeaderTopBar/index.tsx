import { Center, Flex, Image } from '@chakra-ui/react';
import React from 'react';

function HeaderTopBar() {
  return (
    <Flex
      bg="backgroundPrimary"
      borderBottom="2px solid"
      borderColor="backgroundSecondary"
      boxShadow="rgba(33, 35, 38, 0.1) 0px 10px 10px -10px"
      h="50px"
      justifyContent="center"
      w="100%"
    >
      <Center>
        <Image
          alt="Brainstamp logo"
          boxSize="40px"
          objectFit="cover"
          src="../../../resources/logo-header.png"
        />
      </Center>
    </Flex>
  );
}

export default HeaderTopBar;
