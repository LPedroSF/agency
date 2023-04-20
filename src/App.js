import Nav from './Components/Nav';
import Footer from './Components/Footer'
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Work from './pages/Work';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Work />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
