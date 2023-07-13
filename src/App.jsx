import './App.css'
import { MantineProvider } from '@mantine/core';

import { Navbar } from './components/navbar';
import { Header } from './components/header';
import { ServicesSection } from './components/servicesSection';
import { News } from './components/newsSection';
import { ContactSection } from './components/contactSection';
import { Footer } from './components/footer';

function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className='App'>
        <Navbar />
        <Header />
        <ServicesSection />
        <News />
        <ContactSection />
        <Footer />
      </div>

    </MantineProvider>
  )
}

export default App
