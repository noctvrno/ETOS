using Etos.Domain.Primitives;

namespace Etos.Domain.Entities;

public class TrainingActivity(ActivityId id, string title) : IActivity
{
    public ActivityId Id { get; } = id;
    public string Title { get; } = title;
}
