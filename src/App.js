 import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/admin/Dashboard';
import HotelManagement from './pages/admin/HotelManagement';
import RoomManagement from './pages/admin/RoomManagement';
import BookingManagement from './pages/admin/BookingManagement';
import UserManagement from './pages/admin/UserManagement';
import './appstyle.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={
                <>
                  <Navbar />
                  <Home />
                  <Footer />
                </>
              } />
              <Route path="/login" element={
                <>
                  <Navbar />
                  <Login />
                  <Footer />
                </>
              } />
              <Route path="/admin/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/admin/hotel" element={
                <ProtectedRoute>
                  <HotelManagement />
                </ProtectedRoute>
              } />
              <Route path="/admin/rooms" element={
                <ProtectedRoute>
                  <RoomManagement />
                </ProtectedRoute>
              } />
              <Route path="/admin/bookings" element={
                <ProtectedRoute>
                  <BookingManagement />
                </ProtectedRoute>
              } />
              <Route path="/admin/users" element={
                <ProtectedRoute>
                  <UserManagement />
                </ProtectedRoute>
              } />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;