import { useCallback, useState } from "react";
import { createTrip, deletTrip, editTrip, getTripById, getTrips, getTripsByCountry, getLikedTrips, likeTrip, likedTripsId } from "../services/TripApiService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizedTrip from "../../forms/models/normalization/normalizedTrip";
import useAxios from "../../hooks/useAxios";


export default function useTrips() {
    const [trips, setTrips] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [trip, setTrip] = useState(null);
    const [tripIds, setTripIds] = useState(null);

    useAxios();

    const navigate = useNavigate();

    const handleGetTrips = async () => {
        try {
            setLoading(true);
            const trips = await getTrips();
            setTrips(trips);
            setLoading(false);

        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
    };

    const handleCreateTrip = useCallback(
        async (tripFromClient) => {
            try{
                setLoading(true);
                const tripNorm = normalizedTrip(tripFromClient);
                await createTrip(tripNorm);
                navigate(ROUTES.TRIPS)
                setLoading(false);

            }catch (error) {
                setLoading(false);
                setError(error.message);
            }
        },[navigate]
    )

    const handleDeleteTrip = useCallback(async (tripId) => {
        try {
            setLoading(true);
            await deletTrip(tripId);
            setLoading(false);

        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
    }, []);

    const handleEditTrip = useCallback(async (tripId, trip) => {
        try {
            setLoading(true);
            await editTrip(tripId,trip);
            navigate(ROUTES.TRIPS)
            setLoading(false);

        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }, [])

    const handleGetTripById = useCallback(async (tripId) => {
        try {
            setLoading(true);
            const trip1 = await getTripById(tripId);
            setLoading(false);
            setTrip(trip1)
        } catch (error) {
            setLoading(false);
            setError(error);
        } finally {
            setLoading(false);
        }
    },[]);

    const handleGetTripsByCountry = useCallback(async (country) => {
        try {
            setLoading(true);
            const trips = await getTripsByCountry(country);
            setLoading(false);
            setTrips(trips)
        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
    }, []);

    const handleGetLikedTrips = useCallback(async () => {
        try {
            setLoading(true);
            const likedTrips = await getLikedTrips();
            setLoading(false);
            setTrips(likedTrips);
            }
        catch (err) {
            setLoading(false);
            setError(err)   
        }
    },[])

    const handleChangeLikeStatus = useCallback(
        async (tripId) => {
            try {
                setLoading(true);
                await likeTrip(tripId);
                setLoading(false);
                navigate(ROUTES.FAV_CARDS)
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        },[]
    );

    const handleGetLikedTripsId = useCallback(async()=>{
        try{
            setLoading(true);
            const _likedTripIds = await likedTripsId();
            setTripIds(_likedTripIds);
            setLoading(false);
        }catch (err) {
            setLoading(false);
            setError(err)
        }
    },[])

    return {
        trips, 
        isLoading, 
        error, 
        trip,
        tripIds, 
        setTrip, 
        handleGetLikedTrips, 
        handleCreateTrip, 
        handleGetTrips, 
        handleDeleteTrip, 
        handleEditTrip, 
        handleGetTripById, 
        handleGetTripsByCountry,
        handleChangeLikeStatus,
        handleGetLikedTripsId
    }
}