import './App.css'
import { MantineProvider } from '@mantine/core';

import { Navbar } from './components/navbar';

function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Navbar />
    </MantineProvider>
  )
}

export default App
