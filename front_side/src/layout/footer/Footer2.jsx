import React from 'react';
import { Container, Grid, IconButton, Typography } from '@mui/material';
import { Instagram, Phone, Copyright } from '@mui/icons-material';
import LogoIcon from '../header/topNavBar/leftNavBar/logo/LogoIcon';

const Footer = () => {
  return (
    <footer elevation={3} style={{
        backgroundColor: '#333',
        color: '#fff',
        marginTop: 'auto',
    }}>
      <Container>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={6} style={{
            display: 'flex',
            alignItems: 'center',
            }}>
            <IconButton style={{
                color: '#fff',
                marginRight: '0.5rem',
            }}>
              <Copyright />
            </IconButton>
            <Typography variant="body2">2024 Final project, all rights reserved.</Typography>
          </Grid>
          <Grid item xs={12} sm={6} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            
            <IconButton style={{
                color: '#fff',
                marginRight: '0.5rem',
            }}>
              <Instagram />
            </IconButton>
            
            <IconButton style={{
                color: '#fff',
                marginRight: '0.5rem',
            }}>
              <LogoIcon />
            </IconButton>
            
            <IconButton style={{
                color: '#fff',
                marginRight: '0.5rem',
            }}>
              <Phone />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;