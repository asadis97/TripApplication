import React from 'react'
import useTrips from '../trips/hooks/useTrips'
import ShowTrips from '../trips/components/ShowTrips'

export default function TripsPage() {
  const {trips, handleGetTrips} = useTrips()
  return (
    <>
      <ShowTrips trips={trips} handleShowTrips={handleGetTrips}/>
    </>
  )
}
