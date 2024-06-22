import { Box, IconButton, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react'
import useUsers from '../../../../users/hooks/useUsers';
import { useUser } from '../../../../users/providers/UserProvider';

export default function Logged() {
    const { user } = useUser();
    const { handleLogout } = useUsers();

  return (
    <>
        <Box>
            <Typography sx={{
            display:{
            color: '#46c9e1'
            }
        }}>
                Welcome back {user.FirstName}
            </Typography>
            <IconButton onClick={() => {handleLogout()}}>
                <LogoutIcon/>
            </IconButton>
        </Box>
    </>
  )
}
