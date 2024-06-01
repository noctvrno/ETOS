using Etos.Domain.Entities;
using Etos.Infrastructure.Constants;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Etos.Infrastructure.Configurations;

internal sealed class UsersConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.ToTable(TablesNames.USERS);

        builder.HasKey(u => u.Id);

        builder
            .Property(u => u.Id)
            .HasConversion(id => id.Value, dbId => new UserId(dbId));

        builder.Property(u => u.FirstName);

        builder.Property(u => u.LastName);

        builder.Property(u => u.Email);
    }
}
