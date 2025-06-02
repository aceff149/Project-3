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
    { id: 1, task: 'Go To the Gym', status: 'Not Started', completed: <button>Complete</button>, delete: <button>Delete</button>},
    { id: 2, task: 'Meal Prep for Week', status: 'Not Started', completed: <button>Complete</button>, delete: <button>Delete</button>},
    { id: 3, task: 'Drink Water', status: 'Not Started', completed: <button>Complete</button>, delete: <button>Delete</button>},
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