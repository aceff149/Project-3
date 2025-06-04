import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './Components/Navbar';
import Todos from './Compontents/Todo';
import Contact from './Components/Contact';

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