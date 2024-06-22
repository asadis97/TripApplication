import React from 'react'
import useTrips from '../trips/hooks/useTrips'
import useForm from '../forms/hooks/useForm';
import { useUser } from '../users/providers/UserProvider';
import { Navigate } from 'react-router-dom';
import ROUTES from '../routes/routesModel';
import { Container } from '@mui/material';
import TripForm from '../trips/components/TripForm';
import tripSchema from '../forms/models/joi-schema/tripSchema';
import initialTripForm from '../forms/initialForms/initialTripForm';

export default function CreateTripPage() {
  const {handleCreateTrip} = useTrips()
  const { value, ...rest } = useForm(
    initialTripForm,
    tripSchema,
    handleCreateTrip
  );
  const { user } = useUser();
  if (!user || !user.isAdmin) return <Navigate to={ROUTES.TRIPS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TripForm
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onFormChange={rest.validateForm}
        title="Create Trip"
        errors={value.errors}
        data={value.data}
        onInputChange={rest.handleChange}
        setData={rest.setData}
      />
    </Container>
  );
}
