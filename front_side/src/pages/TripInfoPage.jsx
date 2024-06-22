import { Container, Divider, Typography, Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useTrips from '../trips/hooks/useTrips';

export default function TripInfoPage() {
  const { id } = useParams();
  const { trip, handleGetTripById } = useTrips();

  useEffect(() => {
    handleGetTripById(id);
  }, [id, handleGetTripById]);

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: 4,
        borderRadius: 4,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        maxWidth: 600,
        margin: 'auto',
      }}
    >
      <Typography variant='h2' component='h1' gutterBottom>
        {trip.title}
      </Typography>
      <Typography variant='h5' component='h2'>
        Extra Information
      </Typography>
      <Divider sx={{ my: 2 }} />
      
      {trip && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
            Description:
          </Typography>
          <Typography variant="body2">
            {trip.description}
          </Typography>
        </Box>
      )}
    </Box>
  );
}