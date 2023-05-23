import './App.css';
import Navbar from './components/Navbar';
import TextUtils from './components/TextUtils';
import About from './components/About';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* For Web Page */}
        <Route path="/" element={<TextUtils />} />
        <Route path="/about" element={<About />} />
        
        {/* For GitHub Page */}
        <Route path="/TextUtils/" element={<TextUtils />} />
        <Route path="/TextUtils/about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
