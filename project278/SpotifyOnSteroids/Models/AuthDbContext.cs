using Microsoft.EntityFrameworkCore;
using SpotifyOnSteroids.Models;
using System.Data.Entity;
using DbContext = Microsoft.EntityFrameworkCore.DbContext;

namespace SpotifyOnSteroids.Data
{
    public class AuthDbContext : DbContext
    {
        public AuthDbContext() 
        {
        
        }
        public Microsoft.EntityFrameworkCore.DbSet<UserModel> AppUsers { get; set; }
        public AuthDbContext(DbContextOptions<AuthDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserModel>(entity =>
            {
                entity.Property(e => e.Username).HasMaxLength(250);
                entity.Property(e => e.PasswordHash).HasMaxLength(250);

                entity.HasData(new UserModel
                {
                    Username = "bob",
                
                });

            });
        }
    }
}
