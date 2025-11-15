import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Paper,
  IconButton,
  Button
} from '@mui/material';
import {
  Wifi,
  Restaurant,
  Pool,
  FitnessCenter,
  LocalParking,
  Spa
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    { icon: <Wifi />, title: 'Free WiFi', description: 'High-speed internet throughout the hotel' },
    { icon: <Restaurant />, title: 'Fine Dining', description: 'World-class restaurant and room service' },
    { icon: <Pool />, title: 'Swimming Pool', description: 'Heated outdoor pool with panoramic views' },
    { icon: <FitnessCenter />, title: 'Fitness Center', description: '24/7 gym with modern equipment' },
    { icon: <Spa />, title: 'Spa & Wellness', description: 'Relaxing spa treatments and massages' },
    { icon: <LocalParking />, title: 'Free Parking', description: 'Secure parking facilities available' }
  ];

  const roomTypes = [
    {
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop',
      title: 'Standard Room',
      price: '$129/night',
      description: 'Comfortable room with all essential amenities'
    },
    {
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop',
      title: 'Deluxe Suite',
      price: '$229/night',
      description: 'Spacious suite with separate living area'
    },
    {
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop',
      title: 'Executive Suite',
      price: '$329/night',
      description: 'Luxurious suite with premium amenities'
    }
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          backgroundImage: 'linear-gradient(135deg, rgba(25,118,210,0.6) 0%, rgba(220,0,78,0.45) 100%), url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&h=800&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: { xs: '55vh', md: '70vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* subtle animated overlay */}
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.45))' }} />
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800, letterSpacing: '-1px', textShadow: '0 6px 20px rgba(0,0,0,0.6)', fontSize: { xs: '2rem', md: '3rem' } }}>
            Welcome to Grand Hotel
          </Typography>
          <Typography variant="h5" component="p" gutterBottom sx={{ opacity: 0.95, fontSize: { xs: '1rem', md: '1.25rem' } }}>
            Experience Luxury — curated stays, memorable moments
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 2, px: 5, py: 1.5, borderRadius: '999px', boxShadow: '0 8px 20px rgba(25,118,210,0.25)' }}
            onClick={() => navigate('/login')}
          >
            Manage Hotel
          </Button>
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
          Our Amenities
        </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={3} sx={{ textAlign: 'center', height: '100%', transition: 'transform 0.25s ease, boxShadow 0.25s ease', borderRadius: 3, p: 3, background: 'rgba(255,255,255,0.8)', backdropFilter: 'saturate(140%) blur(6px)', '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 12px 30px rgba(0,0,0,0.12)' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <Box sx={{ width: 64, height: 64, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'primary.main', color: '#fff', boxShadow: '0 6px 18px rgba(25,118,210,0.18)' }}>
                    {feature.icon}
                  </Box>
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Paper sx={{ py: 8, backgroundColor: 'grey.50' }}>
        <Container>
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
            Room Types
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {roomTypes.map((room, index) => (
              <Grid item xs={12} md={4} key={index}>
                  <Card sx={{ height: '100%', transition: 'transform 0.25s ease', borderRadius: 3, overflow: 'hidden', '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 14px 40px rgba(2,6,23,0.12)' } }}>
                    <CardMedia
                      component="img"
                      height="220"
                      image={room.image}
                      alt={room.title}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                        {room.title}
                      </Typography>
                      <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 800 }}>
                        {room.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {room.description}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Button variant="outlined" size="small" sx={{ mr: 1 }}>View</Button>
                        <Button variant="contained" size="small">Book</Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
            ))}
          </Grid>
        </Container>
      </Paper>

      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
          Why Choose Us
        </Typography>
        <Grid container spacing={4} textAlign="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h3" color="primary" gutterBottom>
              500+
            </Typography>
            <Typography variant="h6" gutterBottom>
              Happy Guests
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h3" color="primary" gutterBottom>
              125
            </Typography>
            <Typography variant="h6" gutterBottom>
              Luxury Rooms
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h3" color="primary" gutterBottom>
              24/7
            </Typography>
            <Typography variant="h6" gutterBottom>
              Customer Support
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;