import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/HomePage';
import Header from './Components/Header';
import ToDoList from './Components/ToDoList';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DragItem from './Components/ToDoList';
import DropZone from './Components/ToDoList';

function App() {
  const [todolist, setToDoList] = React.useState([
    { id: 1, task: 'Meditate', status: 'Not Completed', completed:' ', delete:  ' ' },
    { id: 2, task: 'Clean House', status: 'Not Completed', completed:' ', delete:  ' ' },
    { id: 3, task: 'Go to the Gym', status: 'Not Completed', completed:' ', delete:  ' ' },
  ]);
      const [droppedItems, setDroppedItems] = useState([]);

    const handleDrop = (item) => {
        setDroppedItems((prevItems) => [...prevItems, item]);
    };

    const handleRemoveItem = (index) => {
        const updatedItems = [...droppedItems];
        updatedItems.splice(index, 1);
        setDroppedItems(updatedItems);
    };

    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
      <div style={{
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '5px'
      }}>
        <h1>Drag and Drop Example</h1>
            <div style={{
              display: 'flex',
              justifyContent: 'space-around'
            }}>
      <div style={{
        border: '1px solid #ccc',
        padding: '10px', borderRadius: '5px'
      }}>
        <h2>Drag Items</h2>
          <DragItem name="Item 1" />
          <DragItem name="Item 2" />
          <DragItem name="Item 3" />
      </div>
      <div style={{
          border: '1px solid #ccc',
          padding: '10px', borderRadius: '5px'
      }}>
        <h2>Drop Zone</h2>
            <DropZone onDrop={handleDrop} />
              {droppedItems.map((item, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '5px',
            marginTop: '10px',
            backgroundColor: 'lightblue',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
        <p>{item.name}</p>
          <button onClick={
            () => handleRemoveItem(index)}>
            Remove
          </button>
        </div>
        ))}
        </div>
        </div>
        </div>
        </div>
    );
};

    <Router>
      <Header />
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/todo" element={<ToDoList todolist={todolist} setToDoList={setToDoList}  />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>


export default App;