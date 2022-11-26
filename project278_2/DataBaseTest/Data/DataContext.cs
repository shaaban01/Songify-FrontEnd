using Microsoft.EntityFrameworkCore;

namespace DataBaseTest.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) 
        {
        
        }
        public DbSet<Personal_Info> personalInfo => Set<Personal_Info>();
    }
}
