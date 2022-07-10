import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

function Footer() {
  return (
    <Flex
      as="footer"
      w="100%"
      justifyContent="center"
      borderTop="2px solid"
      borderColor="backgroundSecondary"
      py="5px"
    >
      <Text color="primary">Made by Dangocan</Text>
    </Flex>
  );
}

export default Footer;
