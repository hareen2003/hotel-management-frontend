import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  Paper,
  AppBar,
  Toolbar,
  IconButton
} from '@mui/material';
import {
  Hotel,
  People,
  CalendarToday,
  AttachMoney,
  TrendingUp,
  Star,
  ExitToApp
} from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const stats = [
    { title: 'Total Rooms', value: '125', icon: <Hotel />, color: '#1976d2', change: '+5%' },
    { title: 'Occupied Rooms', value: '89', icon: <People />, color: '#2e7d32', change: '+12%' },
    { title: 'Today Check-ins', value: '15', icon: <CalendarToday />, color: '#ed6c02', change: '+3%' },
    { title: 'Revenue', value: '$45,230', icon: <AttachMoney />, color: '#9c27b0', change: '+8%' },
    { title: 'Occupancy Rate', value: '71%', icon: <TrendingUp />, color: '#d32f2f', change: '+4%' },
    { title: 'Guest Rating', value: '4.8/5', icon: <Star />, color: '#ed6c02', change: '+0.2' }
  ];

  const recentActivities = [
    { action: 'New booking', room: '101', time: '2 minutes ago' },
    { action: 'Check-in', room: '205', time: '15 minutes ago' },
    { action: 'Check-out', room: '312', time: '1 hour ago' },
    { action: 'Room service', room: '158', time: '2 hours ago' },
    { action: 'Maintenance', room: '042', time: '3 hours ago' }
  ];

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <AppBar position="static">
        <Toolbar>
          <Hotel sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <Typography variant="body2" sx={{ mr: 2 }}>
            Welcome, {user?.email}
          </Typography>
          <IconButton color="inherit" onClick={logout}>
            <ExitToApp />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: '#1976d2', mb: 2 }}>
          Dashboard Overview
        </Typography>

        <Grid container spacing={3} sx={{ mb: 2 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: stat.color, color: 'white', borderRadius: 3, transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'translateY(-4px)' } }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                      <Typography variant="h6" sx={{ color: 'white', opacity: 0.9 }}>
                        {stat.title}
                      </Typography>
                      <Typography variant="h4" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'white', opacity: 0.8 }}>
                        {stat.change} from last month
                      </Typography>
                    </Box>
                    <Box sx={{ color: 'white', opacity: 0.9, fontSize: 40 }}>
                      {stat.icon}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, borderRadius: 3, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
              <Typography variant="h6" gutterBottom>
                Recent Activities
              </Typography>
              <Box>
                {recentActivities.map((activity, index) => (
                  <Box key={index} sx={{ py: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
                    <Typography variant="body1">
                      <strong>{activity.action}</strong> - Room {activity.room}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {activity.time}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, borderRadius: 3, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
              <Typography variant="h6" gutterBottom>
                Quick Stats
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Available Rooms
                  </Typography>
                  <Typography variant="h6">36</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Pending Check-ins
                  </Typography>
                  <Typography variant="h6">8</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Maintenance
                  </Typography>
                  <Typography variant="h6">3</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Staff On Duty
                  </Typography>
                  <Typography variant="h6">24</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;