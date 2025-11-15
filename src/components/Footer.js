 import React from 'react';
import { Box, Container, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Grand Hotel & Resort
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Luxury hotel management system providing world-class hospitality 
              services and exceptional guest experiences.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="/" color="inherit" display="block" sx={{ mb: 1 }}>
                Home
              </Link>
              <Link href="/login" color="inherit" display="block" sx={{ mb: 1 }}>
                Admin Login
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Luxury Avenue<br />
              Hotel District, City 10001<br />
              Email: info@grandhotel.com<br />
              Phone: (555) 123-4567
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 3, mt: 3 }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Grand Hotel & Resort. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;