using TripsWebsiteAPI.Models.Trips;

namespace TripsWebsiteAPI.Data.TripRepositories
{
    public interface ITripRepository
    {
        public Task<List<Trip>> GetAllTrips();
        public Task<Trip?> GetTrip(string id);
        public Task<Trip> AddTrip(Trip trip);
        public Task<Trip?> EditTrip(Trip trip);
        public Task<bool> DeleteTrip(string id);
        Task<bool> DeleteLike(string userId, string cardId);
        Task<bool> AddLike(string userId, string cardId);
        public Task<List<Trip>> GetUserLikes(string userId);
        public Task<List<string>> GetLikesUserId(string userId);
    }
}
