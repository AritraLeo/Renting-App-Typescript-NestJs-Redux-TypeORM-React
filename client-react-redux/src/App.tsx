import React from 'react';
import './App.css';
import  styled  from 'styled-components';
import  tw  from 'twin.macro';
import { HomePage } from './app/containers/HomePage';
import { Navbar } from './app/components/navbar';
import { Footer } from './app/components/footer';


const AppContainer = styled.div`
    ${tw`
        w-full
        h-full
        flex
        flex-col
    `};
`;


function App() {
  return (
    <div className="App ">
      <AppContainer>
        {/* <Navbar/> */}
        <HomePage />
        {/* <Footer/> */}
      </AppContainer>
    </div>
  );
}

export default App;
