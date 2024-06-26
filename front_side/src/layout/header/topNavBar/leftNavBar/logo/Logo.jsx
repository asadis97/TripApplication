import { Typography } from '@mui/material'
import React from 'react'

export default function Logo() {
  return (
    <Typography 
        variant='h4' 
        sx={{
            display:{xs: 'none', 
            md: 'inline-flex', 
            marginRight: 2, 
            fontFamily: "Montserrat",
            color: '#2193b0'
            }
        }} >
        Sadis Travels
    </Typography>
  )
}