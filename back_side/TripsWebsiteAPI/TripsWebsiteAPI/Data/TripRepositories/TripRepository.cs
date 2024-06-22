using Microsoft.EntityFrameworkCore;
using TripsWebsiteAPI.Data.DBContext;
using TripsWebsiteAPI.Models.Likes;


namespace TripsWebsiteAPI.Data.TripRepositories
{
    public class TripRepository : ITripRepository
    {
        private readonly DataContext _context;

        public TripRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Trip> AddTrip(Trip trip)
        {
            var tripSqlModel = new TripSqlModel(trip);

            _context.Trips.Add(tripSqlModel);
            await _context.SaveChangesAsync();

            return trip;
        }

        public async Task<bool> DeleteTrip(string id)
        {
            var trip = await _context.Trips.FindAsync(id);
            if (trip == null)
            {
                return false;
            }

            _context.Trips.Remove(trip);
            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<Trip?> EditTrip(Trip trip)
        {
            var selectedTrip = await _context.Trips.FindAsync(trip.Id);
            if (selectedTrip == null)
            {
                return null;
            }

            selectedTrip.Title = trip.Title;
            selectedTrip.Description = trip.Description;
            selectedTrip.Country = trip.Country; 
            selectedTrip.Continent = trip.Continent;
            selectedTrip.Url = trip.TripImage.Url;
            selectedTrip.Alt = trip.TripImage.Alt;

            await _context.SaveChangesAsync();

            var userIds = await _context.TripLikes
               .Where(like => like.TripId == selectedTrip.Id)
               .Select(like => like.UserId)
               .ToListAsync();

            trip.Likes = userIds.ToList();
            return trip;
        }

        public async Task<List<Trip>> GetAllTrips()
        {
            var tripsSqlModel = await _context.Trips.ToListAsync();
            var trips = new List<Trip>();

            foreach (var item in tripsSqlModel)
            {
                var userIds = await _context.TripLikes
                   .Where(like => like.TripId == item.Id)
                   .Select(like => like.UserId)
                   .ToListAsync();
                var trip = new Trip(item, userIds.ToList());
                trips.Add(trip);
            }
            return trips;
        }

        public async Task<Trip?> GetTrip(string id)
        {
            var trip = await _context.Trips.FindAsync(id);

            if (trip == null)
            {
                return null;
            }

            var userIds = await _context.TripLikes
            .Where(like => like.TripId == trip.Id)
            .Select(like => like.UserId)
            .ToListAsync();

            return new Trip(trip, userIds.ToList());
        }

        public async Task<bool> DeleteLike(string userId, string tripId)
        {
            var tripLike = await _context.TripLikes.FirstOrDefaultAsync(like => like.TripId == tripId && like.UserId == userId);
            if (tripLike == null)
            {
                return false;
            }

            _context.TripLikes.Remove(tripLike);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> AddLike(string userId, string tripId)
        {
            var tripLike = await _context.TripLikes.FirstOrDefaultAsync(like => like.TripId == tripId && like.UserId == userId);
            if (tripLike != null)
            {
                Console.WriteLine(1);
                return false;
            }

            var userLikedTrip = new UserLikedTrip(tripId, userId);

            _context.TripLikes.Add(userLikedTrip);
            await _context.SaveChangesAsync();
            Console.WriteLine(userLikedTrip);
            return true;
        }

        public async Task<List<Trip>> GetUserLikes(string userId)
        {
            Console.WriteLine(userId);
            try
            {
                var userLikes = await _context.TripLikes
                    .Where(like => like.UserId == userId)
                    .Select(like => like.TripId)
                    .ToListAsync();
                Console.WriteLine(userLikes);
                List<Trip> likedTrips = new List<Trip>();

                foreach (var like in userLikes)
                {
                    Trip _trip = await GetTrip(like);
                    if (_trip != null)
                    {
                        likedTrips.Add(_trip);
                    }
                }
                Console.WriteLine(likedTrips);
                return likedTrips;
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
                var userLikes = await _context.TripLikes
                    .Where(like => like.UserId == userId)
                    .Select(like => like.TripId)
                    .ToListAsync();
             
                return userLikes;
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get user likes", ex);
            }
        }
    }
}

