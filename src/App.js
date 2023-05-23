import './App.css';
import Navbar from './components/Navbar';
import TextUtils from './components/TextUtils';
import About from './components/About';
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
        <Route path="/" element={<TextUtils />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
