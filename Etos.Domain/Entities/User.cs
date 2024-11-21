using System.Collections.ObjectModel;

namespace Etos.Domain.Entities;

public class User
{
    public UserId Id { get; } = null!;
    public string FirstName { get; } = null!;
    public string LastName { get; } = null!;
    public string Email { get; } = null!;
    public Collection<TrainingActivity> Trainings { get; } = [];

    private User(UserId userId, string firstName, string lastName, string email)
    {
        Id = userId;
        FirstName = firstName;
        LastName = lastName;
        Email = email;
    }

    public User() { }

    public static User Create(string firstName, string lastName, string email)
    {
        return new User(new UserId(Guid.NewGuid()), firstName, lastName, email);
    }
}

public sealed record UserId(Guid Value);
