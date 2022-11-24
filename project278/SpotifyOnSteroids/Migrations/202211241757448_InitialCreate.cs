namespace SpotifyOnSteroids.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.UserModel",
                c => new
                    {
                        Username = c.String(nullable: false, maxLength: 128),
                        PasswordHash = c.Binary(nullable: false, maxLength: 128),
                        PasswordSalt = c.Binary(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.Username, t.PasswordHash, t.PasswordSalt });
            
        }
        
        public override void Down()
        {
            DropTable("dbo.UserModel");
        }
    }
}
