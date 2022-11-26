var builder = WebApplication.CreateBuilder(args);

//Add connection string
//var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? "Data Source = paginationDb";

//Add a context to the services collection
//builder.Services.AddSqlServer<SpotifyOnSteroids.Contexts.ApplicationDbContext>(connectionString);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
