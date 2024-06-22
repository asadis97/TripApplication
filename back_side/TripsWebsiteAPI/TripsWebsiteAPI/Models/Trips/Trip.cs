using Microsoft.Extensions.Diagnostics.HealthChecks;
using System.ComponentModel.DataAnnotations;

namespace TripsWebsiteAPI.Models.Trips
{
    public class Trip
    {
        public string Id { get; set; }
        [Required]
        public string Title { get; set; } = string.Empty;
        [Required]
        public string Description { get; set; } = string.Empty;
        [Required]
        public string Country { get; set; } = string.Empty;
        [Required]
        public string Continent { get; set; } = string.Empty;
        public Image TripImage { get; set; }
        public List<string> Likes { get; set; }


        public Trip()
        {
            Id = Guid.NewGuid().ToString();
            TripImage = new Image();
            Likes = new List<string>();
        }

        public Trip(TripSqlModel tripSqlModel, List<string> likes)
        {
            Id = tripSqlModel.Id;
            Title = tripSqlModel.Title;
            Description = tripSqlModel.Description;
            Country = tripSqlModel.Country;
            Continent = tripSqlModel.Continent;
            TripImage = new Image
            {
                Url = tripSqlModel.Url,
                Alt = tripSqlModel.Alt
            };
            Likes = likes;
        }
    }
}
