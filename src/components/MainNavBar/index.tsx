import { Tab, TabList, Tabs } from '@chakra-ui/react';
import React from 'react';

function MainNavBar() {
  return (
    <Tabs
      as="header"
      color="primary"
      colorScheme=""
      minH="100%"
      size="lg"
      orientation="vertical"
      paddingLeft="1em"
      variant="unstyled"
      w="300px"
      borderRight="2px solid"
      borderColor="backgroundSecondary"
    >
      <TabList flex="1">
        <Tab _selected={{ color: 'secondary', borderRight: '2px solid' }}>Home</Tab>
        <Tab _selected={{ color: 'secondary', borderRight: '2px solid' }}>Ranking</Tab>
        <Tab _selected={{ color: 'secondary', borderRight: '2px solid' }}>Contact</Tab>
      </TabList>
    </Tabs>
  );
}

export default MainNavBar;
