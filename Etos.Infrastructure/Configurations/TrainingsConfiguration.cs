using Etos.Domain.Entities;
using Etos.Domain.Primitives;
using Etos.Infrastructure.Constants;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Etos.Infrastructure.Configurations;

internal sealed class TrainingsConfiguration : IEntityTypeConfiguration<TrainingActivity>
{
    public void Configure(EntityTypeBuilder<TrainingActivity> builder)
    {
        builder.ToTable(TablesNames.TRAININGS);

        builder.HasKey(t => t.Id);

        builder
            .Property(t => t.Id)
            .HasConversion(id => id.Value, dbId => new ActivityId(dbId));

        builder
            .HasOne(t => t.Assignee)
            .WithMany(u => u.Trainings)
            .HasForeignKey("UserId");

        builder.Property(t => t.Title);
    }
}
