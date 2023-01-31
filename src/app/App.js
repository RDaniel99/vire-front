import './App.css';
import { ChakraProvider, Stack } from '@chakra-ui/react';
import AppRoutes from '../routes/AppRoutes';
import NavBarController from '../components/NavBarController';

function App() {
  return (
    <ChakraProvider className="app">
      <Stack
        className="app"
        flex={{ base: 1, md: 0 }}
        justify={'flex-end'}
        direction={'column'}
        spacing={6}

      >
        <NavBarController />
        <AppRoutes />
      </Stack>
    </ChakraProvider>
  );
}

export default App;
