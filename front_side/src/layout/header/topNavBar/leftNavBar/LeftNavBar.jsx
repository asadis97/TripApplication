import { Box } from '@mui/material'
import React from 'react'
import NavItem from '../../../../routes/components/NavItem'
import ROUTES from '../../../../routes/routesModel'
import LogoIcon from './logo/LogoIcon'
import Logo from './logo/Logo';
import { useUser } from '../../../../users/providers/UserProvider'

export default function LeftNavBar() {
  const {user} = useUser();

  const isAdmin = user?.isAdmin === 'True'
  
  return (
    <Box 
      display="flex" 
      alignItems="center" 
      height="100%"
    >
      <LogoIcon/>
      <Box  
        sx={{
          display: { xs: 'none', md: 'inline-flex' }
        }}>
          <Logo/>
          <NavItem to={ROUTES.ROOT} label='Home'/>
          <NavItem to={ROUTES.ABOUT} label='About'/>
          <NavItem to={ROUTES.TRIPS} label='Trips'/>
          {user && isAdmin && (
            <NavItem to={ROUTES.CREATE_TRIP} label='Create Trip'/>
          )}
          {user && !isAdmin && (
            <NavItem to={ROUTES.FAV_CARDS} label='Liked Trips'/>
          )}
      </Box>
    </Box>
  )
}
