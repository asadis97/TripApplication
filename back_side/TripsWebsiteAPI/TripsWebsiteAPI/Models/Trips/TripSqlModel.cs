using System.ComponentModel.DataAnnotations;

namespace TripsWebsiteAPI.Models.Trips
{
    public class TripSqlModel
    {
        [Key]
        public string Id { get; set; }
        [Required]
        public string Title { get; set; } = string.Empty;
        [Required]
        public string Description { get; set; } = string.Empty;
        [Required]
        public string Country { get; set; } = string.Empty;
        [Required]
        public string Continent { get; set; } = string.Empty;
        public string Url { get; set; } = string.Empty;
        public string Alt { get; set; } = string.Empty;

        public TripSqlModel() { }

        public TripSqlModel(Trip trip)
        {
            Id = trip.Id;
            Title = trip.Title;
            Description = trip.Description;
            Country = trip.Country;
            Continent = trip.Continent;
            Url = trip.TripImage.Url;
            Alt = trip.TripImage.Alt;
        }


    }
}
