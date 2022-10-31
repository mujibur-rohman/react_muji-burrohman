import './App.css';
import AboutUs from './component/AboutUs';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
