import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import useTrips from "../trips/hooks/useTrips";
import { useUser } from "../users/providers/UserProvider";
import useForm from "../forms/hooks/useForm";
import tripSchema from "../forms/models/joi-schema/tripSchema";
import ROUTES from "../routes/routesModel";
import { Box, CircularProgress, Container } from "@mui/material";
import TripForm from "../trips/components/TripForm";
import mapTripToModel from "../forms/models/normalization/mapTripToModel";
import normalizedTrip from "../forms/models/normalization/normalizedTrip";

const EditTripPage = () => {
  const { id } = useParams();

  const { handleGetTripById, trip, handleEditTrip, isLoading } = useTrips();
  const { user } = useUser();

  const { value, setData, ...rest } = useForm({}, tripSchema,     () => {
      handleEditTrip(id, normalizedTrip(value.data ))

      });;

  useEffect(() => {
    if (!user || !user.isAdmin) return;

    const fetchTrip = async () => {
      try {
        await handleGetTripById(id);
      } catch (error) {
        console.error("Failed to fetch trip:", error);
      }
    };

    fetchTrip();
  }, [id, user, handleGetTripById]);

  useEffect(() => {
    if (trip) {
      const modelTrip = mapTripToModel(trip);
      setData(modelTrip);

    }
  }, [trip, setData]);

  if (!user || !user.isAdmin) return <Navigate to={ROUTES.ROOT} />;
  if (isLoading) return  (
      <Box display="flex" alignItems="center" justifyContent="center" height="100%">
        <CircularProgress />
      </Box>
    );
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
        title="Edit Trip"
        errors={value.errors}
        data={value.data}
        onInputChange={rest.handleChange}
        setData={rest.setData}
      />
    </Container>
  );
};

export default EditTripPage;