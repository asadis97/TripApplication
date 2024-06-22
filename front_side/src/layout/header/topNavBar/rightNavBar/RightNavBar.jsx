import React from 'react';
import { Box } from '@mui/material'
import { useUser } from '../../../../users/providers/UserProvider';
import Logged from './Logged';
import NotLogged from './NotLogged';

export default function RightNavBar() {
  
  const {user} = useUser();

  return (
    <Box 
      display="flex" 
      alignItems="center" 
      height="100%"
    >
      {user && <Logged/>}
      {!user && <NotLogged/>}
    </Box>
  )
}
