import { Container, Typography, Box } from '@mui/material';
import React from 'react';

export default function AboutPage() {
  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        borderRadius: 4, 
        p: 4, 
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
      }}>
        <Typography variant='h2' component='h1' gutterBottom>
          A little about me and my blog...
        </Typography>
        <Typography variant='body1' sx={{ fontSize: 20, color: '#333333' }}>
          Hey there! I'm Arel Sadis, a 26-year-old globetrotter originally from Israel. After completing my military service, I decided to embark on a journey that would take me across the globe. It all started with a sense of wanderlust that grew stronger with each new destination I explored. From the bustling streets of Tokyo to the serene beaches of Thailand, each place has left an indelible mark on my soul.
        </Typography>
        <Typography variant='body1' sx={{ fontSize: 20, color: '#333333', mt: 2 }}>
          Through my blog, I aim to not only share my travel experiences but also provide insights, tips, and inspiration for fellow adventurers. Whether you're seeking hidden gems off the beaten path or simply curious about different cultures, join me as I recount tales of my escapades. Let's wander together through this beautiful world, one trip at a time. Welcome to my travel diary – a place where stories come alive and memories are made. Thank you for choosing to explore the world with me.
        </Typography>
      </Box>
    </Container>
  );
}