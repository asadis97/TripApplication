import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ROUTES from './routesModel'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import LoginPage from '../pages/LoginPage'
import TripsPage from '../pages/TripsPage'
import TripInfoPage from '../pages/TripInfoPage'
import SignUpPage from '../pages/SignUpPage'
import CreateTripPage from '../pages/CreateTripPage'
import EditTripPage from '../pages/EditTripPage'
import LikedTripsPage from '../pages/LikedTripsPage'

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<HomePage/>}/>
      <Route path={ROUTES.ABOUT} element={<AboutPage/>}/>
      <Route path={ROUTES.LOGIN} element={<LoginPage/>}/>
      <Route path={ROUTES.TRIPS} element={<TripsPage/>}/>
      <Route path={ROUTES.SIGNUP} element={<SignUpPage/>}/>
      <Route path={ROUTES.FAV_CARDS} element={<LikedTripsPage/>}/>
      <Route path={`${ROUTES.EDIT_TRIP}/:id`} element={<EditTripPage/>}/>
      <Route path={ROUTES.CREATE_TRIP} element={<CreateTripPage/>}/>
      <Route path={`${ROUTES.TRIPINFO}/:id`} element={<TripInfoPage/>}/>
    </Routes>
  )
}
