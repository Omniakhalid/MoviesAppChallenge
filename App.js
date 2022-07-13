import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './components/Main';
import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient();
export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </NavigationContainer>
  );
}
