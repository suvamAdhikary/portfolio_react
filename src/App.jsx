import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './context/ThemeContext';
import ThemeBtn from './Components/ThemeBtn';
import About from './Sections/About/About';
import Contact from './Sections/Contact/Contact';
import Intro from './Sections/Intro/Intro';
import Project from './Sections/Projects/Project';
import { GlobalStyles } from './Components/styles/Global';

function App() {

  const { colors } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={colors}>
      <>
      <GlobalStyles />
    <div className="App">
      <ThemeBtn />
      <Intro />
      <About />
      <Project />
      <Contact />
    </div>
    </>
    </ThemeProvider>
  )
}

export default App
