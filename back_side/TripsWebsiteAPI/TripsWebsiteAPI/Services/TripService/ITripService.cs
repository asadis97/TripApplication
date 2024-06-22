using TripsWebsiteAPI.Models.Trips;
using Microsoft.AspNetCore.Mvc;

namespace TripsWebsiteAPI.Services.TripService
{
    public interface ITripService
    {
        public Task<List<Trip>> GetAllTrips();
        public Task<Trip> GetTrip(string id);
        public Task<Trip> AddTrip(Trip trip);
        public Task<Trip> EditTrip(Trip trip);
        public Task DeleteTrip(string id);
        public Task LikeTripAsync(string cardId, string userId);
        public Task<List<Trip>> GetUserLikes(string userId);
        public Task<List<string>> GetLikesUserId(string userId);
    }
}
