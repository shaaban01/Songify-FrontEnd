using Microsoft.EntityFrameworkCore;
using SpotifyOnSteroids.Models;

namespace SpotifyOnSteroids.Contexts
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options)
        {
            
        }
        public DbSet<UserModel> Users { get; set; }
    }
}