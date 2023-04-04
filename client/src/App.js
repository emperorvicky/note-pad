import React from 'react';
import Test from './Pages/test';
import TheAppBar from './components/AppBar';
import Main from './main'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App() {

  const client = new QueryClient()
  
  return (
        <>
        <QueryClientProvider client={client} >
        <TheAppBar />
        <Main />
        </QueryClientProvider>
        </>

  );
}



export default App;
