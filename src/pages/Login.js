import React, { useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Card,
  CardContent
} from '@mui/material';
import { Hotel, AdminPanelSettings } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const success = await login(email, password);
    if (success) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials. Use admin@hotel.com / password');
    }
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ width: '100%', maxWidth: 450 }}>
        <Card sx={{ padding: 4, borderRadius: 3, boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)' }}>
          <CardContent>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                <Hotel sx={{ mr: 1, fontSize: 40, color: 'primary.main' }} />
                <Typography component="h1" variant="h4">
                  Grand Hotel
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AdminPanelSettings sx={{ mr: 1 }} />
                <Typography component="h2" variant="h5">
                  Admin Login
                </Typography>
              </Box>
            </Box>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2, '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ mb: 2, '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, py: 1.5, borderRadius: 2, fontWeight: 600, textTransform: 'none', fontSize: '1rem' }}
              >
                Sign In
              </Button>
            </Box>

            <Box sx={{ mt: 3, p: 2, backgroundColor: 'grey.50', borderRadius: 2 }}>
              <Typography variant="body2" color="text.secondary" align="center">
                Demo Credentials:<br />
                Email: admin@hotel.com<br />
                Password: password
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Login;