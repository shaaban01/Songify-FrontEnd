namespace tracking.client
{
    internal class IssueDto
    {
        public int Id { get; set; }     
        public string Email { get; set; }       
        public string Password { get; set; }
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
