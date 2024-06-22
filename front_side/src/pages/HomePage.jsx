import { Container, Typography, Box } from '@mui/material';
import React from 'react';

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2, 
      }}
    >
      <Container
        sx={{
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          borderRadius: 2, 
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
          p: 4, 
        }}
      >
        <Typography variant='h2' component='h1' gutterBottom>
          Welcome to My Traveling Blog!
        </Typography>
        <Typography variant='h5' component='h2' sx={{ color: '#1f00ff' }}>
          I promise you, YOU WON'T BE disappointed.
        </Typography>
      </Container>
    </Box>
  );
}