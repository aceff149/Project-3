import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './Components/Navbar';
import Todos from './Page/Todo';
import Contact from './Page/Contact';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/Todo" element={<Todo />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;