import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  AppBar,
  Toolbar
} from '@mui/material';
import { Add, Edit, Delete, Visibility, ExitToApp, Hotel } from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';

const BookingManagement = () => {
  const { logout, user } = useAuth();

  const bookings = [
    { id: 'B001', guest: 'John Doe', room: '101', checkIn: '2024-01-15', checkOut: '2024-01-18', status: 'Confirmed', amount: '$387' },
    { id: 'B002', guest: 'Jane Smith', room: '201', checkIn: '2024-01-16', checkOut: '2024-01-20', status: 'Checked In', amount: '$916' },
    { id: 'B003', guest: 'Mike Johnson', room: '301', checkIn: '2024-01-18', checkOut: '2024-01-22', status: 'Pending', amount: '$1,316' },
    { id: 'B004', guest: 'Sarah Wilson', room: '102', checkIn: '2024-01-19', checkOut: '2024-01-21', status: 'Confirmed', amount: '$258' },
    { id: 'B005', guest: 'David Brown', room: '202', checkIn: '2024-01-20', checkOut: '2024-01-25', status: 'Checked Out', amount: '$1,145' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed': return 'success';
      case 'Checked In': return 'primary';
      case 'Pending': return 'warning';
      case 'Checked Out': return 'default';
      default: return 'default';
    }
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <AppBar position="static">
        <Toolbar>
          <Hotel sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Booking Management
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
            Booking Management
          </Typography>
          <Button variant="contained" startIcon={<Add />}>
            New Booking
          </Button>
        </Box>

        <Paper sx={{ p: 3, borderRadius: 3, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Booking ID</TableCell>
                  <TableCell>Guest Name</TableCell>
                  <TableCell>Room</TableCell>
                  <TableCell>Check-in</TableCell>
                  <TableCell>Check-out</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>{booking.id}</TableCell>
                    <TableCell>{booking.guest}</TableCell>
                    <TableCell>{booking.room}</TableCell>
                    <TableCell>{booking.checkIn}</TableCell>
                    <TableCell>{booking.checkOut}</TableCell>
                    <TableCell>
                      <Chip 
                        label={booking.status} 
                        color={getStatusColor(booking.status)}
                        size="small"
                        sx={{ borderRadius: 1 }}
                      />
                    </TableCell>
                    <TableCell>{booking.amount}</TableCell>
                    <TableCell>
                      <IconButton size="small" color="primary">
                        <Visibility />
                      </IconButton>
                      <IconButton size="small" color="primary">
                        <Edit />
                      </IconButton>
                      <IconButton size="small" color="error">
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </Box>
  );
};

export default BookingManagement;