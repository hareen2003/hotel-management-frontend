import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  IconButton
} from '@mui/material';
import {
  Add,
  Business,
  RoomService,
  Restaurant,
  Pool,
  FitnessCenter,
  ExitToApp,
  Hotel
} from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const HotelManagement = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const facilities = [
    { name: 'Main Building', status: 'Operational', icon: <Business /> },
    { name: 'Room Service', status: '24/7 Available', icon: <RoomService /> },
    { name: 'Restaurant', status: 'Open', icon: <Restaurant /> },
    { name: 'Swimming Pool', status: 'Maintenance', icon: <Pool /> },
    { name: 'Fitness Center', status: 'Operational', icon: <FitnessCenter /> }
  ];

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <AppBar position="static">
        <Toolbar>
          <Hotel sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hotel Management
          </Typography>
          <Typography variant="body2" sx={{ mr: 2 }}>
            {user?.email}
          </Typography>
          <IconButton color="inherit" onClick={logout}>
            <ExitToApp />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, color: '#1976d2' }}>
            Hotel Management
          </Typography>
          <Button variant="contained" startIcon={<Add />}>
            Add Facility
          </Button>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 3, borderRadius: 3, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
              <Typography variant="h6" gutterBottom>
                Hotel Facilities
              </Typography>
              <Grid container spacing={2}>
                {facilities.map((facility, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card sx={{ transition: 'all 0.3s ease-in-out', '&:hover': { transform: 'translateY(-2px)', boxShadow: 3 } }}>
                      <CardContent sx={{ textAlign: 'center' }}>
                        <Box sx={{ color: 'primary.main', mb: 1, fontSize: 40 }}>
                          {facility.icon}
                        </Box>
                        <Typography variant="h6" gutterBottom>
                          {facility.name}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color={facility.status === 'Operational' || facility.status === 'Open' || facility.status === '24/7 Available' ? 'success.main' : 'warning.main'}
                        >
                          {facility.status}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, borderRadius: 3, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
              <Typography variant="h6" gutterBottom>
                Hotel Information
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Hotel Name
                  </Typography>
                  <Typography variant="body1">Grand Hotel & Resort</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Address
                  </Typography>
                  <Typography variant="body1">123 Luxury Avenue, Hotel District, City 10001</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Contact
                  </Typography>
                  <Typography variant="body1">info@grandhotel.com | (555) 123-4567</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, borderRadius: 3, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
              <Typography variant="h6" gutterBottom>
                Quick Actions
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Button variant="outlined" sx={{ borderRadius: 2 }}>Update Hotel Info</Button>
                <Button variant="outlined" sx={{ borderRadius: 2 }}>Manage Amenities</Button>
                <Button variant="outlined" sx={{ borderRadius: 2 }}>Staff Schedule</Button>
                <Button variant="outlined" sx={{ borderRadius: 2 }}>Maintenance Requests</Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HotelManagement;