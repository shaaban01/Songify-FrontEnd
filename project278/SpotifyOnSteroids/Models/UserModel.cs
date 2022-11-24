using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpotifyOnSteroids.Models
{
    public class UserModel
    {
        [Key, Column(Order = 0)]
        public string Username { get; set; } = string.Empty;
        [Key, Column(Order = 1)]
        public byte[] PasswordHash { get; set; }
        [Key, Column(Order = 2)]
        public byte[] PasswordSalt { get; set; }
    }
}
