import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardHeader, Divider } from '@mui/material';
import PropTypes from 'prop-types';

export default function CardBody({name, description}) {
  return (
    <>
        <CardHeader 
          title={name}
        />
        <Divider variant='middle'/>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
    </>
  )
}

CardBody.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};