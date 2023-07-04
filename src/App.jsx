import './App.css'
import { MantineProvider } from '@mantine/core';

import { Navbar } from './components/navbar';
import { Header } from './components/header';

function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Navbar />
      <Header />
    </MantineProvider>
  )
}

export default App
