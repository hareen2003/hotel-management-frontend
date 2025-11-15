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
  Avatar,
  AppBar,
  Toolbar
} from '@mui/material';
import { Add, Edit, Delete, AdminPanelSettings, SupportAgent, CleaningServices, ExitToApp, Hotel } from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';

const UserManagement = () => {
  const { logout, user } = useAuth();

  const users = [
    { id: 1, name: 'Admin User', email: 'admin@hotel.com', role: 'Administrator', status: 'Active', avatar: 'A' },
    { id: 2, name: 'John Manager', email: 'john@hotel.com', role: 'Manager', status: 'Active', avatar: 'J' },
    { id: 3, name: 'Sarah Reception', email: 'sarah@hotel.com', role: 'Receptionist', status: 'Active', avatar: 'S' },
    { id: 4, name: 'Mike Housekeeping', email: 'mike@hotel.com', role: 'Housekeeping', status: 'Inactive', avatar: 'M' },
    { id: 5, name: 'Emma Support', email: 'emma@hotel.com', role: 'Support', status: 'Active', avatar: 'E' }
  ];

  const getRoleIcon = (role) => {
    switch (role) {
      case 'Administrator': return <AdminPanelSettings />;
      case 'Manager': return <AdminPanelSettings />;
      case 'Receptionist': return <SupportAgent />;
      case 'Housekeeping': return <CleaningServices />;
      default: return <SupportAgent />;
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'Administrator': return 'error';
      case 'Manager': return 'warning';
      case 'Receptionist': return 'primary';
      case 'Housekeeping': return 'success';
      default: return 'default';
    }
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <AppBar position="static">
        <Toolbar>
          <Hotel sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User Management
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
            User Management
          </Typography>
          <Button variant="contained" startIcon={<Add />}>
            Add User
          </Button>
        </Box>

        <Paper sx={{ p: 3, borderRadius: 3, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: 'primary.main' }}>
                          {user.avatar}
                        </Avatar>
                        <Typography variant="body1">{user.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Chip 
                        icon={getRoleIcon(user.role)}
                        label={user.role}
                        color={getRoleColor(user.role)}
                        variant="outlined"
                        size="small"
                        sx={{ borderRadius: 1 }}
                      />
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={user.status} 
                        color={user.status === 'Active' ? 'success' : 'default'}
                        size="small"
                        sx={{ borderRadius: 1 }}
                      />
                    </TableCell>
                    <TableCell>
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

export default UserManagement;