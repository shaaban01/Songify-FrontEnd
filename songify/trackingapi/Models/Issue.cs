using System.ComponentModel.DataAnnotations;

namespace trackingapi.Models
{
    public class Issue
    {
        public int Id { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Username { get; set; }
        public Priority Priority { get; set; }
        public IssueType IssueType { get; set; }
        public DateTime Created { get; set; }
        public DateTime? Completed { get; set; }
    }

    public enum Priority 
    {
        Low, Medium, High
    }

    public enum IssueType
    {
        Feature, Bug, Documentation
    }
}
