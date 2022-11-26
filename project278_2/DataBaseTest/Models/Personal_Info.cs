using System.ComponentModel.DataAnnotations;

namespace DataBaseTest
{
    public class Personal_Info
    {
        [Key]
        public string Email { get; set; }
        public string Fname { get; set; }
        public string Lname { get; set; }
        public string Password { get; set; }


        public string Username { get; set; }

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }
    }
}
