import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Create from './components/create';
import Navbar from './components/Navbar';
import View from './components/View';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <BrowserRouter >
          <Routes>
            <Route exact path="/" element={<Main />}>
            </Route>
            <Route path="/createCollection" element={<Create />} ></Route>
            <Route path="/viewCollections" element={<View />} ></Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
