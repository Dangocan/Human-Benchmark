import './index.css';

import React from 'react';

import BodyWrapper from './components/BodyWrapper';
import PageMemoryGame from './pages/PageMemoryGame';

function App() {
  return (
    <BodyWrapper>
      <PageMemoryGame />
    </BodyWrapper>
  );
}

export default App;
