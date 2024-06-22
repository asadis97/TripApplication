using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TripsWebsiteAPI.Models.Likes

{
    public class UserLikedTrip
    {
        [Key]
        public string Id { get; set; }

        [ForeignKey("User")]
        public string UserId { get; set; }

        public UserSqlModel User { get; set; }

        [ForeignKey("Card")]
        public string TripId { get; set; }

        public TripSqlModel Trip { get; set; }

        public UserLikedTrip() { }

        public UserLikedTrip(string tripId, string userId)
        {
            if (tripId == null || userId == null)
            {
                throw new ArgumentException("TripId and UserId must not be null", nameof(UserLikedTrip));
            }
            Id = Guid.NewGuid().ToString();
            UserId = userId;
            TripId = tripId;
        }
    }
}
