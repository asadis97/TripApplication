import { Box, IconButton } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../../routes/routesModel';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function NotLogged() {

    const navigate = useNavigate();

  return (
    <>
    <Box>
        <IconButton onClick={()=>navigate(ROUTES.LOGIN)}>
            <LoginIcon/>
        </IconButton>
        <IconButton onClick={()=>navigate(ROUTES.SIGNUP)}>
            <PersonAddIcon/>
        </IconButton>
    </Box>
    </>
  )
}
