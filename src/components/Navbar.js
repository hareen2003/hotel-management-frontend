import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box
} from '@mui/material';
import {
  Hotel,
  Menu as MenuIcon,
  AdminPanelSettings
} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Admin Login', path: '/login' }
  ];

  const adminMenuItems = [
    { text: 'Dashboard', path: '/admin/dashboard' },
    { text: 'Hotel Management', path: '/admin/hotel' },
    { text: 'Room Management', path: '/admin/rooms' },
    { text: 'Booking Management', path: '/admin/bookings' },
    { text: 'User Management', path: '/admin/users' }
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
    setDrawerOpen(false);
  };

  const drawer = (
    <List>
      {(isAuthenticated ? adminMenuItems : menuItems).map((item) => (
        <ListItem
          button
          key={item.text}
          selected={location.pathname === item.path}
          onClick={() => {
            navigate(item.path);
            setDrawerOpen(false);
          }}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
      {isAuthenticated && (
        <ListItem button onClick={handleLogout}>
          <ListItemText primary="Logout" />
        </ListItem>
      )}
    </List>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgba(0,0,0,0.9)' }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => navigate('/')}
        >
          <Hotel />
        </IconButton>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Grand Hotel & Resort
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {isAuthenticated ? (
              <>
                {adminMenuItems.map((item) => (
                  <Button
                    key={item.text}
                    color="inherit"
                    onClick={() => navigate(item.path)}
                    variant={location.pathname === item.path ? "outlined" : "text"}
                  >
                    {item.text}
                  </Button>
                ))}
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                  <AdminPanelSettings sx={{ mr: 1 }} />
                  <Typography variant="body2" sx={{ mr: 2 }}>
                    {user?.email}
                  </Typography>
                  <Button color="inherit" onClick={handleLogout}>
                    Logout
                  </Button>
                </Box>
              </>
            ) : (
              menuItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  onClick={() => navigate(item.path)}
                >
                  {item.text}
                </Button>
              ))
            )}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;