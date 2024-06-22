import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';
import { Box, CircularProgress, Container, Divider, Grid, Typography } from '@mui/material';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import Trips from '../Trips';
import useTrips from '../hooks/useTrips';
import { useSnack } from '../../providers/SnackbarProvider';

export default function ShowTrips({ trips, handleShowTrips}) {
    const snack = useSnack();
    const {handleDeleteTrip, handleChangeLikeStatus, handleGetLikedTripsId, tripIds} = useTrips();
    const [displayData, setDisplayData] = useState(trips);
    const [searchResult, setSearchResult] = useState(trips);
    const [filterResult, setFilterResult] = useState(trips);
    const [likedTrips, setLikedTrips] = useState([]);

    const navigate = useNavigate();

    const memoizedHandleShowTrips = useCallback(handleShowTrips, []);

    const memoizedHandleGetLikedTripsId = useCallback(handleGetLikedTripsId, []);
 
    useEffect(() => {
      memoizedHandleShowTrips();
      memoizedHandleGetLikedTripsId();
      snack("success", "Those are my trips")
    }, [memoizedHandleShowTrips]);
    
    const handleEdit = (id) => {
      navigate(`${ROUTES.EDIT_TRIP}/${id}`)
    };

  const handleLike = (id) => {

    handleChangeLikeStatus(id)

    const isLiked = tripIds.includes(id);
      if (isLiked) {
        setLikedTrips(likedTrips.filter(likedId => likedId !== id));
        console.log(`Card ${id} is Unliked`);
        navigate(ROUTES.TRIPS)
      } else {
        setLikedTrips([...likedTrips, id]);
        console.log(`Card ${id} is Liked`);
      }

  };

    const handleDelete = (id) => {
      handleDeleteTrip(id);
    };
  
    const handleSearchChange = (data) => {
      setSearchResult(data);
      if(filterResult && data) {
        const filteredSearchResult = data.filter(item => filterResult.find(filterItem => filterItem.id === item.id));
        setDisplayData(filteredSearchResult);
      }
    }
  
    const handleFilteredData = (data) => {
      setFilterResult(data);
      if(searchResult && data) {
        const filteredSearchResult = data.filter(item => searchResult.find(searchItem => searchItem.id === item.id));
        setDisplayData(filteredSearchResult);
      }
    };
  
    return (
      <div>
        <Container>
          <Typography variant='h2' component='h1'>Trips</Typography>
          <Typography variant='h5' component='h2'>On this page you can find all trips</Typography>
          <Divider sx={{my: 2}}/>
          <Grid 
            container 
            spacing={2} 
            alignItems="center"
          > 
            {trips && <SearchBar trips = {trips} handleSearchChange={handleSearchChange}/>}
            {trips && <FilterBar trips = {trips} handleFilteredData={handleFilteredData}/>}
          </Grid> 
          <Grid 
            Container
            xs={12}
            spacing={1}
          >

            {displayData ? 
              <Trips 
                trips = {displayData} 
                handleEdit={handleEdit} 
                handleLike={handleLike} 
                handleDelete={handleDelete} 
                likedTrips ={likedTrips} 
                tripIds={tripIds}
              /> 
              :
              <Box display="flex" alignItems="center" justifyContent="center" height="100%">
                <CircularProgress />
              </Box>
            }
          </Grid>
        </Container>
      </div>
    )
}

ShowTrips.propTypes = {
    trips: PropTypes.array.isRequired,
    handleShowTrips: PropTypes.func.isRequired,
};