import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';  // Ensure BrowserRouter is imported
import { ThemeProvider } from '@mui/material/styles';
import themes from './themes';
import { useSelector } from 'react-redux';
import Login from './views/authentication3/Login3'
// import Register from './views/pages/authentication3/Register3';  // Correct path for Register component
// import MobileSection from './layout/MainLayout/Header/index'
// import MainLayout from './layout/MainLayout';
function App() {
  const customization = useSelector((state) => state.customization);

  return (
    <ThemeProvider theme={themes(customization)}>
      <BrowserRouter>  {/* Make sure BrowserRouter is only used here */}
        <Routes>
          <Route path="/" element={<Login />} />  {/* Route for the Login page */}
          {/* <Route path="/register" element={<Register />} /> 
          <Route path="/header" element={< MainLayout/>} />   */}
          {/* Route for the Register page */}
          {/* Add more routes here if needed */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
