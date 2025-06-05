import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/HomePage';
import Header from './Components/Header';
import ToDoList from './Components/ToDoList';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  const [todolist, setToDoList] = React.useState([
    { id: 1, task: 'Meditate', status: 'Not Completed', completed:' ', delete:  ' ' },
    { id: 2, task: 'Clean House', status: 'Not Completed', completed:' ', delete:  ' ' },
    { id: 3, task: 'Go to the Gym', status: 'Not Completed', completed:' ', delete:  ' ' },
  ]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/todo" element={<ToDoList todolist={todolist} setToDoList={setToDoList}  />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;