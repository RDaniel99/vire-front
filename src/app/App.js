import './App.css';
import { ChakraProvider, Stack } from '@chakra-ui/react';
import NavBarNotLogged from '../components/NavBarNotLogged';
import AppRoutes from '../routes/AppRoutes';
import NavBarLogged from '../components/NavBarLogged';

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
        <NavBarLogged />
        <AppRoutes />
      </Stack>
    </ChakraProvider>
  );
}

export default App;
