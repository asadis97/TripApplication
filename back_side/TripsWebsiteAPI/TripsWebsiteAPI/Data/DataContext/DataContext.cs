using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Reflection.Emit;
using TripsWebsiteAPI.Models.Likes;

namespace TripsWebsiteAPI.Data.DBContext
{
    public class DataContext : DbContext
    {
        public DbSet<TripSqlModel> Trips { get; set; }
        public DbSet<UserSqlModel> Users { get; set; }
        public DbSet<UserLikedTrip> TripLikes { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<UserLikedTrip>()
                .HasOne(ucl => ucl.User)
                .WithMany()
                .HasForeignKey(ucl => ucl.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<UserLikedTrip>()
                 .HasOne(ucl => ucl.Trip)
                 .WithMany()
                 .HasForeignKey(ucl => ucl.TripId)
                 .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
