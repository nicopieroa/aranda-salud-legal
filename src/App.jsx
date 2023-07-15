import './App.css'
import { MantineProvider } from '@mantine/core';
import { HomePage } from './pages/homePage';

function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <HomePage />
    </MantineProvider>
  )
}

export default App
