using Microsoft.EntityFrameworkCore;

namespace Etos.Infrastructure;

public sealed class ApplicationDbContext(DbContextOptions options) : DbContext(options)
{
    protected override void OnModelCreating(ModelBuilder modelBuilder) =>
        modelBuilder.ApplyConfigurationsFromAssembly(AssemblyReference.Assembly);
}
