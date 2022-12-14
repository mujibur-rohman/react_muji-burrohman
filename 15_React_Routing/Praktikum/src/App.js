import './App.css';
import Home from './component/Home';
import SideBar from './component/SideBar';
import { Route, Routes } from 'react-router-dom';
import AboutApp from './component/About/AboutApp';
import AboutAuthor from './component/About/AboutAuthor';
import NotFound from './component/NotFound';

function App() {
  return (
    <div className="container">
      <SideBar />
      <div className="container__content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-app" element={<AboutApp />} />
          <Route path="/about-author" element={<AboutAuthor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
