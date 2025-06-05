import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import Todos from './Page/Todo';
import Contact from './Page/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="Todo" element={<Todo />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;