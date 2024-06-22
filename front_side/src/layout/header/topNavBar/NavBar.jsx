import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import LeftNavBar from './leftNavBar/LeftNavBar'
import RightNavBar from './rightNavBar/RightNavBar'

export default function NavBar() {
  return (
    <AppBar position='sticky' color='primary' elevation={3} sx={{ backgroundColor: '#e3edee' }}>
        <Toolbar sx={{ justifyContent: 'space-between'}}>
            <LeftNavBar/>
            <RightNavBar/>
        </Toolbar>
    </AppBar>
  )
}
