using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace trackingapi.Data.Migrations
{
    /// <inheritdoc />
    public partial class DataBase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Issues",
                newName: "Username");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Issues",
                newName: "Password");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Issues",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Issues");

            migrationBuilder.RenameColumn(
                name: "Username",
                table: "Issues",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "Password",
                table: "Issues",
                newName: "Description");
        }
    }
}
