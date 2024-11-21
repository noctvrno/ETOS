using Etos.Domain.Primitives;

namespace Etos.Domain.Entities;

public class TrainingActivity : IActivity
{
    public ActivityId Id { get; } = null!;
    public string Title { get; } = null!;
    public User Assignee { get; } = null!;

    private TrainingActivity(ActivityId id, string title, User assignee)
    {
        Id = id;
        Title = title;
        Assignee = assignee;
    }

    public TrainingActivity() { }

    public static TrainingActivity Create(string title, User assignee)
    {
        return new TrainingActivity(new ActivityId(Guid.NewGuid()), title, assignee);
    }
}
