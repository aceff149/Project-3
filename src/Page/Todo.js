import React, {useState} from 'react'
import TodoForm from '../Components/ToDoForm';
import TodoItem from '../Components/ToDoList';

function Todos() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Finish this React project', completed: false },
    { id: 2, text: 'Write user stories and wireframes', completed: true },
    { id: 3, text: 'Push to GitHub and deploy', completed: false }
  ]);

  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div className="container mt-4 d-flex justify-content-between">
      <div className="todo-form-section">
        <h2>Add a Task</h2>
        <TodoForm addTodo={addTodo} />

        <div className="filter-buttons mt-3">
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('completed')}>Completed</button>
          <button onClick={() => setFilter('incomplete')}>Incomplete</button>
        </div>
      </div>

      <div className="todo-list-section">
        <h2>Todo List</h2>
        {filteredTodos.length === 0 && <p>No tasks to show.</p>}
        {filteredTodos.map(todo => (
          <TodoList
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default Todos;