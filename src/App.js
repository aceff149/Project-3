import './App.css';
import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContactPage'
import StudentPage from './Pages/StudentPage';



function App() {
  const productList = ["Laptop", "Phone"];
  


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="student" element={<StudentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;