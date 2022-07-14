import { Tab, TabList, Tabs } from '@chakra-ui/react';
import React from 'react';

type TNavBarItem = {
  title: string;
};

function MainNavBar() {
  const navBarItems: TNavBarItem[] = [
    { title: 'Home' },
    { title: 'Ranking' },
    { title: 'Contact' },
  ];
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
        {navBarItems.map((navBarItem: TNavBarItem, index) => (
          <Tab
            key={`${navBarItem.title}_0${index}`}
            _selected={{ color: 'secondary', borderRight: '2px solid' }}
            _hover={{ color: 'secondary', borderRight: '2px solid' }}
            borderBottom="2px solid"
            borderColor="backgroundSecondary"
          >
            {navBarItem.title}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
}

export default MainNavBar;
