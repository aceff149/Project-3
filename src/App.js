import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import Todos from './pages/Todos';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/todos" element={<Todos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;