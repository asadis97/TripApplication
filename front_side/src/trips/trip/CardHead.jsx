import React from 'react';
import { CardMedia } from '@mui/material';

export default function CardHead({image}) {
  if (!image || !image.url || !image.alt) {
    return null;
  }
  return (
    <>
        <CardMedia
          component="img"
          height="140"
          image={image.url}
          alt={image.alt}
        />
    </>
  )
}
