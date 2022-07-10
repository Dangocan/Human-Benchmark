import { Flex } from '@chakra-ui/react';
import React from 'react';

import { Footer, HeaderTopBar, MainNavBar } from '../index';

type TProps = {
  children?: React.ReactElement | React.ReactElement[];
};

function BodyWrapper({ children }: TProps) {
  return (
    <Flex bg="backgroundPrimary" minH="100vh" maxW="100vw" flexDir="column">
      <HeaderTopBar />
      <Flex w="100%" minH="calc(100vh - 50px)">
        <MainNavBar />
        <Flex w="calc(100% - 300px)" minH="100%" bgColor="backgroundSecondary">
          {children}
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default BodyWrapper;
