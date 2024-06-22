import React from 'react';
import { Grid } from '@mui/material';
import TripCard from './trip/TripCard';
import PropTypes from 'prop-types';

export default function Trips({ trips, handleDelete, handleEdit, handleLike, likedTrips, tripIds }) {

  return (
    <>
      <Grid container>
        {trips.map((trip)=>(
          <Grid item key= {trip.id} xs={12} sm={6}md={4} lg={3}>
            <TripCard 
              trip={trip}
              key={trip.id} 
              handleLike={handleLike}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              likedTrips = {likedTrips}
              tripIds={tripIds}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

Trips.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleLike: PropTypes.func.isRequired,
  trips: PropTypes.array.isRequired,
};