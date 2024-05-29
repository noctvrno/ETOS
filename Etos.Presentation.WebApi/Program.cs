using Etos.Application;
using Etos.Infrastructure;
using Etos.Presentation.WebApi;
using Microsoft.EntityFrameworkCore;
using Serilog;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

builder.Services.AddApplication();
builder.Services.AddRepositories();

builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString("Database")));

builder.Host.UseSerilog((context, config) => config.ReadFrom.Configuration(context.Configuration));

WebApplication app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapControllers();

await app.RunAsync();
