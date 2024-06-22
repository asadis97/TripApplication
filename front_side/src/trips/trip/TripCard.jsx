import React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';
import CardHead from './CardHead';
import CardBody from './CardBody';
import CardsActionBar from './CardsActionBar';
import PropTypes from 'prop-types';

export default function TripCard({handleDelete, handleLike, handleEdit, trip, likedTrips, tripIds}) {
  const navigate = useNavigate();
  return (
    <Card>
      <CardActionArea onClick={()=>(navigate(`${ROUTES.TRIPINFO}/${trip.id}`))}>
        <CardHead image={trip.tripImage}/>
        <CardBody
          name={trip.title}
          description = {trip.description}
        />
      </CardActionArea>
      <CardsActionBar 
        handleDelete={handleDelete} 
        handleEdit={handleEdit} 
        handleLike={handleLike}
        id={trip.id}
        likedTrips ={likedTrips}
        tripIds={tripIds}
      />
    </Card>
  )
}

CardsActionBar.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleLike: PropTypes.func.isRequired
};