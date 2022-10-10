import './App.css';
import Navbar from './Components/Navigation-Bar/navbar'
import MainSection from './Components/Main-Section/mainsection'
import AboutSection from './Components/About-Section/abtSection'
import { Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <MainSection />
        <AboutSection />
        {/* <Routes>
          <Route exact path='/' element={<Navbar />} />
          <Route exact path='/about' element={<AboutSection />} />
        </Routes> */}
      </>
    </div >
  );
}

export default App;
