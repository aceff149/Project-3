import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  const [todolist, setToDoList] = React.useState([
    { id: 1, task: 'Buy groceries', status: 'Not Completed', completed:' ', delete:  ' ' },
    { id: 2, task: 'Walk the dog', status: 'Not Completed', completed:' ', delete:  ' ' },
    { id: 3, task: 'Read a book', status: 'Not Completed', completed:' ', delete:  ' ' },
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