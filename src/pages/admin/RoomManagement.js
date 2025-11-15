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
  Chip,
  AppBar,
  Toolbar,
  IconButton
} from '@mui/material';
import { Add, Bed, Wifi, AcUnit, Tv, ExitToApp, Hotel } from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';

const RoomManagement = () => {
  const { logout, user } = useAuth();

  const rooms = [
    { number: '101', type: 'Standard', status: 'Available', price: '$129', amenities: ['wifi', 'ac'] },
    { number: '102', type: 'Standard', status: 'Occupied', price: '$129', amenities: ['wifi', 'ac', 'tv'] },
    { number: '201', type: 'Deluxe', status: 'Available', price: '$229', amenities: ['wifi', 'ac', 'tv'] },
    { number: '202', type: 'Deluxe', status: 'Maintenance', price: '$229', amenities: ['wifi', 'ac', 'tv'] },
    { number: '301', type: 'Executive', status: 'Available', price: '$329', amenities: ['wifi', 'ac', 'tv'] },
    { number: '302', type: 'Executive', status: 'Occupied', price: '$329', amenities: ['wifi', 'ac', 'tv'] }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available': return 'success';
      case 'Occupied': return 'error';
      case 'Maintenance': return 'warning';
      default: return 'default';
    }
  };

  const getAmenityIcon = (amenity) => {
    switch (amenity) {
      case 'wifi': return <Wifi fontSize="small" />;
      case 'ac': return <AcUnit fontSize="small" />;
      case 'tv': return <Tv fontSize="small" />;
      default: return <Bed fontSize="small" />;
    }
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <AppBar position="static">
        <Toolbar>
          <Hotel sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Room Management
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
            Room Management
          </Typography>
          <Button variant="contained" startIcon={<Add />}>
            Add Room
          </Button>
        </Box>

        <Grid container spacing={3}>
          {rooms.map((room, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ transition: 'all 0.3s ease-in-out', '&:hover': { transform: 'translateY(-2px)', boxShadow: 3 } }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                    <Typography variant="h6">
                      Room {room.number}
                    </Typography>
                    <Chip 
                      label={room.status} 
                      color={getStatusColor(room.status)}
                      size="small"
                      sx={{ borderRadius: 1 }}
                    />
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {room.type}
                  </Typography>
                  
                  <Typography variant="h6" color="primary" gutterBottom>
                    {room.price}/night
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 0.5, mt: 2, flexWrap: 'wrap' }}>
                    {room.amenities.map((amenity, idx) => (
                      <Chip
                        key={idx}
                        icon={getAmenityIcon(amenity)}
                        label={amenity}
                        size="small"
                        variant="outlined"
                        sx={{ borderRadius: 1, mb: 0.5 }}
                      />
                    ))}
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                    <Button size="small" variant="outlined" sx={{ borderRadius: 1 }}>
                      Edit
                    </Button>
                    <Button size="small" variant="outlined" color="error" sx={{ borderRadius: 1 }}>
                      Delete
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default RoomManagement;
