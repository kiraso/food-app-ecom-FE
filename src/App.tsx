import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MenuCustom from './pages/MenuCustom';
import Layout from './Layout';
import Compose from './components/compose';
import { AppProvider } from './context/AppContext';
import OrderList from './pages/OrderList';
import CategoryList from './pages/CategoryList';
import Login from './pages/Login';
import Register from './pages/Register';
import { UserProvider } from './context/userContext';

function App() {
  return (
    <Compose components={[UserProvider]}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/menu/:name" element={<MenuCustom />} />
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/category-list" element={<CategoryList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Compose>
  );
}

export default App;
