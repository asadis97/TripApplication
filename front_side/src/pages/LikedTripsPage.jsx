import React, { useEffect, useState } from 'react'
import useTrips from '../trips/hooks/useTrips'
import ShowTrips from '../trips/components/ShowTrips';

export default function LikedTripsPage() {
  const {trips, handleGetLikedTrips} = useTrips();

 
  return (
    <>
      <ShowTrips trips={trips} handleShowTrips={handleGetLikedTrips}/>
    </>
  )
}