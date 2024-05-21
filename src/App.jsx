import './App.css'
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { MyProjects } from './components/MyProjects';
import { Footer } from './components/Footer';
import { MySkills } from './components/MySkills';
import { AboutMe } from './components/AboutMe';
import { Canvas } from './components/Canvas';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='body-info-container'>
        <Canvas type={3} />
        <div className='body-info'>
          <AboutMe />
          <MyProjects />
          <MySkills />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
