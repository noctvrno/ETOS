using Etos.Domain.Primitives;

namespace Etos.Domain.Entities;

public class TrainingActivity : IActivity
{
    public ActivityId Id { get; }
    public string Title { get; }
    public User Assignee { get; }

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
