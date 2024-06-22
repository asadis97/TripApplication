using TripsWebsiteAPI.Data.TripRepositories;
using TripsWebsiteAPI.Exceptions;
using TripsWebsiteAPI.Models.Trips;

namespace TripsWebsiteAPI.Services.TripService
{
    public class TripService : ITripService
    {
        private readonly ITripRepository _tripRepository;

        public TripService(ITripRepository tripRepository)
        {
            _tripRepository = tripRepository;
        }

        public async Task<Trip> AddTrip(Trip trip)
        {
            return await _tripRepository.AddTrip(trip);
        }

        public async Task DeleteTrip(string id)
        {
            bool isSuccses = await _tripRepository.DeleteTrip(id);
            if (isSuccses == false)
            {
                throw new NotFoundException(id);
            }
        }

        public async Task<Trip> EditTrip(Trip trip)
        {
            Trip? selectedTrip = await _tripRepository.EditTrip(trip);
            if (selectedTrip == null)
            {
                throw new NotFoundException(trip.Id.ToString());
            }
            return selectedTrip;
        }

        public async Task<List<Trip>> GetAllTrips()
        {
            return await _tripRepository.GetAllTrips();
        }

        public async Task<Trip> GetTrip(string id)
        {
            Trip? trip = await _tripRepository.GetTrip(id);
            if (trip == null)
            {
                throw new NotFoundException(id);
            }
            return trip;
        }

        public async Task LikeTripAsync(string tripId, string userId)
        {
            var trip = await _tripRepository.GetTrip(tripId);
            Console.WriteLine(trip);

            if (trip == null)
            {
                throw new NotFoundException(tripId);
            }
            bool result;
            if (trip.Likes.Contains(userId))
            {
                result = await _tripRepository.DeleteLike(userId, tripId);
            }
            else
            {
                result = await _tripRepository.AddLike(userId, tripId);
            }
            if (!result)
            {
                throw new NotFoundException(trip.Id);
            }
        }

        public async Task<List<Trip>> GetUserLikes(string userId)
        {
            try
            {
                List<Trip> userLikes = await _tripRepository.GetUserLikes(userId);
                return userLikes;
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get user likes", ex);
            }
        }

        public async Task<List<string>> GetLikesUserId(string userId)
        {
            try
            {
                List<string> userLikes = await _tripRepository.GetLikesUserId(userId);
                return userLikes;
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get user likes", ex);
            }
        }
    }
}
