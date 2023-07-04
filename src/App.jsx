import './App.css'
import { MantineProvider } from '@mantine/core';

import { Navbar } from './components/navbar';
import { Header } from './components/header';

function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className='App'>
        <Navbar />
        <Header />
      </div>

    </MantineProvider>
  )
}

export default App
