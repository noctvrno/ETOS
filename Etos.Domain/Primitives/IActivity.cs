namespace Etos.Domain.Primitives;

public interface IActivity
{
    ActivityId Id { get; }
    string Title { get; }
}

public record ActivityId(Guid Value);