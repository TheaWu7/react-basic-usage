import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import TabContextProvider from './context/TabContext';
import Body from './components/Body/Body';

const App: React.FC = () => {

  return (
    <div>
      <TabContextProvider>
        <Header height='70px' background='yellow'/>
        <Body />
      </TabContextProvider>
    </div>
  );
}

export default App;
