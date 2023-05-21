import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MenuCustom from './pages/MenuCustom';
import Compose from './components/compose';
import { AppProvider } from './context/AppContext';
import OrderList from './pages/OrderList';
import CategoryList from './pages/CategoryList';
import Login from './pages/Login';
import Register from './pages/Register';
import { UserProvider } from './context/userContext';
import Profile from './pages/Profile';

function App() {
  useEffect(() => {
    if (!localStorage.getItem('user')) window.location.replace('/register');
  }, []);
  return (
    <Compose components={[UserProvider]}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/menu/:name" element={<MenuCustom />} />
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/category-list" element={<CategoryList />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Compose>
  );
}

export default App;
