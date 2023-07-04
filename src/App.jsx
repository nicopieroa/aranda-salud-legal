import './App.css'
import { MantineProvider } from '@mantine/core';

import { Navbar } from './components/navbar';
import { Header } from './components/header';
import { Main } from './components/main';

function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className='App'>
        <Navbar />
        <Header />
        <Main />
      </div>

    </MantineProvider>
  )
}

export default App
